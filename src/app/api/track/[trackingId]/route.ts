import { NextResponse } from 'next/server';

// This is a mapping for common UPU event codes to make them more readable.
// You can expand this list over time.
const eventCodeMap: { [key: string]: string } = {
  EMC: 'Departure from outward office of exchange',
  EMD: 'Arrival at inward office of exchange',
  EMH: 'Arrival at delivery office',
  EMI: 'Delivered',
};

export async function GET(
  request: Request,
  { params }: { params: { trackingId: string } }
) {
  const trackingId = params.trackingId.toUpperCase();
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
    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid response from tracking service.' },
        { status: 502 } // 502 Bad Gateway is appropriate here
      );
    }

    // Normalize the successful response into our clean format
    const normalizedData = {
      trackingId: data.ID,
      status: data.State,
      origin: data.OriginCountryCd,
      destination: data.DestinationCountryCd,
      history: (data.Events || []).map((event: any) => ({
        status: event.EventNm || eventCodeMap[event.EventCd] || event.EventCd, // Use friendly name, fallback to code
        location: event.EventLocation || 'N/A',
        code: event.EventCd,
        timestamp: event.EventDT,
      })),
    };

    return NextResponse.json(normalizedData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to connect to the tracking service.' },
      { status: 503 } // 503 Service Unavailable
    );
  }
}
