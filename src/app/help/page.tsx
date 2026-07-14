import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Help Centre',
  description: 'Frequently asked questions and operational guidance for Somali Post customers.',
};

const faqs = [
  ['Can I track my item?', 'Use the tracking page if your item has a valid S10 tracking number.'],
  ['What postal code should be used?', 'BN1011 may currently be used as the interim code for mail routed through Somali Post.'],
  ['Can I apply for a P.O. Box online?', 'No. P.O. Box enquiries are handled by contacting Somali Post directly.'],
  ['Is RUG PUDO available?', 'RUG PUDO is under development and is not presented as operational on this website.'],
];

export default function HelpPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Help"
        title="Help Centre"
        description="Find initial guidance for tracking, sending mail to Somalia and contacting Somali Post."
      />
      <Section title="Frequently asked questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <Card key={question}>
              <h2 className="text-lg font-bold text-navy-950">{question}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-muted">{answer}</p>
            </Card>
          ))}
        </div>
        <Link href="/contact" className="mt-8 inline-flex font-bold text-navy-900 hover:text-gold-500">
          Contact Somali Post
        </Link>
      </Section>
    </SiteShell>
  );
}
