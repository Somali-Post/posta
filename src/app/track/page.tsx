import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/ui/Section';
import { TrackingClient } from '@/components/tracking/TrackingClient';

export const metadata: Metadata = {
  title: 'Track an Item',
  description: 'Track inbound international postal items through the existing Somali Post tracking service.',
};

export default function TrackPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Tracking"
        title="Track an Item"
        description="Enter a valid S10 tracking number to check available Somali Post tracking updates."
      />
      <TrackingClient />
    </SiteShell>
  );
}
