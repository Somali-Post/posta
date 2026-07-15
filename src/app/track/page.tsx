import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/ui/Section';
import { TrackingClient } from '@/components/tracking/TrackingClient';

export const metadata: Metadata = {
  title: 'Track an Item',
  description: 'Enter a 13-character S10 tracking number to view available updates for supported international postal items.',
};

export default function TrackPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Tracking"
        title="Track an Item"
        description="Enter a 13-character S10 tracking number to view available updates for supported international postal items."
      />
      <TrackingClient />
    </SiteShell>
  );
}
