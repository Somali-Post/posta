import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'How to Address Mail to Somalia',
  description: 'Official interim address-format guidance for mail routed through Somali Post.',
};

const checklist = [
  'Write the recipient full name clearly.',
  'Include city or town.',
  'Include district or neighbourhood where available.',
  'Include a building, street or recognisable landmark.',
  'Use BN1011 as the current interim postal code.',
  'Include an active recipient mobile or WhatsApp number.',
  'Include the sender return address.',
];

const faqs = [
  {
    question: 'Can I send mail without a postcode?',
    answer:
      'For mail routed through Somali Post, use BN1011 as the current interim postal code while Somalia continues developing its national postcode system.',
  },
  {
    question: 'Is BN1011 used for every Somali city?',
    answer:
      'BN1011 is an interim routing code for mail routed through Somali Post. It is not a geographically allocated final national postcode system.',
  },
  {
    question: 'Is a recipient telephone number required?',
    answer:
      'Yes. A valid and reachable recipient mobile or WhatsApp number is essential for collection or final handover coordination.',
  },
  {
    question: 'Does Somali Post provide home delivery everywhere?',
    answer:
      'Do not assume universal home delivery. Somali Post may coordinate collection or final handover depending on operational arrangements.',
  },
  {
    question: 'What should I write when there is no street name?',
    answer:
      'Use the clearest available landmark, building, business, district or neighbourhood information so the recipient can be identified and contacted.',
  },
];

export default function SendToSomaliaPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Address guidance"
        title="How to Address Mail to Somalia"
        description="Somalia is developing a national addressing and postcode system. This page explains the current interim format for mail routed through Somali Post."
      />

      <Section title="Addressing mail today" compact>
        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5 text-lg leading-8 text-ink-muted">
            <p>
              BN1011 may currently be used as the interim postal code for mail routed through Somali Post. It should not
              be treated as the final national postcode system.
            </p>
            <p>
              The strongest address includes the recipient name, city or town, district or neighbourhood where available,
              and a recognisable building, street or landmark.
            </p>
          </div>
          <Card className="border-gold-400/50 bg-gold-400/12">
            <h2 className="text-xl font-bold text-navy-950">Important telephone notice</h2>
            <p className="mt-3 text-lg leading-8 text-navy-950">
              A valid and reachable recipient mobile or WhatsApp number is essential. Somali Post may use it to
              coordinate collection or final handover.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Recommended address format" compact>
        <div className="grid gap-7 lg:grid-cols-2">
          <Card>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Format</p>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-surface-soft p-6 text-[1rem] font-semibold leading-8 text-navy-950 md:text-lg">
{`RECIPIENT'S FULL NAME
HOUSE, BUSINESS, STREET OR NEAREST LANDMARK
DISTRICT OR NEIGHBOURHOOD
CITY OR TOWN
BN1011
SOMALIA
MOBILE / WHATSAPP: +252 ...`}
            </pre>
          </Card>
          <Card>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Fictional sample label</p>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-surface-soft p-6 text-[1rem] font-semibold leading-8 text-navy-950 md:text-lg">
{`AMINA HASSAN
NEAR CENTRAL MARKET, BUILDING 12
HODAN DISTRICT
MOGADISHU
BN1011
SOMALIA
MOBILE / WHATSAPP: +252 ...`}
            </pre>
          </Card>
        </div>
      </Section>

      <Section title="Sender checklist" compact>
        <div className="grid gap-4 md:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-white p-5 text-base font-semibold leading-7 text-ink shadow-card">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface-soft">
        <Section title="What BN1011 means" compact>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Card>
              <p className="text-4xl font-black tracking-tight text-navy-950">BN1011</p>
              <p className="mt-3 text-base leading-7 text-ink-muted">Current interim routing code for Somali Post mail.</p>
            </Card>
            <div className="space-y-4 text-lg leading-8 text-ink-muted">
              <p>
                BN1011 helps route mail through Somali Post during the development of Somalia national addressing and
                postcode systems.
              </p>
              <p>
                It is not a complete, geographically allocated final national postcode system and should not be presented
                as one.
              </p>
            </div>
          </div>
        </Section>
      </section>

      <Section title="After the item arrives" compact>
        <Card className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-lg leading-8 text-ink-muted">
            After arrival, postal and customs processing may take place before Somali Post coordinates collection or final
            handover with the recipient.
          </p>
          <Link
            href="/services/receiving"
            className="inline-flex justify-center rounded-full bg-navy-950 px-6 py-3 text-base font-bold text-white hover:bg-navy-900"
          >
            Receiving guidance
          </Link>
        </Card>
      </Section>

      <Section title="Frequently asked questions" compact>
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <h2 className="text-xl font-bold text-navy-950">{faq.question}</h2>
              <p className="mt-3 text-base leading-7 text-ink-muted">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
