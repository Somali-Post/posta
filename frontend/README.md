# Somali Post Website

Fresh Somali Post website rebuild using Next App Router, React, Vite and vinext.

## Structure

- `app/` - routes, layouts and global styling
- `public/` - approved Somali Post brand and website assets
- `tests/` - rendered output tests
- `worker/` - Cloudflare-compatible application entry point
- `build/` - Sites deployment integration

The project intentionally uses `app/` at the frontend root. A `src/` directory
is optional in Next.js and is not needed for this project.

## Commands

```bash
npm run dev
npm run build
npm test
```

## Tracking configuration

Set `UPU_PTT_TOKEN` in the local environment and in the production Sites
environment. Tracking remains safely unavailable when the token is missing.
