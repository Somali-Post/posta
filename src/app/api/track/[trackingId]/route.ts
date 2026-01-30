import { NextResponse, type NextRequest } from 'next/server';
import { getEventInfo, getStateLabel } from '@/lib/trackingEvents';
import { isValidS10 } from '@/lib/s10';

const regionDisplayNames =
  typeof Intl !== 'undefined' && typeof Intl.DisplayNames === 'function'
    ? new Intl.DisplayNames(['en'], { type: 'region' })
    : null;

type RouteContext = {
  params: Promise<{ trackingId: string }>;
};

type PttEvent = {
  EventCd?: string;
  EventNm?: string;
  EventLocation?: string;
  EventDT?: string;
};

type PttRecord = {
  ID: string;
  State?: number | string;
  OriginCountryCd?: string;
  OriginCountryNm?: string;
  DestinationCountryCd?: string;
  DestinationCountryNm?: string;
  Events?: PttEvent[];
};

type NormalizedEvent = {
  status: string;
  explanation: string;
  location: string;
  code: string;
  timestamp: string;
};

// --- simple in-memory rate limit + cache (per server instance) ---
type CacheEntry = { expiresAt: number; payload: any; status?: number };
const cache = new Map<string, CacheEntry>();

type RateEntry = { resetAt: number; count: number };
const rate = new Map<string, RateEntry>();

function getClientIp(req: Request): string {
  const xf = req.headers.get('x-forwarded-for');
  if (xf) return xf.split(',')[0].trim();
  const xr = req.headers.get('x-real-ip');
  if (xr) return xr.trim();
  return 'unknown';
}

function rateLimit(ip: string, limit: number, windowMs: number): { ok: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const existing = rate.get(ip);

  if (!existing || existing.resetAt <= now) {
    rate.set(ip, { resetAt: now + windowMs, count: 1 });
    return { ok: true };
  }

  if (existing.count >= limit) {
    const retryAfterSec = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    return { ok: false, retryAfterSec };
  }

  existing.count += 1;
  rate.set(ip, existing);
  return { ok: true };
}

function looksLikeHtml(text: string): boolean {
  const t = text.trim().toLowerCase();
  return t.startsWith('<!doctype') || t.startsWith('<html') || t.includes('<head') || t.includes('<body');
}

