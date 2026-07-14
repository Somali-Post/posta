import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Somali Post website privacy policy.',
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="Initial privacy information for the rebuilt Somali Post website."
      />
      <Section title="Initial statement">
        <Card>
          <p className="text-lg leading-8 text-ink-muted">
            This website is being rebuilt. The tracking service processes the tracking number submitted by the user and
            sends valid requests through the existing backend integration. Contact form submission is disabled in this
            phase.
          </p>
        </Card>
      </Section>
    </SiteShell>
  );
}
