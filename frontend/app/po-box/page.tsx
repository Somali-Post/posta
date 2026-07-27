import type { Metadata } from "next";
import { Building2, Check, IdCard, Phone, UserRound } from "lucide-react";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "P.O. Box Service",
  description:
    "Guidance for P.O. Box enquiries and applications through Somali Post.",
};

const preparation = [
  "Full name",
  "Reachable telephone number",
  "Accepted identification",
  "Passport for diaspora applicants",
  "Business information when applying for an organisation",
];

export default function PoBoxPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Secure postal address"
        title="P.O. Box Service"
        intro="A P.O. Box provides a secure and consistent address for receiving mail through Somali Post."
      />

      <section className="sectionBlock">
        <div className="shell infoSplit">
          <div>
            <p className="sectionLabel">The service</p>
            <h2>What is a P.O. Box?</h2>
          </div>
          <div>
            <p>
              A P.O. Box gives a customer a dedicated postal box for receiving
              mail at a Somali Post facility.
            </p>
            <p>
              It can help individuals, families and organisations use a
              consistent postal address for items routed through Somali Post.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionBlock paleSection">
        <div className="shell">
          <div className="sectionHeading">
            <p className="sectionLabel">Eligibility guidance</p>
            <h2>Who can enquire?</h2>
          </div>
          <div className="twoCardGrid">
            <article className="audiencePanel">
              <UserRound size={25} aria-hidden="true" />
              <h3>Somali residents</h3>
              <p>
                Residents may use a national identification document or another
                form of identification accepted by Somali Post.
              </p>
            </article>
            <article className="audiencePanel">
              <IdCard size={25} aria-hidden="true" />
              <h3>Diaspora applicants</h3>
              <p>Diaspora applicants may use a valid passport.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="shell twoColumn">
          <div>
            <p className="sectionLabel">Application route</p>
            <h2>How to enquire</h2>
            <ol className="numberedList">
              <li>
                <span>1</span>
                Call or contact Somali Post on WhatsApp.
              </li>
              <li>
                <span>2</span>
                Confirm current requirements, identification and applicable fee.
              </li>
              <li>
                <span>3</span>
                Visit the designated Somali Post office when instructed.
              </li>
            </ol>
          </div>
          <div className="preparePanel">
            <Building2 size={27} aria-hidden="true" />
            <h2>What to prepare</h2>
            <ul className="checkList">
              {preparation.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="processingNote">
        <div className="shell processingNoteInner">
          <Phone size={25} aria-hidden="true" />
          <div>
            <h2>Fees and collection arrangements</h2>
            <p>
              Our team will confirm the applicable fee, required identification
              and collection arrangements when you contact us.
            </p>
          </div>
        </div>
      </section>

      <ContactBand
        title="Begin a P.O. Box enquiry"
        text="Call or use WhatsApp to confirm the current requirements before visiting an office."
      />
    </main>
  );
}
