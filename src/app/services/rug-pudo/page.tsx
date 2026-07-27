import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Badge, Card, PageHero, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'RUG PUDO',
  description: 'Planned RUG PUDO pickup and drop-off network information from Somali Post.',
};

const intendedBenefits = [
  'Convenient collection points',
  'Convenient drop-off points',
  'Customer contact and collection coordination',
  'Wider access to postal services as the network develops',
];

const plannedSteps = [
  'Customer selects or is directed to a participating point.',
  'Postal item is routed to the appropriate point.',
  'Customer is contacted when the item is ready.',
  'Identification or collection requirements are completed.',
];

export default function RugPudoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Under Development"
        title="RUG PUDO"
        description="RUG PUDO is Somali Post's planned pickup and drop-off network. The service is being developed to make postal collection and dispatch more convenient through accessible service points."
      />

      <Section title="What RUG PUDO is intended to provide" compact>
        <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
              <Image
                src="/images/pudo-point.webp"
                alt="Postal pickup and drop-off service point concept"
                fill
                sizes="(min-width: 1024px) 34vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {intendedBenefits.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <Card className="interactive-card h-full">
                  <Badge>Planned</Badge>
                  <p className="mt-4 font-bold leading-7 text-navy-950">{item}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-surface-soft">
        <Section title="How the planned service would work" compact>
          <p className="max-w-3xl text-lg leading-8 text-ink-muted">
            These are planned service steps and are not a live operational promise.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {plannedSteps.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <Card className="interactive-card h-full">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-action-gold text-sm font-black text-navy-950">
                    {index + 1}
                  </span>
                  <p className="mt-5 text-base font-semibold leading-7 text-ink">{step}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <Section title="Current status" compact>
        <Reveal>
          <Card className="border-gold-400/50 bg-gold-400/12 shadow-none">
            <Badge>Under Development</Badge>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-navy-950">
              Locations, operating procedures and launch information have not yet been published. Somali Post will
              provide confirmed information before the service opens to the public.
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section title="Updates" compact>
        <Card className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-lg leading-8 text-ink-muted">
            For confirmed updates, follow Somali Post&apos;s official social accounts or use the contact page.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Somali Post
          </Link>
        </Card>
      </Section>
    </SiteShell>
  );
}
