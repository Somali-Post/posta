import type { MetadataRoute } from 'next';
import { publicRoutes, siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
