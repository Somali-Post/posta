'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navLinks, serviceLinks } from '@/lib/site';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-3 py-4 sm:px-4">
      <div
        className={`mx-auto flex max-w-[1240px] items-center justify-between rounded-full bg-navy-950 px-4 py-3.5 text-white ring-1 ring-white/10 transition-shadow duration-200 sm:px-5 lg:px-6 ${
          scrolled ? 'shadow-[0_18px_42px_rgba(16,35,79,0.24)]' : 'shadow-soft'
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3.5" onClick={closeMenus}>
          <Image
            src="/images/logo-bird.png"
            alt="Somali Post logo"
            width={600}
            height={416}
            className="h-9 w-auto shrink-0 object-contain sm:h-10 lg:h-11"
            priority
          />
          <span className="truncate text-base font-bold tracking-wide sm:text-lg">Somali Post</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1.5 lg:flex">
          <NavItem href="/" label="Home" active={pathname === '/'} onClick={closeMenus} />
          <NavItem href="/send-to-somalia" label="Send to Somalia" active={pathname === '/send-to-somalia'} onClick={closeMenus} />

          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.95rem] font-semibold transition hover:bg-white/10 hover:text-white ${
                pathname.startsWith('/services') ? 'bg-white/10 text-white' : 'text-white/85'
              }`}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
              onFocus={() => setServicesOpen(true)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div
                className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 animate-[menuIn_160ms_ease-out] rounded-2xl border border-border bg-white p-2 text-ink shadow-soft"
                role="menu"
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-[0.95rem] font-semibold hover:bg-surface-soft ${
                      pathname === link.href ? 'bg-gold-400/18 text-navy-950' : ''
                    }`}
                    role="menuitem"
                    onClick={closeMenus}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavItem href="/track" label="Track an Item" active={pathname === '/track'} onClick={closeMenus} />
          <NavItem href="/about" label="About Us" active={pathname === '/about'} onClick={closeMenus} />
          <NavItem href="/help" label="Help" active={pathname === '/help'} onClick={closeMenus} />
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/track"
            className="btn-primary hidden px-5 py-3 text-[0.95rem] md:inline-flex"
            onClick={closeMenus}
          >
            Track an Item
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-[1240px] animate-[mobileMenuIn_180ms_ease-out] rounded-3xl border border-border bg-white p-3 shadow-soft lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3.5 text-base font-bold text-ink hover:bg-surface-soft ${
                  pathname === link.href ? 'bg-gold-400/18' : ''
                }`}
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t pt-2">
              <p className="px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">Services</p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 text-[0.95rem] font-semibold text-ink hover:bg-surface-soft ${
                    pathname === link.href ? 'bg-gold-400/18' : ''
                  }`}
                  onClick={closeMenus}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2.5 text-[0.95rem] font-semibold transition hover:bg-white/10 hover:text-white ${
        active ? 'bg-white/10 text-white after:ml-2 after:inline-block after:h-1.5 after:w-1.5 after:rounded-full after:bg-gold-400' : 'text-white/85'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
