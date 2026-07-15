import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Badge, Card, PageHero, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'About Somali Post',
  description: 'Institutional information about Somali Post and its current public postal services.',
};

const services = [
  'Receiving inbound international mail',
  'Online tracking for supported international postal items',
  'P.O. Box enquiries',
  'Official guidance for sending mail to Somalia',
];

const principles = [
  ['Reliable public service', 'Postal support delivered with care for customers, businesses and institutions.'],
  ['Clear customer information', 'Guidance that separates available services from planned service development.'],
  ['Secure handling', 'Responsible handling of postal items and customer information.'],
  ['International postal cooperation', 'Inbound exchange and tracking support through recognised postal channels.'],
  ['Progressive national coverage', 'Service improvements introduced carefully as postal infrastructure develops.'],
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="About Somali Post"
        description="Somali Post is the national postal service of the Federal Republic of Somalia, serving the public, businesses and government institutions."
      />

      <Section title="Who we are" compact>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <p className="text-lg leading-8 text-ink-muted">
              Somali Post operates under the Ministry of Communications and Technology and is responsible for restoring
              and delivering official postal services for the public, businesses and government institutions.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl bg-navy-950 p-7 text-white shadow-soft">
              <Badge>Somali Postal Service</Badge>
              <p className="mt-5 text-2xl font-bold leading-tight">Official national postal operator</p>
              <p className="mt-3 leading-7 text-white/72">
                Somali Post provides public postal guidance, supports inbound international exchange and prepares new
                services as national postal infrastructure is modernised.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="bg-surface-soft">
        <Section title="Our current services" compact>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service} delay={index * 70}>
                <div className="interactive-card rounded-3xl border border-border bg-white p-5 text-base font-bold text-navy-950 shadow-card">
                  {service}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <Section title="Restoration and modernisation" compact>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Card className="border-gold-400/50 bg-gold-400/12 shadow-none">
              <h2 className="text-xl font-bold text-navy-950">Inbound exchange restored</h2>
              <p className="mt-3 leading-7 text-navy-950">
                Somali Post has restored inbound international postal exchange for supported items routed through
                recognised postal channels.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg leading-8 text-ink-muted">
              Somali Post is progressively modernising national postal infrastructure so customers can access clearer
              guidance, online tracking for supported items and practical contact routes for postal services. Outbound
              international mail is not listed as an available service unless Somali Post confirms it publicly.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section title="Our service principles" compact>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {principles.map(([title, body], index) => (
            <Reveal key={title} delay={index * 70}>
              <Card className="interactive-card h-full">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-action-gold text-sm font-black text-navy-950">
                  {index + 1}
                </span>
                <h2 className="mt-5 text-lg font-bold leading-tight text-navy-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-navy-950 text-white">
        <Section eyebrow="Future service development" title="RUG PUDO" className="text-white" compact>
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <p className="max-w-3xl text-lg leading-8 text-white/76">
                RUG PUDO is Somali Post&apos;s planned pickup and drop-off network. Confirmed locations and service
                information will be published before the network opens to customers.
              </p>
              <Link href="/services/rug-pudo" className="btn-primary shrink-0">
                View RUG PUDO
              </Link>
            </div>
          </Reveal>
        </Section>
      </section>
    </SiteShell>
  );
}
