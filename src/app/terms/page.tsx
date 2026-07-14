import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Somali Post website.',
};

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        description="Initial terms for the rebuilt Somali Post website."
      />
      <Section title="Use of this website">
        <Card>
          <p className="text-lg leading-8 text-ink-muted">
            Website content is provided for public guidance. Service availability, fees, locations and contact details
            should be treated as official only when confirmed by Somali Post.
          </p>
        </Card>
      </Section>
    </SiteShell>
  );
}
