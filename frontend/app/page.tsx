import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  Clock3,
  MapPin,
  PackageCheck,
  Search,
} from "lucide-react";
import { ContactBand } from "@/components/contact-band";

const services = [
  {
    icon: PackageCheck,
    title: "International mail receiving",
    text: "Guidance for recipients expecting supported postal items from abroad.",
    href: "/receive-mail",
    action: "Receiving guidance",
  },
  {
    icon: Search,
    title: "Online tracking",
    text: "View available postal events using a 13-character S10 tracking number.",
    href: "/track",
    action: "Track an item",
  },
  {
    icon: Box,
    title: "P.O. Box enquiries",
    text: "Ask about a secure and consistent postal address through Somali Post.",
    href: "/po-box",
    action: "P.O. Box guidance",
  },
  {
    icon: MapPin,
    title: "RUG PUDO",
    text: "Somali Post's pickup and drop-off network is currently in development.",
    href: "/rug-pudo",
    action: "View planned service",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="heroMedia" aria-hidden="true">
          <Image
            src="/hero-image.png"
            alt=""
            fill
            priority
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="shell heroInner">
          <div className="heroContent">
            <p className="eyebrow">
              <span aria-hidden="true" />
              Somalia&apos;s National Postal Service
            </p>
            <h1 id="hero-title">
              Connecting Somalia through trusted postal services
            </h1>
            <p className="heroLead">
              Receive international mail, track supported postal items and
              access official guidance for sending mail to Somalia.
            </p>

            <form className="trackingTool" action="/track" method="get">
              <label htmlFor="tracking-number">Track your postal item</label>
              <div className="trackingRow">
                <div className="trackingInput">
                  <Search size={19} strokeWidth={2} aria-hidden="true" />
                  <input
                    id="tracking-number"
                    name="number"
                    type="text"
                    autoComplete="off"
                    maxLength={13}
                    placeholder="Enter 13-character S10 number"
                    aria-describedby="tracking-hint"
                  />
                </div>
                <button type="submit">
                  Track
                  <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
                </button>
              </div>
              <p id="tracking-hint">Example: RR123456785DE</p>
            </form>
          </div>
        </div>
      </section>

      <section className="quickAccess" aria-label="Quick access">
        <div className="shell quickAccessInner">
          <div className="serviceAssurance">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>
              <strong>Official national operator</strong>
              Inbound exchange restored
            </span>
          </div>
          <Link href="/send-to-somalia">
            Send mail to Somalia
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/252611003239"
            target="_blank"
            rel="noreferrer"
          >
            Contact us on WhatsApp
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="sectionBlock" id="services">
        <div className="shell">
          <div className="sectionHeading splitHeading">
            <div>
              <p className="sectionLabel">Available guidance and services</p>
              <h2>Postal services available now</h2>
            </div>
            <p>
              Clear information for receiving mail, tracking items and accessing
              Somali Post services.
            </p>
          </div>
          <div className="serviceGrid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="serviceCard" key={service.title}>
                  <Icon size={25} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link href={service.href}>
                    {service.action}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="addressBand">
        <div className="shell addressBandInner">
          <div className="addressCopy">
            <p className="sectionLabel">Sending mail to Somalia</p>
            <h2>Use BN1011 with a complete recipient address</h2>
            <p>
              BN1011 is the current interim postal routing code for mail sent
              through Somali Post. It is not the final national postcode system.
            </p>
            <div className="noticeLine">
              <CheckCircle2 size={20} aria-hidden="true" />
              A reachable recipient mobile or WhatsApp number is essential.
            </div>
            <Link className="textAction" href="/send-to-somalia">
              Read the addressing guide
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="addressLabel" aria-label="Recommended address format">
            <p>RECIPIENT&apos;S FULL NAME</p>
            <p>HOUSE, BUSINESS, STREET OR NEAREST LANDMARK</p>
            <p>DISTRICT OR NEIGHBOURHOOD</p>
            <p>CITY OR TOWN</p>
            <strong>BN1011</strong>
            <p>SOMALIA</p>
            <p>MOBILE / WHATSAPP: RECIPIENT PHONE NUMBER</p>
          </div>
        </div>
      </section>

      <section className="sectionBlock restorationSection">
        <div className="shell restorationGrid">
          <div>
            <p className="sectionLabel">National service restoration</p>
            <h2>Building clearer, more accessible postal support</h2>
            <p>
              Somali Post has restored inbound international postal exchange
              and is modernising services for people, businesses and public
              institutions.
            </p>
          </div>
          <div className="restorationPoints">
            <article>
              <PackageCheck size={23} aria-hidden="true" />
              <h3>Inbound exchange restored</h3>
              <p>Supported items can arrive through recognised postal channels.</p>
            </article>
            <article>
              <Search size={23} aria-hidden="true" />
              <h3>Track supported items</h3>
              <p>View postal events supplied by participating postal operators.</p>
            </article>
            <article>
              <Clock3 size={23} aria-hidden="true" />
              <h3>Services being modernised</h3>
              <p>New services will be announced when operationally confirmed.</p>
            </article>
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
