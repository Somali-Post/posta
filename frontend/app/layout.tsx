import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ||
    requestHeaders.get("host") ||
    "posta.so";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "Receive international mail, track supported postal items and access official guidance from Somali Post.";

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Somali Post | Somalia's National Postal Service",
      template: "%s | Somali Post",
    },
    description,
    icons: {
      icon: "/logo-so.png",
      shortcut: "/logo-so.png",
    },
    openGraph: {
      type: "website",
      siteName: "Somali Post",
      title: "Somali Post | Somalia's National Postal Service",
      description,
      images: [`${origin}/og.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: "Somali Post | Somalia's National Postal Service",
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
