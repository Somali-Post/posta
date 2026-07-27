import type { Metadata } from "next";
import {
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact Somali Post",
  description:
    "Official Somali Post telephone, WhatsApp, email, location and social accounts.",
};

const socials = [
  ["Facebook", "https://www.facebook.com/postasomalia/"],
  ["Instagram", "https://www.instagram.com/adeegga_boostada_soomaaliya/"],
  ["X", "https://x.com/Somalipostal"],
  ["TikTok", "https://www.tiktok.com/@adeegga_boostada_somalia"],
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Official contact routes"
        title="Contact Somali Post"
        intro="Use the confirmed telephone, WhatsApp, email and location details below for Somali Post enquiries."
      />

      <section className="sectionBlock">
        <div className="shell contactGrid">
          <a className="contactCard" href="tel:+252611003239">
            <Phone size={25} aria-hidden="true" />
            <span>Telephone</span>
            <strong>+252 61 100 3239</strong>
          </a>
          <a
            className="contactCard"
            href="https://wa.me/252611003239"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={25} aria-hidden="true" />
            <span>WhatsApp</span>
            <strong>Message Somali Post</strong>
          </a>
          <a
            className="contactCard"
            href="mailto:postalservice@moct.gov.so"
          >
            <Mail size={25} aria-hidden="true" />
            <span>Official email</span>
            <strong>postalservice@moct.gov.so</strong>
          </a>
          <div className="contactCard">
            <MapPin size={25} aria-hidden="true" />
            <span>Location</span>
            <strong>Mogadishu, Somalia</strong>
          </div>
        </div>
      </section>

      <section className="sectionBlock paleSection">
        <div className="shell twoColumn">
          <div>
            <p className="sectionLabel">Postal item enquiries</p>
            <h2>Have these details ready</h2>
            <p className="bodyLead">
              Providing the correct information helps the team understand your
              enquiry.
            </p>
          </div>
          <ul className="simpleList">
            <li>13-character S10 tracking number</li>
            <li>Recipient&apos;s full name</li>
            <li>Reachable telephone or WhatsApp number</li>
            <li>Relevant sending or arrival details</li>
          </ul>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="shell socialSection">
          <div>
            <p className="sectionLabel">Confirmed accounts</p>
            <h2>Official social accounts</h2>
          </div>
          <div className="socialLinks">
            {socials.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {label}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="processingNote">
        <div className="shell processingNoteInner">
          <h2>P.O. Box enquiries</h2>
          <p>
            Call or contact Somali Post on WhatsApp to confirm current
            requirements and begin an application.
          </p>
        </div>
      </section>
    </main>
  );
}
