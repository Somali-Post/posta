import { NextResponse } from "next/server";
import { getEventInfo, getStateLabel, isValidS10 } from "@/lib/tracking";

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

const regionNames =
  typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

const requestCounters = new Map<
  string,
  { count: number; resetAt: number }
>();

export async function GET(request: Request, context: RouteContext) {
  const { trackingId: rawTrackingId } = await context.params;
  const trackingId = rawTrackingId.toUpperCase();

  if (!isValidS10(trackingId)) {
    return NextResponse.json(
      { error: "Invalid S10 tracking number." },
      { status: 400 },
    );
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait and try again." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  const token = process.env.UPU_PTT_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Tracking is temporarily unavailable." },
      { status: 503 },
    );
  }

  const apiUrl = `https://ptt.ptc.post/PTT.API/Service.svc/rest/itemTTExt/${trackingId}/${token}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "SomaliPost-Tracker/1.0 (+https://posta.so)",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to retrieve tracking details." },
        { status: 502 },
      );
    }

    const textResponse = await response.text();

    if (textResponse.trim() === "1") {
      return NextResponse.json({
        status: "Not Found",
        message: "No tracking information is available for this item yet.",
        history: [],
      });
    }

    let data: unknown;

    try {
      data = JSON.parse(textResponse);
    } catch {
      return NextResponse.json(
        { error: "Invalid response from tracking service." },
        { status: 502 },
      );
    }

    const records = (Array.isArray(data) ? data : [data]) as PttRecord[];
    const record = records[0];

    if (!record?.ID) {
      return NextResponse.json(
        { error: "Tracking information is unavailable for this item." },
        { status: 404 },
      );
    }

    const history = (Array.isArray(record.Events) ? record.Events : [])
      .map((event) => {
        const information = getEventInfo(event.EventCd);

        return {
          status:
            event.EventNm ||
            information?.label ||
            event.EventCd ||
            "Unknown event",
          explanation:
            information?.explanation ||
            "The postal operator reported this status.",
          location: event.EventLocation || "Location not provided",
          code: event.EventCd || "N/A",
          timestamp: normalizeEventDate(event.EventDT),
        };
      })
      .sort(
        (first, second) =>
          Date.parse(first.timestamp) - Date.parse(second.timestamp),
      );

    const latestEvent = history.at(-1);
    const originCode = record.OriginCountryCd || "";
    const destinationCode = record.DestinationCountryCd || "";
    const stateCode =
      record.State === undefined ? undefined : String(record.State);

    return NextResponse.json({
      trackingId: record.ID,
      status:
        latestEvent?.status ||
        getStateLabel(stateCode) ||
        `Status code ${record.State ?? "Unknown"}`,
      origin: getCountryName(originCode, record.OriginCountryNm),
      destination: getCountryName(
        destinationCode,
        record.DestinationCountryNm,
      ),
      originCode: originCode || undefined,
      destinationCode: destinationCode || undefined,
      history,
      stateCode,
      latestEventCode: latestEvent?.code,
    });
  } catch {
    return NextResponse.json(
      { error: "Tracking is temporarily unavailable. Please try again soon." },
      { status: 503 },
    );
  }
}

function isRateLimited(request: Request) {
  const now = Date.now();
  const client =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  const current = requestCounters.get(client);

  if (!current || current.resetAt <= now) {
    requestCounters.set(client, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  current.count += 1;

  if (requestCounters.size > 1000) {
    for (const [key, value] of requestCounters) {
      if (value.resetAt <= now) {
        requestCounters.delete(key);
      }
    }
  }

  return current.count > 30;
}

function normalizeEventDate(rawValue?: string) {
  if (!rawValue) {
    return "Unknown date";
  }

  const match = /Date\((\d+)/.exec(rawValue);
  return match ? new Date(Number(match[1])).toISOString() : rawValue;
}

function getCountryName(code?: string, fallbackName?: string) {
  if (fallbackName) {
    return fallbackName;
  }

  if (!code) {
    return "Unknown";
  }

  try {
    return regionNames?.of(code.toUpperCase()) || code.toUpperCase();
  } catch {
    return code.toUpperCase();
  }
}
