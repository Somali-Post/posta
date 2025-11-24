"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage, useTranslations } from '@/context/LanguageContext';
import type { Language } from '@/lib/translations';

const languageOrder: Language[] = ['en', 'ar'];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const translations = useTranslations();
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const serviceLinks = [
    { href: '/services/receiving', label: translations.nav.dropdown.receiving },
    { href: '/services/po-box', label: translations.nav.dropdown.poBox },
    { href: '/pudo', label: translations.nav.dropdown.pudo },
  ];

  const primaryLinks = [
    { href: '/', label: translations.nav.home },
    { href: '/track', label: translations.nav.track },
    { href: '/help', label: translations.nav.help },
    { href: '/about', label: translations.nav.about },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;

      if (menuToggleRef.current?.contains(targetNode)) {
        return;
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(targetNode) &&
        isServicesOpen
      ) {
        setIsServicesOpen(false);
      }
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(targetNode) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen, isServicesOpen]);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleServicePointerEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      clearHoverTimeout();
      setIsServicesOpen(true);
    }
  };

  const handleServicePointerLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      clearHoverTimeout();
      hoverTimeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 150);
    }
  };

  const closeMenus = () => {
    clearHoverTimeout();
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const renderPrimaryLinks = (links: typeof primaryLinks) =>
    links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={closeMenus}
        className="text-base font-medium text-dark-text hover:text-brand-dark-blue"
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white rounded-full p-1 h-16 w-16 flex items-center justify-center">
            <Image src="/images/somali-post-logo.png" alt="Somali Post Logo" width={60} height={60} />
          </div>
          <span className="text-xl font-bold text-brand-dark-blue hidden sm:block">Posta.so</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {renderPrimaryLinks(primaryLinks.slice(0, 2))}

          <div
            className="relative"
            ref={dropdownRef}
            onPointerEnter={handleServicePointerEnter}
            onPointerLeave={handleServicePointerLeave}
          >
            <button
              type="button"
              className="text-base font-medium text-dark-text hover:text-brand-dark-blue flex items-center gap-1"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              onFocus={() => setIsServicesOpen(true)}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
            >
              {translations.nav.services}
              <svg
                className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                role="menu"
              >
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMenus}
                    className="block px-4 py-2 text-dark-text hover:bg-light-gray"
                    role="menuitem"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {renderPrimaryLinks(primaryLinks.slice(2))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
            {languageOrder.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                className={`uppercase transition-colors ${
                  language === code ? 'text-dark-text font-bold' : 'text-gray-500 hover:text-dark-text'
                }`}
                aria-label={translations.languageNames[code]}
                aria-pressed={language === code}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            ref={menuToggleRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden p-2"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border-gray" ref={mobileNavRef}>
          <nav className="container mx-auto px-4 pt-2 pb-4 flex flex-col space-y-1">
            {primaryLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="py-2 text-lg font-medium text-dark-text hover:text-brand-dark-blue"
              >
                {link.label}
              </Link>
            ))}
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={closeMenus}
                className="py-2 pl-4 text-md font-medium text-gray-600 hover:text-brand-dark-blue"
              >
                - {service.label}
              </Link>
            ))}
            {primaryLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="py-2 text-lg font-medium text-dark-text hover:text-brand-dark-blue"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4">
              {languageOrder.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  className={`uppercase flex-1 border rounded-md py-2 ${
                    language === code ? 'border-brand-dark-blue text-brand-dark-blue font-semibold' : 'border-border-gray text-gray-600'
                  }`}
                  aria-label={translations.languageNames[code]}
                  aria-pressed={language === code}
                >
                  {code}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
