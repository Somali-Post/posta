import type { MetadataRoute } from "next";

const routes = [
  "",
  "/track",
  "/send-to-somalia",
  "/receive-mail",
  "/po-box",
  "/rug-pudo",
  "/about",
  "/help",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://posta.so${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/track" ? 0.9 : 0.7,
  }));
}
