import type { Metadata } from "next";
import {
  Building2,
  Globe2,
  LockKeyhole,
  Route,
  ShieldCheck,
} from "lucide-react";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Somali Post",
  description:
    "Learn about Somalia's official national postal operator and the restoration of postal services.",
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Reliable public service",
    text: "Postal support delivered with care for customers, businesses and institutions.",
  },
  {
    icon: Building2,
    title: "Clear customer information",
    text: "Guidance that separates available services from planned development.",
  },
  {
    icon: LockKeyhole,
    title: "Secure handling",
    text: "Responsible handling of postal items and customer information.",
  },
  {
    icon: Globe2,
    title: "International cooperation",
    text: "Inbound exchange and tracking through recognised postal channels.",
  },
  {
    icon: Route,
    title: "Progressive national coverage",
    text: "Service improvements introduced carefully as infrastructure develops.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Official national postal operator"
        title="About Somali Post"
        intro="Somali Post is the national postal service of the Federal Republic of Somalia, serving the public, businesses and government institutions."
      />

      <section className="sectionBlock">
        <div className="shell infoSplit">
          <div>
            <p className="sectionLabel">Who we are</p>
            <h2>A national institution restoring public postal services</h2>
          </div>
          <div>
            <p>
              Somali Post operates under the Ministry of Communications and
              Technology and is responsible for restoring and delivering
              official postal services.
            </p>
            <p>
              We provide public guidance, support inbound international
              exchange and prepare new services as national postal
              infrastructure is modernised.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionBlock deepSection">
        <div className="shell restorationGrid">
          <div>
            <p className="sectionLabel lightLabel">Restoration and modernisation</p>
            <h2>Inbound international exchange has been restored</h2>
          </div>
          <div>
            <p>
              Supported items can be routed through recognised postal channels,
              while Somali Post progressively improves guidance, tracking and
              practical customer contact routes.
            </p>
            <p>
              Outbound international mail is not listed as available unless
              Somali Post confirms it publicly.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="shell">
          <div className="sectionHeading">
            <p className="sectionLabel">How we work</p>
            <h2>Our service principles</h2>
          </div>
          <div className="principlesGrid">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title}>
                  <Icon size={23} aria-hidden="true" />
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sectionBlock paleSection">
        <div className="shell infoSplit">
          <div>
            <p className="sectionLabel">Future service development</p>
            <h2>Services will be introduced when operationally ready</h2>
          </div>
          <div>
            <p>
              RUG PUDO is the planned pickup and drop-off network. Confirmed
              locations and service information will be published before the
              network opens.
            </p>
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
