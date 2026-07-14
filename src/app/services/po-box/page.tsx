import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'P.O. Box Information',
  description: 'Information-only guidance for Somali Post P.O. Box enquiries.',
};

export default function POBoxPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Information only"
        title="P.O. Box Information"
        description="P.O. Box service enquiries are handled by contacting Somali Post. Online registration, document uploads and payment processing are not available on this rebuilt website."
      />
      <Section title="How P.O. Box enquiries work">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="space-y-5 text-lg leading-8 text-ink-muted">
            <p>
              A P.O. Box gives a customer a dedicated postal box for receiving mail at a Somali Post facility. Somali
              residents may use accepted national identification. Diaspora applicants may use a valid passport as
              identification.
            </p>
            <p>
              Applications are completed by contacting Somali Post directly. Fees, office details and confirmed opening
              hours will be published only when officially confirmed.
            </p>
          </div>
          <Card>
            <h2 className="text-xl font-bold text-navy-950">Enquiry options</h2>
            <dl className="mt-5 space-y-4 text-base text-ink-muted">
              <div>
                <dt className="font-semibold text-ink">Official email</dt>
                <dd>
                  <a className="text-navy-900 hover:text-gold-500" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Location</dt>
                <dd>{siteConfig.address}</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-gold-400"
            >
              Contact Somali Post
            </Link>
          </Card>
        </div>
      </Section>
    </SiteShell>
  );
}
