import { Mail, MessageCircle, Phone } from "lucide-react";

type ContactBandProps = {
  title?: string;
  text?: string;
};

export function ContactBand({
  title = "Need official guidance?",
  text = "Contact Somali Post for current operational information.",
}: ContactBandProps) {
  return (
    <section className="contactBand">
      <div className="shell contactBandInner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="contactActions">
          <a href="tel:+252611003239">
            <Phone size={18} aria-hidden="true" />
            Call us
          </a>
          <a
            href="https://wa.me/252611003239"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
          <a href="mailto:postalservice@moct.gov.so">
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
