import type { Metadata } from "next";
import {
  BadgeCheck,
  Contact,
  FileCheck2,
  PackageOpen,
  Phone,
} from "lucide-react";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Receiving International Mail",
  description:
    "Official guidance for recipients expecting international postal items through Somali Post.",
};

const steps = [
  {
    icon: PackageOpen,
    title: "Arrival at the inward office",
    text: "The item enters Somali Post's inbound international mail process.",
  },
  {
    icon: FileCheck2,
    title: "Postal and customs processing",
    text: "Postal handling and any applicable customs requirements are completed.",
  },
  {
    icon: Phone,
    title: "Recipient contact",
    text: "Somali Post may use the mobile or WhatsApp number written on the item.",
  },
  {
    icon: Contact,
    title: "Collection or final handover",
    text: "The recipient is contacted according to the service arrangement available.",
  },
];

export default function ReceiveMailPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Inbound exchange restored"
        title="Receiving International Mail"
        intro="Somali Post provides guidance for recipients expecting supported postal items from abroad."
        status="Operational"
      />

      <section className="sectionBlock">
        <div className="shell">
          <div className="sectionHeading">
            <p className="sectionLabel">The inbound process</p>
            <h2>How international mail is handled</h2>
          </div>
          <ol className="processSteps">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span className="stepNumber">{index + 1}</span>
                  <Icon size={23} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="sectionBlock paleSection">
        <div className="shell">
          <div className="sectionHeading splitHeading">
            <div>
              <p className="sectionLabel">Be ready</p>
              <h2>What recipients should prepare</h2>
            </div>
            <p>
              Having the correct information ready helps Somali Post coordinate
              collection or final handover.
            </p>
          </div>
          <div className="threeColumn">
            <article className="plainPanel">
              <BadgeCheck size={24} aria-hidden="true" />
              <h3>Tracking number</h3>
              <p>Keep the S10 number supplied by the sending postal operator.</p>
            </article>
            <article className="plainPanel">
              <Phone size={24} aria-hidden="true" />
              <h3>Reachable telephone</h3>
              <p>Make sure the mobile or WhatsApp number on the item works.</p>
            </article>
            <article className="plainPanel">
              <Contact size={24} aria-hidden="true" />
              <h3>Accepted identification</h3>
              <p>
                A national identification document or valid passport may be
                requested, subject to operational checks.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="processingNote">
        <div className="shell processingNoteInner">
          <h2>Processing times can vary</h2>
          <p>
            Timing depends on transport, postal handling, customs requirements
            and the information provided with the item.
          </p>
        </div>
      </section>

      <ContactBand
        title="Expecting an international item?"
        text="Have the tracking number, recipient name and reachable phone number ready when contacting us."
      />
    </main>
  );
}
