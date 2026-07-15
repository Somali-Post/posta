import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';

// Terms content should receive final organisational and legal approval before publication.
export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Somali Post website.',
};

const sections = [
  ['Purpose of the website', 'This website provides public information about Somali Post services, contact routes, tracking guidance and postal address guidance.'],
  ['Accuracy of public guidance', 'Somali Post aims to keep public guidance clear and current. Service requirements, fees and arrangements should be confirmed directly with Somali Post when they affect a customer decision.'],
  ['Tracking information', 'Tracking results reflect available postal events for supported international postal items and may not show every stage immediately.'],
  ['Service availability', 'Services and contact arrangements may vary depending on postal operations, transport, customs requirements and customer information provided with the item.'],
  ['No guarantee of uninterrupted access', 'Somali Post aims to keep this website available, but access may be interrupted by maintenance, connectivity issues or circumstances outside Somali Post control.'],
  ['Acceptable use', 'Do not misuse this website, interfere with its operation, attempt unauthorised access or submit information that is false, harmful or unlawful.'],
  ['External links', 'This website may link to official social-media accounts and external postal resources. Those services are operated under their own terms and practices.'],
  ['Intellectual property', 'The Somali Post name, logo, content and design materials on this website belong to Somali Post or are used with permission.'],
  ['Changes to the terms', 'Somali Post may update these terms when services, website features or public guidance change.'],
];

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        description="These terms explain how the Somali Post website may be used."
      />
      <Section title="Last updated" compact>
        <Card>
          <p className="text-lg font-semibold text-navy-950">14 July 2026</p>
        </Card>
      </Section>
      <Section title="Website terms" compact>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map(([title, body]) => (
            <Card key={title} className="interactive-card">
              <h2 className="text-xl font-bold text-navy-950">{title}</h2>
              <p className="mt-3 text-base leading-7 text-ink-muted">{body}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Contact details" compact>
        <Card>
          <p className="text-lg leading-8 text-ink-muted">
            For questions about these terms, contact Somali Post by email at{' '}
            <a className="font-semibold text-navy-900 hover:text-gold-500" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            , telephone at{' '}
            <a className="font-semibold text-navy-900 hover:text-gold-500" href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phoneDisplay}
            </a>
            , or WhatsApp.
          </p>
        </Card>
      </Section>
    </SiteShell>
  );
}
