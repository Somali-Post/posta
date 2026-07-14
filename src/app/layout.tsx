import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from '@/lib/site';
import '@fontsource-variable/manrope';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Somalia's National Postal Service`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | Somalia's National Postal Service`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Somalia's National Postal Service`,
    description: siteConfig.description,
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  themeColor: '#10234F',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#10234F" />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GovernmentOrganization',
              name: siteConfig.legalName,
              url: siteConfig.url,
              email: siteConfig.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mogadishu',
                addressCountry: 'SO',
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
