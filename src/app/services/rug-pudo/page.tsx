import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Badge, Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'RUG PUDO',
  description: 'RUG PUDO service information from Somali Post.',
};

export default function RugPudoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Future service"
        title="RUG PUDO"
        description="Somali Post is developing a convenient postal pickup and drop-off network. This service is not yet presented as operational."
      />
      <Section title="Service status">
        <Card>
          <Badge>Under Development</Badge>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-muted">
            Details about locations, customer notifications, commissions and operational coverage will be published only
            after they are confirmed. This website does not currently accept RUG PUDO registrations.
          </p>
        </Card>
      </Section>
    </SiteShell>
  );
}
