import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for the Somali Post website.',
};

export default function AccessibilityPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Accessibility"
        title="Accessibility Statement"
        description="Somali Post aims to provide a website that is usable on mobile and desktop devices with clear navigation and visible focus states."
      />
      <Section title="Current accessibility measures">
        <Card>
          <ul className="grid gap-3 text-lg leading-8 text-ink-muted">
            <li>Semantic page structure and accessible navigation labels.</li>
            <li>Visible keyboard focus states.</li>
            <li>Responsive layouts for small and large screens.</li>
            <li>Reduced-motion support in global styles.</li>
          </ul>
        </Card>
      </Section>
    </SiteShell>
  );
}
