import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Receiving International Mail',
  description: 'Guidance for recipients receiving inbound international mail through Somali Post.',
};

const processSteps = [
  ['Arrival at the inward office of exchange', "The item arrives through Somali Post's inbound international mail process."],
  ['Postal and customs processing', 'The item is processed according to postal handling and any applicable customs requirements.'],
  ['Recipient contact', 'Somali Post may use the mobile or WhatsApp number written on the item to contact the recipient.'],
  ['Collection or final handover', 'Somali Post contacts the recipient to arrange collection or final handover according to the service available.'],
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
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-action-gold text-sm font-black text-navy-950">
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
              Processing times vary depending on transport, postal handling, customs requirements and the information
              provided with the item.
            </p>
          </div>
        </Section>
      </section>

      <Section title="Next steps" compact>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/track"
            className="btn-navy py-4"
          >
            Track an Item
          </Link>
          <a
            href={siteConfig.contact.phoneHref}
            className="btn-navy py-4"
          >
            Call Somali Post
          </a>
          <a
            href={siteConfig.contact.whatsappHref}
            className="btn-primary py-4"
          >
            Contact Somali Post on WhatsApp
          </a>
        </div>
      </Section>
    </SiteShell>
  );
}
