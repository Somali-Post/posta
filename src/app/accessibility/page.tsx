import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for the Somali Post website.',
};

const measures = [
  'Keyboard-accessible navigation and controls',
  'Visible focus states for links, buttons and form fields',
  'Responsive layouts for mobile, tablet and desktop screens',
  'Reduced-motion support for users who request less motion',
  'Semantic headings, lists, forms and navigation landmarks',
  'Alternative text for meaningful images',
];

export default function AccessibilityPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Accessibility"
        title="Accessibility Statement"
        description="Somali Post aims to make this website usable by as many people as possible and has designed it with recognised accessibility principles in mind."
      />

      <Section title="Accessibility commitment" compact>
        <Card>
          <p className="text-lg leading-8 text-ink-muted">
            Somali Post aims to provide clear public postal information that can be used across different devices,
            input methods and connection conditions.
          </p>
        </Card>
      </Section>

      <Section title="Measures already implemented" compact>
        <div className="grid gap-4 md:grid-cols-2">
          {measures.map((measure) => (
            <Card key={measure} className="interactive-card">
              <p className="font-semibold text-ink">{measure}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-surface-soft">
        <Section title="Navigation and structure" compact>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <h2 className="text-xl font-bold text-navy-950">Keyboard navigation</h2>
              <p className="mt-3 leading-7 text-ink-muted">
                Navigation menus, links, buttons and form controls can be reached with a keyboard.
              </p>
            </Card>
            <Card>
              <h2 className="text-xl font-bold text-navy-950">Known limitations</h2>
              <p className="mt-3 leading-7 text-ink-muted">
                Somali Post has not completed a formal accessibility audit. Some third-party pages linked from this
                website may follow different accessibility practices.
              </p>
            </Card>
          </div>
        </Section>
      </section>

      <Section title="Report an accessibility problem" compact>
        <Card>
          <p className="text-lg leading-8 text-ink-muted">
            If you find an accessibility problem, contact Somali Post by telephone, WhatsApp or email and describe the
            page, issue and device you were using.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.contact.phoneHref} className="btn-primary">
              Call Somali Post
            </a>
            <a href={siteConfig.contact.whatsappHref} className="btn-secondary">
              Contact Somali Post on WhatsApp
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
              Email Somali Post
            </a>
          </div>
        </Card>
      </Section>

      <Section title="Last reviewed" compact>
        <Card>
          <p className="text-lg font-semibold text-navy-950">14 July 2026</p>
        </Card>
      </Section>
    </SiteShell>
  );
}
