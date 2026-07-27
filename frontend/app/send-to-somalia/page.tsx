import type { Metadata } from "next";
import { Check, Info, Phone } from "lucide-react";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Send Mail to Somalia",
  description:
    "Official addressing guidance for sending mail to Somalia through Somali Post.",
};

const checklist = [
  "Write the recipient's full name clearly.",
  "Include the correct city or town.",
  "Add the district or neighbourhood where available.",
  "Include a building, street or recognisable landmark.",
  "Use BN1011 as the current interim postal code.",
  "Include an active recipient mobile or WhatsApp number.",
  "Include the sender's return address.",
];

const faqs = [
  {
    question: "Can I send mail without a postcode?",
    answer:
      "When a postcode is requested, use BN1011 as the current interim code for mail routed through Somali Post.",
  },
  {
    question: "Is BN1011 used for every Somali city?",
    answer:
      "For now, BN1011 may be used with the correct city or town. It does not identify a specific geographical area.",
  },
  {
    question: "Is a recipient telephone number required?",
    answer:
      "Yes. A valid and reachable mobile or WhatsApp number is essential for collection or final handover coordination.",
  },
  {
    question: "Does Somali Post provide home delivery everywhere?",
    answer:
      "Do not assume universal home delivery. Somali Post may coordinate collection or final handover depending on operational arrangements.",
  },
  {
    question: "What should I write when there is no street name?",
    answer:
      "Use the clearest available landmark, building, business, district or neighbourhood information.",
  },
];

export default function SendToSomaliaPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Official addressing guidance"
        title="How to Address Mail to Somalia"
        intro="Somalia is developing a national addressing and postcode system. Use this current interim format for mail routed through Somali Post."
      />

      <section className="noticeBand">
        <div className="shell noticeBandInner">
          <Info size={22} aria-hidden="true" />
          <div>
            <h2>BN1011 is an interim routing code</h2>
            <p>
              It should not be treated as the final national postcode system
              and does not identify a specific geographical area.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="shell twoColumn">
          <div>
            <p className="sectionLabel">Recommended format</p>
            <h2>Build the clearest possible recipient address</h2>
            <p className="bodyLead">
              The strongest address includes the recipient name, city or town,
              district or neighbourhood and a recognisable building, street or
              landmark.
            </p>
            <div className="phoneNotice">
              <Phone size={22} aria-hidden="true" />
              <div>
                <h3>Recipient phone requirement</h3>
                <p>
                  Somali Post may use the mobile or WhatsApp number to coordinate
                  collection or final handover.
                </p>
              </div>
            </div>
          </div>
          <div className="addressExamples">
            <div className="addressLabel">
              <span>Recommended format</span>
              <p>RECIPIENT&apos;S FULL NAME</p>
              <p>HOUSE, BUSINESS, STREET OR NEAREST LANDMARK</p>
              <p>DISTRICT OR NEIGHBOURHOOD</p>
              <p>CITY OR TOWN</p>
              <strong>BN1011</strong>
              <p>SOMALIA</p>
              <p>MOBILE / WHATSAPP: +252 61 XXX XXXX</p>
            </div>
            <div className="addressLabel sampleLabel">
              <span>Fictional sample</span>
              <p>AMINA HASSAN</p>
              <p>NEAR HAYATT MALL, TALEEX</p>
              <p>HODAN DISTRICT</p>
              <p>MOGADISHU</p>
              <strong>BN1011</strong>
              <p>SOMALIA</p>
              <p>MOBILE / WHATSAPP: +252 61 XXX XXXX</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionBlock paleSection">
        <div className="shell twoColumn">
          <div>
            <p className="sectionLabel">Before posting</p>
            <h2>Sender checklist</h2>
          </div>
          <ul className="checkList">
            {checklist.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="shell infoSplit">
          <div>
            <p className="sectionLabel">What BN1011 means</p>
            <h2>A temporary route while national systems develop</h2>
          </div>
          <div>
            <p>
              BN1011 helps route mail through Somali Post during the development
              of Somalia&apos;s national addressing and postcode systems.
            </p>
            <p>
              After arrival, postal and customs processing may take place before
              Somali Post coordinates collection or final handover.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionBlock paleSection">
        <div className="shell narrowShell">
          <div className="sectionHeading">
            <p className="sectionLabel">Common questions</p>
            <h2>Sending mail to Somalia FAQs</h2>
          </div>
          <div className="faqList">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Confirm current sending guidance"
        text="Contact Somali Post before sending when service requirements affect your decision."
      />
    </main>
  );
}
