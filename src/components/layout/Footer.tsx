import Image from 'next/image';
import Link from 'next/link';
import { serviceLinks, siteConfig } from '@/lib/site';

const informationLinks = [
  { href: '/about', label: 'About Somali Post' },
  { href: '/help', label: 'Help Centre' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/accessibility', label: 'Accessibility' },
];

const serviceFooterLinks = [
  { href: '/send-to-somalia', label: 'Send Mail to Somalia' },
  { href: '/track', label: 'Track an Item' },
  ...serviceLinks,
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="h-1 bg-gold-500" />
      <div className="container-site py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3.5 rounded-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <Image src="/images/somali-post-logo.png" alt="Somali Post logo" width={46} height={46} />
              </span>
              <span className="text-lg font-bold">{siteConfig.legalName}</span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-7 text-white/72">
              Somalia&apos;s national postal operator, restoring inbound international postal exchange and rebuilding modern
              national postal services.
            </p>
            <p className="mt-4 text-base font-semibold text-white/88">{siteConfig.address}</p>
          </div>

          <FooterColumn title="Services" links={serviceFooterLinks} />
          <FooterColumn title="Information" links={informationLinks} />

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold-400">Contact</h2>
            <dl className="mt-5 space-y-4 text-base text-white/76">
              <div>
                <dt className="font-semibold text-white">Official email</dt>
                <dd>
                  <a className="rounded-sm hover:text-gold-400" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Location</dt>
                <dd>{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">More information</dt>
                <dd>
                  <Link className="rounded-sm hover:text-gold-400" href="/contact">
                    Visit the contact page
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/64 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>Official Somali Post digital service.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gold-400">{title}</h2>
      <nav className="mt-5 grid gap-3" aria-label={`${title} footer links`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-sm text-base text-white/76 transition hover:text-gold-400">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
