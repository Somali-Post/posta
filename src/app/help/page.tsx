import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Help Centre',
  description: 'Frequently asked questions and operational guidance for Somali Post customers.',
};

const faqGroups = [
  {
    title: 'Sending mail to Somalia',
    faqs: [
      ['What postal code should I use?', 'When a postcode is requested, use BN1011 as the current interim code for mail routed through Somali Post.'],
      ['Is BN1011 a permanent national postcode?', 'No. BN1011 is an interim routing code while Somalia continues developing its national postcode system.'],
      ['Is the recipient’s telephone number required?', 'Yes. Include a valid mobile or WhatsApp number so the recipient can be contacted for collection or final handover.'],
      ['What should I write when there is no street name?', 'Use the clearest available landmark, building, business, district or neighbourhood information.'],
      ['Does Somali Post provide home delivery everywhere?', 'Service arrangements can vary. Somali Post may coordinate collection or final handover depending on the service available.'],
    ],
  },
  {
    title: 'Tracking',
    faqs: [
      ['What format should my tracking number use?', 'Use a 13-character S10 tracking number with two letters, nine digits and two country letters, for example RR123456785DE.'],
      ['Why is my tracking number not showing any updates?', 'The item may not have reached a supported postal event yet, or the sending postal operator may not have provided an update.'],
      ['When will a tracking event appear?', 'Tracking events appear when available postal updates are received from participating postal operators.'],
      ['Where can I find my tracking number?', 'Check the receipt, dispatch confirmation or message provided by the sending postal operator.'],
    ],
  },
  {
    title: 'Receiving mail',
    faqs: [
      ['What should I prepare before collecting an item?', 'Keep the tracking number, a reachable telephone number and accepted identification ready.'],
      ['Can customs processing affect availability?', 'Yes. Postal handling and applicable customs requirements can affect when an item is available.'],
      ['What identification may be requested?', 'Somali Post may request accepted identification, such as a national identification document or valid passport.'],
      ['How will Somali Post contact me?', 'Somali Post may use the mobile or WhatsApp number written on the item.'],
    ],
  },
  {
    title: 'P.O. Boxes',
    faqs: [
      ['Can I apply online?', 'No. Call or contact Somali Post on WhatsApp to confirm the current requirements and begin an application.'],
      ['Can a diaspora applicant use a passport?', 'Yes. Diaspora applicants may use a valid passport.'],
      ['How do I begin an application?', 'Contact Somali Post by telephone or WhatsApp, confirm the requirements, then visit the designated office when instructed.'],
    ],
  },
  {
    title: 'RUG PUDO',
    faqs: [
      [
        'Is RUG PUDO currently available?',
        'No. RUG PUDO is still under development. Somali Post will publish confirmed locations and service information before the network opens to customers.',
      ],
    ],
  },
];

export default function HelpPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Help"
        title="Help Centre"
        description="Find answers about tracking, sending mail to Somalia, receiving international items, P.O. Boxes and contacting Somali Post."
      />
      <Section title="Frequently asked questions">
        <div className="grid gap-6">
          {faqGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 70}>
              <Card>
                <h2 className="text-2xl font-bold text-navy-950">{group.title}</h2>
                <div className="mt-5 divide-y divide-border">
                  {group.faqs.map(([question, answer]) => (
                    <details key={question} className="group py-4">
                      <summary className="cursor-pointer list-none text-base font-bold text-navy-950 transition hover:text-gold-500">
                        <span className="inline-flex w-full items-center justify-between gap-4">
                          {question}
                          <span className="text-xl leading-none text-gold-500 group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-3 max-w-4xl text-base leading-7 text-ink-muted">{answer}</p>
                    </details>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-secondary">
            Contact Somali Post
          </Link>
          <a href={siteConfig.contact.phoneHref} className="btn-navy">
            Call Somali Post
          </a>
          <a href={siteConfig.contact.whatsappHref} className="btn-primary">
            Contact Somali Post on WhatsApp
          </a>
        </div>
      </Section>
    </SiteShell>
  );
}
