import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Somali Post navbar and hero", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Somali Post \| Somalia&#x27;s National Postal Service<\/title>/i,
  );
  assert.match(html, /aria-label="Main navigation"/);
  assert.match(html, /Connecting Somalia through trusted postal services/);
  assert.match(html, /Track your postal item/);
  assert.match(html, /Inbound international postal exchange is operational/);
  assert.match(html, /src="\/navlogo\.png"/);
  assert.match(html, /src="\/hero-image\.png"/);
  assert.doesNotMatch(html, /\/_vinext\/image/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("uses the supplied brand assets and removes the starter preview", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/hero-image.png", import.meta.url)),
    access(new URL("../public/navlogo.png", import.meta.url)),
    access(new URL("../public/logo-so.png", import.meta.url)),
  ]);

  assert.match(page, /src="\/hero-image\.png"/);
  assert.match(page, /src="\/navlogo\.png"/);
  assert.match(layout, /Somali Post/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
