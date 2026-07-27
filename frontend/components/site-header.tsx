"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { useState } from "react";

const primaryLinks = [
  { label: "Send mail", href: "/send-to-somalia" },
  { label: "Receive mail", href: "/receive-mail" },
  { label: "About", href: "/about" },
  { label: "Help", href: "/help" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "P.O. Box", href: "/po-box" },
  { label: "RUG PUDO", href: "/rug-pudo" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
          <Link className="brand" href="/" aria-label="Somali Post home">
            <Image
              src="/navlogo.png"
              alt="Somali Post - Connecting Somalia"
              width={447}
              height={139}
              priority
              unoptimized
            />
          </Link>

          <div className="desktopNav">
            <div className="navLinks">
              {primaryLinks.slice(0, 2).map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <details className="navDropdown">
                <summary>
                  Services
                  <ChevronDown size={15} aria-hidden="true" />
                </summary>
                <div className="navDropdownMenu">
                  {serviceLinks.map((item) => (
                    <Link key={item.label} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
              {primaryLinks.slice(2).map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link className="navAction" href="/track">
              <Search size={17} strokeWidth={2.25} aria-hidden="true" />
              Track item
            </Link>
          </div>

          <button
            className="menuButton"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        <div
          className={`mobileNav ${menuOpen ? "mobileNavOpen" : ""}`}
          id="mobile-navigation"
        >
          <div className="shell mobileNavInner">
            {primaryLinks.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="mobileNavLabel">Services</p>
            {serviceLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {primaryLinks.slice(2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="navAction"
              href="/track"
              onClick={() => setMenuOpen(false)}
            >
              <Search size={17} strokeWidth={2.25} aria-hidden="true" />
              Track item
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
