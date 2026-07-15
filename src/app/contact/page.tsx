import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Somali Post',
  description: 'Official Somali Post contact details and enquiry options.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Contact Somali Post"
        description="Use the official telephone, WhatsApp, email and location details below for Somali Post enquiries."
      />
      <Section title="Contact information" compact>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <Card>
              <dl className="grid gap-6 text-base text-ink-muted">
                <div>
                  <dt className="font-bold text-ink">Telephone</dt>
                  <dd className="mt-1">
                    <a
                      className="font-semibold whitespace-nowrap text-navy-900 hover:text-gold-500"
                      href={siteConfig.contact.phoneHref}
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">WhatsApp</dt>
                  <dd className="mt-1">
                    <a className="font-semibold text-navy-900 hover:text-gold-500" href={siteConfig.contact.whatsappHref}>
                      Contact Somali Post on WhatsApp
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Official email</dt>
                  <dd className="mt-1">
                    <a className="font-semibold text-navy-900 hover:text-gold-500" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Location</dt>
                  <dd className="mt-1">{siteConfig.address}</dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={siteConfig.contact.phoneHref} className="btn-primary">
                  Call Somali Post
                </a>
                <a href={siteConfig.contact.whatsappHref} className="btn-secondary">
                  Contact Somali Post on WhatsApp
                </a>
              </div>
            </Card>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={80}>
              <Card className="bg-surface-soft shadow-none">
                <h2 className="text-xl font-bold text-navy-950">Official social accounts</h2>
                <p className="mt-3 text-base leading-7 text-ink-muted">
                  Follow Somali Post through the confirmed official social-media accounts.
                </p>
                <SocialLinks className="mt-5 text-navy-950" />
              </Card>
            </Reveal>

            <Reveal delay={140}>
              <Card className="interactive-card">
                <h2 className="text-xl font-bold text-navy-950">Contacting us about a postal item</h2>
                <p className="mt-3 text-base leading-7 text-ink-muted">
                  Please have the tracking number, recipient&apos;s full name and a reachable telephone number available
                  when contacting Somali Post.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="interactive-card">
                <h2 className="text-xl font-bold text-navy-950">P.O. Box enquiries</h2>
                <p className="mt-3 text-base leading-7 text-ink-muted">
                  Call or contact Somali Post on WhatsApp to confirm the current requirements and begin a P.O. Box
                  application.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
