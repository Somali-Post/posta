# Tracking Integration

This document records the tracking integration that existed before the Phase 1 website rebuild work. It intentionally lists environment-variable names only and does not include or require secret values.

## Current request flow

1. The public tracking page at `/track` accepts a tracking number from the user.
2. The tracking page normalizes the input with `normalizeTrackingId()` from `src/lib/s10.ts`.
3. The tracking page validates the normalized number with `isValidS10()` before sending a request.
4. Valid input calls the existing backend route: `GET /api/track/{trackingId}`.
5. The backend route validates the S10 number again server-side.
6. The backend route checks a best-effort in-memory rate limit keyed by client IP.
7. The backend route reads `UPU_PTT_TOKEN` and calls the UPU/PTT endpoint:
   `https://ptt.ptc.post/PTT.API/Service.svc/rest/itemTTExt/{trackingId}/{token}`
8. The backend route maps upstream responses into a normalized JSON payload for the frontend.
9. The frontend renders loading, validation, unavailable, rate-limit, service-error, and successful-result states.

## Relevant files

- `src/app/track/page.tsx`: Public tracking page and frontend state handling.
- `src/app/api/track/[trackingId]/route.ts`: Backend tracking proxy, validation, cache, rate limit, upstream request, and response mapping.
- `src/lib/s10.ts`: S10 normalization, structural validation, check-digit calculation, and final validation.
- `src/lib/trackingEvents.ts`: Postal event-code and state-code labels/explanations used by backend and frontend.
- `src/lib/utils.ts`: `countryCodeToFlag()` helper used by the tracking UI.
- `public/images/upu-logo.png`: UPU logo displayed as an external fallback reference link.

## Environment-variable names

- `UPU_PTT_TOKEN`: Token used only by the backend tracking route when requesting the PTT tracking service.

## Validation logic

- Input is normalized by removing non-alphanumeric characters and uppercasing.
- S10 format must match: two letters, nine digits, two letters.
- The ninth digit is validated as the S10 check digit.
- Check digit weights for the first eight serial digits are: `8, 6, 4, 2, 3, 5, 9, 7`.
- Computed digit rules:
  - `11 - (sum % 11)`
  - `10` becomes `0`
  - `11` becomes `5`
- Validation runs in both the frontend and backend.

## Rate limiting and caching

- Rate limiting is an in-memory best-effort map per server instance.
- Limit: 30 requests per client IP per 5 minutes.
- Rate-limit response: HTTP `429` with `{ error: "RATE_LIMIT", message: "Too many requests. Please wait and try again." }`.
- Successful payloads with history are cached for 120 seconds.
- Pre-arrival, not-found, invalid upstream JSON, HTML/WAF-like upstream responses, and network-failure fallback payloads are cached for 30 seconds.
- Cache responses include `X-Cache: HIT` or `X-Cache: MISS`.

## Upstream response mapping

The backend accepts JSON, text, and defensive fallback responses from the upstream service.

- Invalid S10:
  - HTTP `400`
  - `{ error: "INVALID_S10", message: "Invalid tracking number format or check digit." }`
- Missing server token:
  - HTTP `500`
  - `{ error: "CONFIG", message: "API configuration error." }`
- Upstream text response equal to `1`:
  - HTTP `200`
  - `{ trackingId, status: "Not Found", message: "No tracking information is available for this item yet.", history: [] }`
- Upstream HTML, invalid JSON, missing record ID, record with no events, or network failure:
  - HTTP `200`
  - `{ trackingId, status: "Pre-Arrival", message: "No tracking updates are available in Somalia yet.", history: [] }`
- Successful event record:
  - HTTP `200`
  - `{ trackingId, status, origin, destination, originCode, destinationCode, history, stateCode, latestEventCode }`

Each history event is normalized to:

```ts
{
  status: string;
  explanation: string;
  location: string;
  code: string;
  timestamp: string;
}
```

## Known frontend states

- Empty tracking number: client-side validation message, no backend request.
- Incorrect format or invalid check digit: client-side validation message, or backend `INVALID_S10` handling.
- Valid-format but unavailable number: backend returns `Not Found` or `Pre-Arrival`; frontend shows transit guidance.
- API configuration error: backend returns `CONFIG`; frontend shows a generic unable-to-retrieve message.
- Rate limit: backend returns `RATE_LIMIT`; frontend shows a too-many-requests message.
- Network/API error from browser fetch: frontend shows a generic tracking error.
- Successful result: frontend shows current status, origin/destination, and chronological tracking history.

## Dependencies used by tracking

- Next.js route handlers and `NextResponse`.
- React state hooks in the tracking page.
- `next/image` for the UPU logo.
- Internal helpers in `src/lib/s10.ts`, `src/lib/trackingEvents.ts`, and `src/lib/utils.ts`.

## Manual regression checklist

- Empty input:
  - Leave the tracking field empty.
  - Submit the form.
  - Confirm the page shows validation feedback and does not call `/api/track`.
- Incorrect format:
  - Enter a malformed number such as `ABC123`.
  - Confirm client-side validation appears.
- Invalid check digit:
  - Enter a 13-character S10-shaped number with an incorrect check digit.
  - Confirm client-side validation appears.
- Valid-format but unavailable number:
  - Use a safe valid S10 number that has no Somali Post events.
  - Confirm the backend returns `Not Found` or `Pre-Arrival`.
  - Confirm the page shows guidance and a UPU Global Track & Trace fallback link.
- API configuration error:
  - In a non-production environment only, run without `UPU_PTT_TOKEN`.
  - Request a valid S10 number.
  - Confirm the API returns `CONFIG` and the page shows a safe error without exposing secrets.
- Rate limit:
  - Repeatedly request a valid S10 number more than 30 times within 5 minutes from the same IP.
  - Confirm HTTP `429`, `Retry-After`, and safe frontend messaging.
- Successful result:
  - Use a safe known item with available UPU/PTT events.
  - Confirm current status, origin, destination, and history render correctly.
  - Confirm timestamps display in readable order and event explanations appear where mapped.