function preArrivalPayload(trackingId: string) {
  return {
    trackingId,
    status: 'Pre-Arrival',
    message: 'No tracking updates are available in Somalia yet.',
    history: [],
  };
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { trackingId: rawTrackingId } = await context.params;
  const trackingId = rawTrackingId.toUpperCase();
  const token = process.env.UPU_PTT_TOKEN;

  // Server-side S10 validation
  if (!isValidS10(trackingId)) {
    return NextResponse.json(
      { error: 'INVALID_S10', message: 'Invalid tracking number format or check digit.' },
      { status: 400 }
    );
  }

  // Rate limit (best-effort)
  const ip = getClientIp(request);
  const rl = rateLimit(ip, 30, 5 * 60 * 1000);
  if (!rl.ok) {
    const res = NextResponse.json(
      { error: 'RATE_LIMIT', message: 'Too many requests. Please wait and try again.' },
      { status: 429 }
    );
    if (rl.retryAfterSec) res.headers.set('Retry-After', String(rl.retryAfterSec));
    return res;
  }

  if (!token) {
    return NextResponse.json({ error: 'CONFIG', message: 'API configuration error.' }, { status: 500 });
  }

  // Cache lookup
  const now = Date.now();
  const cached = cache.get(trackingId);
  if (cached && cached.expiresAt > now) {
    const res = NextResponse.json(cached.payload, cached.status ? { status: cached.status } : undefined);
    res.headers.set('X-Cache', 'HIT');
    return res;
  }

  const apiUrl = `https://ptt.ptc.post/PTT.API/Service.svc/rest/itemTTExt/${trackingId}/${token}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': 'SomaliPost-Tracker/1.0 (+https://posta.so)',
      },
      cache: 'no-store',
    });

    const textResponse = await response.text();

    // If upstream returns HTML/WAF/blocked - treat as Pre-Arrival for valid S10
    if (looksLikeHtml(textResponse)) {
      const payload = preArrivalPayload(trackingId);
      cache.set(trackingId, { payload, expiresAt: now + 30_000 });
      const res = NextResponse.json(payload);
      res.headers.set('X-Cache', 'MISS');
      return res;
    }

    // Not found sentinel (keep existing behavior)
    if (textResponse.trim() === '1') {
      const payload = {
        trackingId,
        status: 'Not Found',
        message: 'No tracking information is available for this item yet.',
        history: [],
      };
      cache.set(trackingId, { payload, expiresAt: now + 30_000 });
      const res = NextResponse.json(payload);
      res.headers.set('X-Cache', 'MISS');
      return res;
    }

    let data: unknown;
    try {
      data = JSON.parse(textResponse);
    } catch {
      // Invalid JSON happens often pre-arrival; treat as Pre-Arrival
      const payload = preArrivalPayload(trackingId);
      cache.set(trackingId, { payload, expiresAt: now + 30_000 });
      const res = NextResponse.json(payload);
      res.headers.set('X-Cache', 'MISS');
      return res;
    }

    const records = (Array.isArray(data) ? data : [data]) as PttRecord[];
    const record = records[0];

    // If structure is missing, treat as Pre-Arrival rather than hard error
    if (!record || !record.ID) {
      const payload = preArrivalPayload(trackingId);
      cache.set(trackingId, { payload, expiresAt: now + 30_000 });
      const res = NextResponse.json(payload);
      res.headers.set('X-Cache', 'MISS');
      return res;
    }

    const sourceEvents = Array.isArray(record.Events) ? record.Events : [];
    const history: NormalizedEvent[] = sourceEvents
      .map((event: PttEvent): NormalizedEvent => {
        const info = getEventInfo(event.EventCd, 'en');
        const friendlyStatus = event.EventNm || info?.label || event.EventCd || 'Unknown event';
        const friendlyExplanation =
          info?.explanation ||
          (event.EventNm ? 'Status provided directly by the postal operator.' : 'The postal operator reported this status.');

        return {
          status: friendlyStatus,
          explanation: friendlyExplanation,
          location: event.EventLocation || 'N/A',
          code: event.EventCd || 'N/A',
          timestamp: normalizeEventDate(event.EventDT),
        };
      })
      .sort((a, b) => sortByTimestamp(a.timestamp, b.timestamp));

    // If we got a record but no events yet, this is still effectively Pre-Arrival for Somalia tracking
    if (history.length === 0) {
      const payload = preArrivalPayload(record.ID || trackingId);
      cache.set(trackingId, { payload, expiresAt: now + 30_000 });
      const res = NextResponse.json(payload);
      res.headers.set('X-Cache', 'MISS');
      return res;
    }

    const latestEvent = history[history.length - 1];
    const originCode = record.OriginCountryCd || '';
    const destinationCode = record.DestinationCountryCd || '';
    const stateCode =
      typeof record.State === 'number' || typeof record.State === 'string' ? String(record.State) : undefined;

    const normalizedData = {
      trackingId: record.ID,
      status: latestEvent?.status || getStateLabel(stateCode, 'en') || `Status code ${record.State ?? 'Unknown'}`,
      origin: getCountryName(originCode, record.OriginCountryNm),
      destination: getCountryName(destinationCode, record.DestinationCountryNm),
      originCode: originCode || undefined,
      destinationCode: destinationCode || undefined,
      history,
      stateCode,
      latestEventCode: latestEvent?.code,
    };

    cache.set(trackingId, { payload: normalizedData, expiresAt: now + 120_000 });

    const res = NextResponse.json(normalizedData);
    res.headers.set('X-Cache', 'MISS');
    return res;
  } catch {
    // Network failures often happen before arrival too; treat as Pre-Arrival (user-friendly)
    const payload = preArrivalPayload(trackingId);
    cache.set(trackingId, { payload, expiresAt: now + 30_000 });
    const res = NextResponse.json(payload);
    res.headers.set('X-Cache', 'MISS');
    return res;
  }
}

function normalizeEventDate(rawValue?: string): string {
  if (!rawValue) return 'Unknown date';

  const match = /Date\((\d+)/.exec(rawValue);
  if (!match) return rawValue;

  const timestamp = Number(match[1]);
  if (Number.isNaN(timestamp)) return rawValue;

  return new Date(timestamp).toISOString();
}

function sortByTimestamp(first: string, second: string): number {
  const firstTime = Date.parse(first);
  const secondTime = Date.parse(second);
  if (Number.isNaN(firstTime) || Number.isNaN(secondTime)) return 0;
  return firstTime - secondTime;
}

function getCountryName(code?: string, fallbackName?: string): string {
  if (fallbackName) return fallbackName;
  if (!code) return 'Unknown';

  const normalized = code.toUpperCase();
  if (regionDisplayNames) {
    try {
      const displayName = regionDisplayNames.of(normalized);
      if (displayName) return displayName;
    } catch {
      return normalized;
    }
  }
  return normalized;
}
