"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Send mail", href: "/send-to-somalia" },
  { label: "Receive mail", href: "/receive-mail" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="siteHeader">
        <div className="serviceBar">
          <div className="shell serviceBarInner">
            <p>
              <span className="statusDot" aria-hidden="true" />
              Inbound international postal exchange is operational
            </p>
            <a href="tel:+252611003239">
              <Phone size={14} strokeWidth={2.25} aria-hidden="true" />
              +252 61 100 3239
            </a>
          </div>
        </div>

        <nav className="primaryNav" aria-label="Main navigation">
          <div className="shell navInner">
            <a className="brand" href="/" aria-label="Somali Post home">
              <Image
                src="/navlogo.png"
                alt="Somali Post - Connecting Somalia"
                width={447}
                height={139}
                priority
                unoptimized
              />
            </a>

            <div className="desktopNav">
              <div className="navLinks">
                {navigation.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <a className="navAction" href="/track">
                <Search size={17} strokeWidth={2.25} aria-hidden="true" />
                Track item
              </a>
            </div>

            <button
              className="menuButton"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X size={25} aria-hidden="true" />
              ) : (
                <Menu size={25} aria-hidden="true" />
              )}
            </button>
          </div>

          <div
            className={`mobileNav ${menuOpen ? "mobileNavOpen" : ""}`}
            id="mobile-navigation"
          >
            <div className="shell mobileNavInner">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="navAction"
                href="/track"
                onClick={() => setMenuOpen(false)}
              >
                <Search size={17} strokeWidth={2.25} aria-hidden="true" />
                Track item
              </a>
            </div>
          </div>
        </nav>
      </header>

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
                    inputMode="text"
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

            <div className="heroLinks">
              <a href="/send-to-somalia">
                How to send mail to Somalia
                <ArrowRight size={17} strokeWidth={2.25} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/252611003239"
                target="_blank"
                rel="noreferrer"
              >
                Contact us on WhatsApp
              </a>
            </div>

            <div className="trustPoints" aria-label="Service information">
              <p>
                <CheckCircle2 size={17} aria-hidden="true" />
                Official national postal operator
              </p>
              <p>
                <CheckCircle2 size={17} aria-hidden="true" />
                International mail receiving restored
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="quickAccess" id="services" aria-label="Quick access">
        <div className="shell quickAccessInner">
          <p>Start here</p>
          <a href="/track">
            Track an item
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="/send-to-somalia">
            Address mail to Somalia
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="/receive-mail">
            Receive international mail
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
