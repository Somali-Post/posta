import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';

// Privacy content should receive final organisational and legal approval before publication.
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Somali Post website privacy policy.',
};

const sections = [
  ['Information submitted through tracking', 'When you use the tracking service, the tracking number you enter is processed to retrieve available postal-event information.'],
  ['Basic website and analytics information', 'This website uses Vercel Analytics to understand general page usage and performance. Analytics information is used in aggregate and does not provide Somali Post with the contents of postal items.'],
  ['How information is used', 'Information is used to provide public guidance, respond to direct enquiries and display available tracking updates for supported international postal items.'],
  ['Tracking-service requests', 'Tracking requests may be sent to postal tracking services so that available event information can be returned to you.'],
  ['External services and links', 'External social-media links and the UPU Global Track & Trace link have their own privacy practices. Review those services before providing information to them.'],
  ['Data security', 'Somali Post takes reasonable care when handling information submitted through this website, but no online service can be guaranteed to be risk-free.'],
  ['Data retention', 'Tracking numbers may be processed for the time needed to respond to a tracking request and support service reliability. Direct enquiries are retained only as needed for customer service and organisational records.'],
  ['Children’s privacy', 'This website is intended for general public postal guidance and is not directed at children.'],
  ['Changes to the policy', 'Somali Post may update this policy when website services or public guidance change.'],
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This policy explains how information is handled when you use the Somali Post website."
      />
      <Section title="Last updated" compact>
        <Card>
          <p className="text-lg font-semibold text-navy-950">14 July 2026</p>
        </Card>
      </Section>
      <Section title="Privacy information" compact>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map(([title, body]) => (
            <Card key={title} className="interactive-card">
              <h2 className="text-xl font-bold text-navy-950">{title}</h2>
              <p className="mt-3 text-base leading-7 text-ink-muted">{body}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Contact information" compact>
        <Card>
          <p className="text-lg leading-8 text-ink-muted">
            For privacy questions, contact Somali Post at{' '}
            <a className="font-semibold text-navy-900 hover:text-gold-500" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            , call{' '}
            <a className="font-semibold text-navy-900 hover:text-gold-500" href={siteConfig.contact.phoneHref}>
              {siteConfig.contact.phoneDisplay}
            </a>
            , or use WhatsApp.
          </p>
        </Card>
      </Section>
    </SiteShell>
  );
}
