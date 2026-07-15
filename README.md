# Somali Post Website

Public Next.js application for Somali Post, the national postal service of Somalia. The site provides customer guidance for receiving international mail, tracking supported postal items, P.O. Box enquiries, RUG PUDO service updates and official contact routes.

## Active Architecture

- `src/app/` contains the App Router public routes and the tracking API route.
- `src/components/layout/` contains shared navigation, footer and shell components.
- `src/components/tracking/` contains the public tracking form and result UI.
- `src/lib/` contains site configuration, S10 helpers and tracking-event display helpers.
- `public/images/` contains public image assets referenced by the app.

The active app is this Next.js application at the repository root. Do not use old prototype folders as implementation sources.

## Branch Workflow

- Work on `website-rebuild` for the rebuilt public website.
- Do not commit directly to `main` or `master`.
- Do not commit or push unless explicitly instructed.
- Keep local environment files out of git.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm run start
```

On this Windows checkout, if npm cannot resolve local binary shims, use:

```bash
node node_modules\eslint\bin\eslint.js
node node_modules\next\dist\bin\next build
node node_modules\next\dist\bin\next start -p 3000
```

## Environment Variables

Use environment-variable names only in documentation and commits. Never commit values.

- `TRACKING_API_TOKEN`

## Tracking Integration

The tracking API route is `src/app/api/track/[trackingId]/route.ts`.

Tracking implementation notes:

- Keep S10 validation in `src/lib/s10.ts`.
- Preserve request flow, caching and rate limiting.
- Do not expose tokens or implementation details in public copy.
- External postal tracking reference: `https://globaltracktrace.ptc.post/gtt.web/`

## Build And Lint

```bash
npm run lint
npm run build
```

## Deployment Precautions

- Confirm `TRACKING_API_TOKEN` is configured in the hosting environment.
- Do not deploy with local `.env*` files committed.
- Run lint and production build before deployment.
- Check public routes at desktop, tablet and mobile widths.
- Confirm telephone, WhatsApp and social links before publishing.

## Contact Configuration

Official public contact and social values are configured centrally in `src/lib/site.ts`.

Current public details:

- Telephone and WhatsApp: `+252 61 100 3239`
- Email: `postalservice@moct.gov.so`
- Location: `Mogadishu, Somalia`

## Public Routes

- `/`
- `/send-to-somalia`
- `/services/receiving`
- `/services/po-box`
- `/services/rug-pudo`
- `/track`
- `/about`
- `/help`
- `/contact`
- `/privacy`
- `/terms`
- `/accessibility`

## Security Rules

- Never commit `.env`, `.env.local` or secret values.
- Do not log tracking tokens.
- Do not bypass S10 validation.
- Do not weaken tracking API rate limiting or cache behaviour without explicit approval.
- Do not add public claims about fees, opening hours, branch addresses, launch dates or delivery guarantees unless officially confirmed.

## Fonts

The site uses Manrope via `@fontsource-variable/manrope`.
