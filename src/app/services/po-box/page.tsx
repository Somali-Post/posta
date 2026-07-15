import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { Card, PageHero, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'P.O. Box Service',
  description: 'P.O. Box service enquiries and application guidance from Somali Post.',
};

const steps = [
  'Call or contact Somali Post on WhatsApp.',
  'Confirm the current requirements, identification and applicable fee.',
  'Visit the designated Somali Post office to complete the application when instructed.',
];

const preparation = [
  'Full name',
  'Reachable telephone number',
  'Accepted identification',
  'Passport for diaspora applicants',
  'Business information where applying for an organisation',
];

export default function POBoxPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Postal service"
        title="P.O. Box Service"
        description="A P.O. Box provides a secure and consistent address for receiving mail through Somali Post. Contact our team by telephone or WhatsApp to confirm the requirements and begin an application."
      />

      <Section title="What is a P.O. Box?" compact>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="text-lg leading-8 text-ink-muted">
              A P.O. Box gives a customer a dedicated postal box for receiving mail at a Somali Post facility. It can
              help individuals, families and organisations use a consistent postal address for items routed through
              Somali Post.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Card className="border-gold-400/50 bg-gold-400/12 shadow-none">
              <h2 className="text-xl font-bold text-navy-950">Customer support</h2>
              <p className="mt-3 leading-7 text-navy-950">
                Our team will confirm the applicable fee, required identification and collection arrangements when you
                contact us.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <section className="bg-surface-soft">
        <Section title="Who can apply?" compact>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <Card className="interactive-card h-full">
                <h2 className="text-xl font-bold text-navy-950">Somali residents</h2>
                <p className="mt-3 leading-7 text-ink-muted">
                  Somali residents may use a national identification document or another form of identification accepted
                  by Somali Post.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="interactive-card h-full">
                <h2 className="text-xl font-bold text-navy-950">Diaspora applicants</h2>
                <p className="mt-3 leading-7 text-ink-muted">Diaspora applicants may use a valid passport.</p>
              </Card>
            </Reveal>
          </div>
        </Section>
      </section>

      <Section title="How to enquire" compact>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
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

      <Section title="What to prepare" compact>
        <div className="grid gap-4 md:grid-cols-2">
          {preparation.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <div className="interactive-card rounded-3xl border border-border bg-white p-5 font-semibold text-ink shadow-card">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Contact Somali Post" compact>
        <Card className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy-950">P.O. Box enquiries</h2>
            <p className="mt-2 text-base leading-7 text-ink-muted">
              Call, use WhatsApp or email Somali Post to begin an application.
            </p>
            <a className="mt-3 inline-flex font-semibold text-navy-900 hover:text-gold-500" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.contact.phoneHref} className="btn-primary">
              Call Somali Post
            </a>
            <a href={siteConfig.contact.whatsappHref} className="btn-secondary">
              Enquire on WhatsApp
            </a>
          </div>
        </Card>
      </Section>
    </SiteShell>
  );
}
