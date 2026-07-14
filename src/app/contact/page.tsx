import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Somali Post',
  description: 'Official Somali Post contact details and enquiry options.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Contact Somali Post"
        description="Use the official email and location details below for Somali Post enquiries. Additional contact channels will be published when officially confirmed."
      />
      <Section title="Contact information" compact>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <dl className="grid gap-6 text-base text-ink-muted">
              <div>
                <dt className="font-bold text-ink">Official email</dt>
                <dd className="mt-1">
                  <a className="font-semibold text-navy-900 hover:text-gold-500" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Location</dt>
                <dd className="mt-1">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Service guidance</dt>
                <dd className="mt-1">
                  For postal address guidance, receiving mail, tracking and P.O. Box enquiries, use the relevant service
                  pages on this website.
                </dd>
              </div>
            </dl>
          </Card>

          <Card className="bg-surface-soft shadow-none">
            <h2 className="text-xl font-bold text-navy-950">Online enquiry form</h2>
            <p className="mt-3 text-base leading-7 text-ink-muted">
              The website enquiry form is not active in this phase. It will remain unavailable until a secure backend
              with server-side validation, rate limiting and spam protection is implemented.
            </p>
            <Link
              href="/help"
              className="mt-6 inline-flex rounded-full bg-navy-950 px-6 py-3 text-base font-bold text-white hover:bg-navy-900"
            >
              Visit Help Centre
            </Link>
          </Card>
        </div>
      </Section>
    </SiteShell>
  );
}
