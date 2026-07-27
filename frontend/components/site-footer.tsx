import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/postasomalia/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adeegga_boostada_soomaaliya/",
  },
  { label: "X", href: "https://x.com/Somalipostal" },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@adeegga_boostada_somalia",
  },
];

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div className="footerBrand">
          <Link href="/" aria-label="Somali Post home">
            <Image
              src="/logo-so.png"
              alt="Somali Post"
              width={244}
              height={188}
              unoptimized
            />
          </Link>
          <p>
            The national postal service of the Federal Republic of Somalia.
          </p>
        </div>

        <div>
          <h2>Postal services</h2>
          <Link href="/track">Track an item</Link>
          <Link href="/receive-mail">Receive international mail</Link>
          <Link href="/po-box">P.O. Box enquiries</Link>
          <Link href="/rug-pudo">RUG PUDO</Link>
        </div>

        <div>
          <h2>Guidance</h2>
          <Link href="/send-to-somalia">Send mail to Somalia</Link>
          <Link href="/help">Help centre</Link>
          <Link href="/about">About Somali Post</Link>
          <Link href="/contact">Contact us</Link>
        </div>

        <div className="footerContact">
          <h2>Official contact</h2>
          <a href="tel:+252611003239">
            <Phone size={16} aria-hidden="true" />
            +252 61 100 3239
          </a>
          <a href="mailto:postalservice@moct.gov.so">
            <Mail size={16} aria-hidden="true" />
            postalservice@moct.gov.so
          </a>
          <p>
            <MapPin size={16} aria-hidden="true" />
            Mogadishu, Somalia
          </p>
          <div className="footerSocials" aria-label="Official social accounts">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="shell footerBottomInner">
          <p>© {new Date().getFullYear()} Somali Postal Service</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
