import { NextResponse } from 'next/server';

// This is a mapping for common UPU event codes to make them more readable.
// You can expand this list over time.
const eventCodeMap: { [key: string]: string } = {
  EMC: 'Departure from outward office of exchange',
  EMD: 'Arrival at inward office of exchange',
  EMH: 'Arrival at delivery office',
  EMI: 'Delivered',
};

const stateCodeMap: Record<string, string> = {
  '1': 'Accepted',
  '2': 'In Transit',
  '3': 'Delivered',
};

type RouteContext = {
  params: Promise<{ trackingId: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  const { trackingId: rawTrackingId } = await context.params;
  const trackingId = rawTrackingId.toUpperCase();
  const token = process.env.UPU_PTT_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'API configuration error.' },
      { status: 500 }
    );
  }

  const apiUrl = `https://ptt.ptc.post/PTT.API/Service.svc/rest/itemTTExt/${trackingId}/${token}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': 'SomaliPost-Tracker/1.0 (+https://posta.so)',
      },
      cache: 'no-store', // We always want the latest tracking data
    });

    const textResponse = await response.text();

    // Guard 1: Handle the "No events found" case from PTT API
    if (textResponse.trim() === '1') {
      return NextResponse.json({
        status: 'Not Found',
        message: 'No tracking information is available for this item yet.',
        history: [],
      });
    }

    // Guard 2: Try to parse as JSON. If it fails, it might be an error page.
    let data: any;
    try {
      data = JSON.parse(textResponse);
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid response from tracking service.' },
        { status: 502 } // 502 Bad Gateway is appropriate here
      );
    }

    const records = Array.isArray(data) ? data : [data];
    const record = records[0];

    if (!record || !record.ID) {
      return NextResponse.json(
        { error: 'Tracking information is unavailable for this item.' },
        { status: 404 }
      );
    }

    const history = (Array.isArray(record.Events) ? record.Events : [])
      .map((event: any) => ({
        status:
          event.EventNm ||
          eventCodeMap[event.EventCd] ||
          event.EventCd ||
          'Unknown event',
        location: event.EventLocation || 'N/A',
        code: event.EventCd || 'N/A',
        timestamp: normalizeEventDate(event.EventDT),
      }))
      .sort((a, b) => sortByTimestamp(a.timestamp, b.timestamp));

    const latestEvent = history[history.length - 1];

    // Normalize the successful response into our clean format
    const normalizedData = {
      trackingId: record.ID,
      status:
        latestEvent?.status ||
        stateCodeMap[String(record.State)] ||
        `Status code ${record.State ?? 'Unknown'}`,
      origin: record.OriginCountryNm || record.OriginCountryCd || 'Unknown',
      destination:
        record.DestinationCountryNm || record.DestinationCountryCd || 'Unknown',
      history,
    };

    return NextResponse.json(normalizedData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to connect to the tracking service.' },
      { status: 503 } // 503 Service Unavailable
    );
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
