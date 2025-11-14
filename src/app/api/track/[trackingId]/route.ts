import { NextResponse } from 'next/server';

type EventInfo = {
  label: string;
  explanation: string;
};

// This is a mapping for common UPU event codes to make them more readable.
// You can expand this list over time.
const eventCodeMap: Record<string, EventInfo> = {
  // --- Export Events (Origin Country) ---
  EMA: {
    label: 'Posting/collection',
    explanation: 'The postal operator received the parcel from the sender.',
  },
  EMB: {
    label: 'Arrival at outward office of exchange',
    explanation:
      'The parcel reached the main export processing facility in the origin country.',
  },
  EMC: {
    label: 'Departure from outward office of exchange',
    explanation:
      'The parcel left the origin-country export hub and is en route to the next leg.',
  },
  EXA: {
    label: 'Item presented to export customs/security',
    explanation: 'Export customs or security authorities are inspecting the parcel.',
  },
  EXB: {
    label: 'Item held by export customs/security',
    explanation: 'Export customs/security temporarily retained the parcel for checks.',
  },
  EXC: {
    label: 'Item returned from export customs/security',
    explanation: 'Export customs/security cleared the parcel and returned it to the postal operator.',
  },
  EXD: {
    label: 'Item held at outward office of exchange',
    explanation: 'The parcel is waiting at the export facility before it can depart.',
  },
  EXX: {
    label: 'Export cancellation',
    explanation: 'Export processing was cancelled, usually because shipping plans changed.',
  },

  // --- Transit Events ---
  EMJ: {
    label: 'Arrival at transit office of exchange',
    explanation: 'The parcel arrived in a transit country’s exchange office.',
  },
  EMK: {
    label: 'Departure from transit office of exchange',
    explanation: 'The parcel departed the transit hub toward the destination country.',
  },

  // --- Import & Customs Events (Destination Country) ---
  EMD: {
    label: 'Arrival at inward office of exchange',
    explanation: 'The parcel reached the destination country’s import facility.',
  },
  EDA: {
    label: 'Held at inward office of exchange',
    explanation: 'The parcel is on hold at the import facility for operational reasons.',
  },
  EDB: {
    label: 'Item presented to import customs',
    explanation: 'The parcel was handed to destination customs for clearance.',
  },
  EME: {
    label: 'Held by import customs',
    explanation: 'Destination customs are inspecting or processing the parcel.',
  },
  EDC: {
    label: 'Item returned from customs (import)',
    explanation: 'Customs finished processing and released the parcel back to the postal operator.',
  },
  EMF: {
    label: 'Departure from inward office of exchange',
    explanation:
      'The parcel left the import facility and is moving into the domestic delivery network.',
  },

  // --- Domestic Processing Events (Destination Country) ---
  EDD: {
    label: 'Item into sorting centre',
    explanation: 'The parcel arrived at a local sorting centre in the destination country.',
  },
  EDE: {
    label: 'Item out of sorting centre',
    explanation: 'Sorting is complete and the parcel left the sorting centre.',
  },
  EMG: {
    label: 'Arrival at delivery office',
    explanation: 'The parcel reached the local delivery post office.',
  },
  EDF: {
    label: 'Item held at delivery depot',
    explanation: 'The parcel is waiting at the local delivery depot.',
  },
  EDG: {
    label: 'Item out for physical delivery',
    explanation: 'A courier has the parcel and is attempting delivery.',
  },
  EDH: {
    label: 'Item arrival at collection point for pick-up (by recipient)',
    explanation: 'The parcel is ready for the recipient to pick up at a collection point.',
  },

  // --- Final Delivery Events ---
  EMI: {
    label: 'Final delivery',
    explanation: 'The parcel has been delivered to the recipient.',
  },
  EMH: {
    label: 'Unsuccessful (physical) delivery',
    explanation: 'A delivery attempt failed; typically a notice will be left.',
  },
  EDX: {
    label: 'Import terminated',
    explanation: 'The import process was stopped; the parcel may be returning to sender.',
  },

  // Legacy/uncommon
  EMX: {
    label: 'Item out of sorting centre',
    explanation: 'The parcel left a sorting centre (legacy code).',
  },
};

const stateCodeMap: Record<string, string> = {
  '1': 'Accepted',
  '2': 'In Transit',
  '3': 'Delivered',
};

const regionDisplayNames =
  typeof Intl !== 'undefined' && typeof Intl.DisplayNames === 'function'
    ? new Intl.DisplayNames(['en'], { type: 'region' })
    : null;

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
      .map((event: any) => {
        const eventInfo = eventCodeMap[event.EventCd] || null;
        const friendlyStatus =
          event.EventNm ||
          eventInfo?.label ||
          event.EventCd ||
          'Unknown event';
        const friendlyExplanation =
          eventInfo?.explanation ||
          (event.EventNm
            ? 'Status provided directly by the postal operator.'
            : 'The postal operator reported this status.');

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

    // Normalize the successful response into our clean format
    const originCode = record.OriginCountryCd || '';
    const destinationCode = record.DestinationCountryCd || '';

    const normalizedData = {
      trackingId: record.ID,
      status:
        latestEvent?.status ||
        stateCodeMap[String(record.State)] ||
        `Status code ${record.State ?? 'Unknown'}`,
      origin: getCountryName(originCode, record.OriginCountryNm),
      destination: getCountryName(destinationCode, record.DestinationCountryNm),
      originCode: originCode || undefined,
      destinationCode: destinationCode || undefined,
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
      // Ignore display name failures and fall back to the code.
    }
  }

  return normalized;
}
