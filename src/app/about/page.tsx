import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'About Somali Post',
  description: 'About the restoration and modernisation of Somali Post.',
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="About Somali Post"
        description="Somali Post is Somalia's national postal service, focused on restoring postal exchange and rebuilding modern services for the public."
      />
      <Section title="Restoration and modernisation">
        <Card>
          <p className="max-w-4xl text-lg leading-8 text-ink-muted">
            Somali Post has restored inbound international postal exchange and continues to rebuild national postal
            services. The current digital service focuses on practical guidance, tracking and clear contact routes while
            new services are developed.
          </p>
        </Card>
      </Section>
    </SiteShell>
  );
}
