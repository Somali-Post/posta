import { NextResponse } from 'next/server';
import { getEventInfo, getStateLabel } from '@/lib/trackingEvents';

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

export async function GET(request: Request, context: RouteContext) {
  const { trackingId: rawTrackingId } = await context.params;
  const trackingId = rawTrackingId.toUpperCase();
  const token = process.env.UPU_PTT_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'API configuration error.' }, { status: 500 });
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

    if (textResponse.trim() === '1') {
      return NextResponse.json({
        status: 'Not Found',
        message: 'No tracking information is available for this item yet.',
        history: [],
      });
    }

    let data: unknown;
    try {
      data = JSON.parse(textResponse);
    } catch {
      return NextResponse.json({ error: 'Invalid response from tracking service.' }, { status: 502 });
    }

    const records = (Array.isArray(data) ? data : [data]) as PttRecord[];
    const record = records[0];

    if (!record || !record.ID) {
      return NextResponse.json({ error: 'Tracking information is unavailable for this item.' }, { status: 404 });
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

    return NextResponse.json(normalizedData);
  } catch {
    return NextResponse.json({ error: 'Failed to connect to the tracking service.' }, { status: 503 });
  }
}

function normalizeEventDate(rawValue?: string): string {
  if (!rawValue) {
    return 'Unknown date';
  }

  const match = /Date\((\d+)/.exec(rawValue);
  if (!match) {
    return rawValue;
  }

  const timestamp = Number(match[1]);
  if (Number.isNaN(timestamp)) {
    return rawValue;
  }

  return new Date(timestamp).toISOString();
}

function sortByTimestamp(first: string, second: string): number {
  const firstTime = Date.parse(first);
  const secondTime = Date.parse(second);

  if (Number.isNaN(firstTime) || Number.isNaN(secondTime)) {
    return 0;
  }

  return firstTime - secondTime;
}

function getCountryName(code?: string, fallbackName?: string): string {
  if (fallbackName) {
    return fallbackName;
  }

  if (!code) {
    return 'Unknown';
  }

  const normalized = code.toUpperCase();

  if (regionDisplayNames) {
    try {
      const displayName = regionDisplayNames.of(normalized);
      if (displayName) {
        return displayName;
      }
    } catch {
      return normalized;
    }
  }

  return normalized;
}
