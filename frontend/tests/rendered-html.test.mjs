import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

function request(path = "/") {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
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

test("server-renders the production home page", async () => {
  const response = await request();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Somali Post \| Somalia&#x27;s National Postal Service<\/title>/i,
  );
  assert.match(html, /aria-label="Main navigation"/);
  assert.match(html, /Connecting Somalia through trusted postal services/);
  assert.match(html, /Postal services available now/);
  assert.match(html, /Official contact/);
  assert.match(html, /src="\/navlogo\.png"/);
  assert.match(html, /src="\/hero-image\.png"/);
  assert.match(html, /https:\/\/posta\.so\/og\.png/);
  assert.doesNotMatch(html, /\/_vinext\/image/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("all public content routes render", async () => {
  const routes = [
    ["/track", "Track an Item"],
    ["/send-to-somalia", "How to Address Mail to Somalia"],
    ["/receive-mail", "Receiving International Mail"],
    ["/po-box", "P.O. Box Service"],
    ["/rug-pudo", "RUG PUDO"],
    ["/about", "About Somali Post"],
    ["/help", "Help Centre"],
    ["/contact", "Contact Somali Post"],
    ["/privacy", "Privacy Policy"],
    ["/terms", "Terms of Use"],
    ["/accessibility", "Accessibility Statement"],
  ];

  for (const [path, expected] of routes) {
    const response = await request(path);
    assert.equal(response.status, 200, `${path} should return 200`);
    assert.match(await response.text(), new RegExp(expected.replace(".", "\\.")));
  }
});

test("tracking API validates S10 numbers before external requests", async () => {
  const invalidResponse = await request("/api/track/RR123");
  assert.equal(invalidResponse.status, 400);
  assert.deepEqual(await invalidResponse.json(), {
    error: "Invalid S10 tracking number.",
  });

  const unconfiguredResponse = await request("/api/track/RR123456785DE");
  assert.equal(unconfiguredResponse.status, 503);
  assert.deepEqual(await unconfiguredResponse.json(), {
    error: "Tracking is temporarily unavailable.",
  });
});

test("uses approved brand assets and production metadata", async () => {
  const [home, layout, header, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/hero-image.png", import.meta.url)),
    access(new URL("../public/navlogo.png", import.meta.url)),
    access(new URL("../public/logo-so.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(home, /src="\/hero-image\.png"/);
  assert.match(header, /src="\/navlogo\.png"/);
  assert.match(layout, /Somali Post/);
  assert.doesNotMatch(home, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
