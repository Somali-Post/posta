import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const routes = [
  '/',
  '/send-to-somalia',
  '/services/receiving',
  '/services/po-box',
  '/services/rug-pudo',
  '/track',
  '/about',
  '/help',
  '/contact',
  '/privacy',
  '/terms',
  '/accessibility',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
