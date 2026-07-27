import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Help Centre",
  description:
    "Answers about tracking, sending and receiving mail, P.O. Boxes and Somali Post services.",
};

const groups = [
  {
    title: "Sending mail to Somalia",
    items: [
      [
        "What postal code should I use?",
        "When a postcode is requested, use BN1011 as the current interim code for mail routed through Somali Post.",
      ],
      [
        "Is BN1011 a permanent national postcode?",
        "No. BN1011 is an interim routing code while Somalia continues developing its national postcode system.",
      ],
      [
        "Is the recipient's telephone number required?",
        "Yes. Include a valid mobile or WhatsApp number so the recipient can be contacted.",
      ],
      [
        "Does Somali Post provide home delivery everywhere?",
        "Service arrangements vary. Somali Post may coordinate collection or final handover depending on the service available.",
      ],
    ],
  },
  {
    title: "Tracking",
    items: [
      [
        "What format should my tracking number use?",
        "Use a 13-character S10 number with two letters, nine digits and two country letters, for example RR123456785DE.",
      ],
      [
        "Why is my tracking number not showing updates?",
        "The item may not have reached a supported postal event yet, or the sending operator may not have provided an update.",
      ],
      [
        "Where can I find my tracking number?",
        "Check the receipt, dispatch confirmation or message provided by the sending postal operator.",
      ],
    ],
  },
  {
    title: "Receiving mail",
    items: [
      [
        "What should I prepare before collecting an item?",
        "Keep the tracking number, a reachable telephone number and accepted identification ready.",
      ],
      [
        "Can customs processing affect availability?",
        "Yes. Postal handling and applicable customs requirements can affect when an item becomes available.",
      ],
      [
        "How will Somali Post contact me?",
        "Somali Post may use the mobile or WhatsApp number written on the item.",
      ],
    ],
  },
  {
    title: "P.O. Boxes and RUG PUDO",
    items: [
      [
        "Can I apply for a P.O. Box online?",
        "No. Call or contact Somali Post on WhatsApp to confirm requirements and begin an enquiry.",
      ],
      [
        "Can a diaspora applicant use a passport?",
        "Yes. Diaspora applicants may use a valid passport.",
      ],
      [
        "Is RUG PUDO currently available?",
        "No. RUG PUDO is under development. Confirmed locations and service information will be published before launch.",
      ],
    ],
  },
];

export default function HelpPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Public postal guidance"
        title="Help Centre"
        intro="Find answers about tracking, sending mail to Somalia, receiving international items, P.O. Boxes and planned services."
      />

      <section className="sectionBlock">
        <div className="shell helpLayout">
          {groups.map((group) => (
            <section className="helpGroup" key={group.title}>
              <h2>{group.title}</h2>
              <div className="faqList">
                {group.items.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <ContactBand
        title="Still need help?"
        text="Contact Somali Post directly for current operational guidance."
      />
    </main>
  );
}
