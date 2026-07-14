import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Receiving International Mail',
  description: 'Guidance for recipients receiving inbound international mail through Somali Post.',
};

const processSteps = [
  ['Arrival at the inward office of exchange', 'The item reaches the Somali Post inbound exchange process.'],
  ['Postal and customs processing', 'Postal handling and customs requirements may affect when the item becomes available.'],
  ['Recipient contact', 'Somali Post may use the recipient mobile or WhatsApp number supplied on the item.'],
  ['Collection or final handover', 'The item is collected or handed over according to operational arrangements.'],
];

const preparation = [
  ['Tracking number', 'Keep the S10 tracking number provided by the sending postal operator.'],
  ['Reachable telephone or WhatsApp', 'Make sure the recipient contact number on the item can be reached.'],
  [
    'Accepted identification',
    'Valid accepted identification may include national identification or a valid passport, subject to Somali Post operational checks.',
  ],
];

export default function ReceivingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Current service"
        title="Receiving International Mail"
        description="Somali Post has restored inbound international postal exchange and provides guidance for recipients expecting items from abroad."
      />

      <Section title="How inbound mail is handled" compact>
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map(([title, body], index) => (
            <Card key={title} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-sm font-black text-navy-950">
                {index + 1}
              </span>
              <h2 className="mt-5 text-xl font-bold leading-tight text-navy-950">{title}</h2>
              <p className="mt-3 text-base leading-7 text-ink-muted">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-surface-soft">
        <Section title="What recipients should prepare" compact>
          <div className="grid gap-5 md:grid-cols-3">
            {preparation.map(([title, body]) => (
              <Card key={title}>
                <h2 className="text-xl font-bold text-navy-950">{title}</h2>
                <p className="mt-3 text-base leading-7 text-ink-muted">{body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-7 rounded-3xl border border-gold-400/50 bg-gold-400/12 p-6">
            <h2 className="text-xl font-bold text-navy-950">Processing note</h2>
            <p className="mt-3 text-lg leading-8 text-navy-950">
              Processing and customs requirements may affect item availability. Somali Post should not be assumed to
              provide a fixed processing time unless one is officially confirmed.
            </p>
          </div>
        </Section>
      </section>

      <Section title="Next steps" compact>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['/track', 'Track an Item'],
            ['/contact', 'Contact Somali Post'],
            ['/send-to-somalia', 'View Address Guidance'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full bg-navy-950 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-navy-900"
            >
              {label}
            </Link>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
