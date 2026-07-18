import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import { SiteShell } from '@/components/layout/SiteShell';
import { Badge, Card, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Somalia National Postal Service',
  description:
    'Receive international mail, track postal items and find official guidance for sending mail to Somalia through Somali Post.',
};

const quickActions = [
  {
    href: '/track',
    title: 'Track an Item',
    body: 'View available postal events using an S10 tracking number.',
    icon: TrackIcon,
  },
  {
    href: '/send-to-somalia',
    title: 'Send Mail to Somalia',
    body: 'Clear official guidance for sending and receiving mail.',
    icon: AddressIcon,
  },
  {
    href: '/services/receiving',
    title: 'Receive an Item',
    body: 'Inbound international postal exchange is operational.',
    icon: MailIcon,
  },
  {
    href: '/contact',
    title: 'Contact Somali Post',
    body: 'Official telephone, WhatsApp and email contact routes.',
    icon: ContactIcon,
  },
];

const serviceCards = [
  {
    href: '/services/receiving',
    title: 'International Mail Receiving',
    body: 'Guidance for recipients expecting inbound international items, including contact, collection and identification preparation.',
    action: 'Receiving guidance',
    icon: MailIcon,
  },
  {
    href: '/track',
    title: 'Tracking',
    body: 'Enter a 13-character S10 tracking number to view available updates for supported international postal items.',
    action: 'Track an item',
    icon: TrackIcon,
  },
  {
    href: '/services/po-box',
    title: 'P.O. Box Enquiries',
    body: 'Guidance for customers interested in a secure and consistent postal address through Somali Post.',
    action: 'P.O. Box information',
    icon: BoxIcon,
  },
];

const statusItems = [
  {
    title: 'Inbound international exchange restored',
    body: 'Somali Post has restored inbound international postal exchange for items routed through supported postal channels.',
  },
  {
    title: 'Track supported international postal items',
    body: 'Use the tracking number provided by the sending postal operator to view available postal updates online.',
  },
  {
    title: 'Postal services being restored and modernised',
    body: 'Somali Post is restoring and improving services to provide clearer and more accessible postal support across Somalia.',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <HomeHero />

      <Section title="Quick actions" compact>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Reveal key={action.href} delay={index * 70}>
                <Link
                  href={action.href}
                  className="interactive-card group block rounded-3xl border border-border bg-white p-4 shadow-card focus-visible:outline-gold-400 md:p-5"
                >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-950 text-gold-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-4 block text-[0.98rem] font-extrabold leading-snug text-navy-950 md:text-lg">
                  {action.title}
                </span>
                {action.body && <span className="mt-2 block text-sm leading-6 text-ink-muted">{action.body}</span>}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Address guidance" title="Sending mail to Somalia" compact>
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5 text-lg leading-8 text-ink-muted">
            <p>
              Somalia is developing its national addressing system. BN1011 is currently used as the interim postal code
              for mail sent through Somali Post.
            </p>
            <div className="rounded-3xl border border-gold-400/50 bg-gold-400/12 p-5 text-navy-950">
              <p className="font-extrabold">Recipient phone requirement</p>
              <p className="mt-2 leading-7">
                A valid recipient mobile or WhatsApp number is essential for collection or final handover coordination.
              </p>
            </div>
            <Link href="/send-to-somalia" className="inline-flex font-extrabold text-navy-900 hover:text-gold-500">
              View the full address format
            </Link>
          </div>
          <Reveal delay={80}>
          <Card className="bg-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Address label format</p>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-surface-soft p-6 text-[1rem] font-semibold leading-8 text-navy-950 md:text-lg">
{`RECIPIENT'S FULL NAME
HOUSE, BUSINESS, STREET OR NEAREST LANDMARK
DISTRICT OR NEIGHBOURHOOD
CITY OR TOWN
BN1011
SOMALIA
MOBILE / WHATSAPP: RECIPIENT PHONE NUMBER`}
            </pre>
          </Card>
          </Reveal>
        </div>
      </Section>

      <section className="bg-surface-soft">
        <Section eyebrow="Current services" title="Postal services available now">
          <div className="grid gap-5 md:grid-cols-3">
            {serviceCards.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 70}>
                <Card className="interactive-card flex h-full flex-col">
                  <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-navy-950 text-gold-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold leading-tight text-navy-950">{service.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-ink-muted">{service.body}</p>
                  <Link href={service.href} className="mt-5 inline-flex font-extrabold text-navy-900 hover:text-gold-500">
                    {service.action}
                  </Link>
                </Card>
                </Reveal>
              );
            })}
          </div>
        </Section>
      </section>

      <Section eyebrow="Future service" title="RUG PUDO" compact>
        <Reveal>
        <Card className="overflow-hidden p-0 md:p-0">
          <div className="grid gap-0 md:grid-cols-[0.82fr_1.18fr] md:items-stretch">
            <div className="relative min-h-[280px] overflow-hidden bg-navy-950 md:min-h-[360px]">
              <div className="absolute inset-5 overflow-hidden rounded-3xl border border-white/15">
                <Image
                  src="/images/pudo-point.png"
                  alt="Postal pickup and drop-off concept"
                  fill
                  sizes="(min-width: 768px) 34vw, 92vw"
                  className="object-cover saturate-[0.85]"
                />
              </div>
            </div>
            <div className="p-6 md:p-10">
              <Badge>Under Development</Badge>
              <h3 className="mt-5 text-[clamp(1.55rem,2.3vw,2.15rem)] font-bold leading-tight text-navy-950">
                Pickup and drop-off network in development
              </h3>
              <p className="mt-4 text-lg leading-8 text-ink-muted">
                Somali Post is developing a convenient postal pickup and drop-off network. Details will be published
                when the service is ready for public use.
              </p>
              <Link href="/services/rug-pudo" className="mt-6 inline-flex font-extrabold text-navy-900 hover:text-gold-500">
                Read the service note
              </Link>
            </div>
          </div>
        </Card>
        </Reveal>
      </Section>

      <section className="bg-navy-950 text-white">
        <Section eyebrow="About Somali Post" title="Restoring national postal services" className="text-white" compact>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <p className="text-lg leading-8 text-white/76">
              Somali Post has restored inbound international postal exchange and is modernising national postal services
              that connect people, businesses and public institutions.
            </p>
            <div className="grid gap-4">
              {statusItems.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/15 pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-action-gold text-sm font-black text-navy-950">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-base leading-7 text-white/70">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      <Section title="Need operational guidance?" compact>
        <Card className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-navy-950">Contact Somali Post</h3>
            <p className="mt-2 text-base leading-7 text-ink-muted">
              Call {siteConfig.contact.phoneDisplay} or use WhatsApp for official operational guidance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.contact.phoneHref}
              className="btn-navy"
            >
              Call Somali Post
            </a>
            <a
              href={siteConfig.contact.whatsappHref}
              className="btn-secondary"
            >
              Contact Somali Post on WhatsApp
            </a>
          </div>
        </Card>
      </Section>
    </SiteShell>
  );
}


function TrackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m16 16 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AddressIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M6 4h12v16H6z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="2" />
      <path d="m4 8 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 6h14v10H8l-3 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4 8 12 4l8 4-8 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 8v8l8 4 8-4V8M12 12v8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
