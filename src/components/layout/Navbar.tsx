'use client';

// src/components/layout/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Language } from '@/lib/translations';
import { useLanguage, useTranslations } from '@/context/LanguageContext';

const languageOptions: { code: Language; short: string }[] = [
  { code: 'so', short: 'SO' },
  { code: 'en', short: 'EN' },
  { code: 'ar', short: 'AR' },
];

export const Navbar = () => {
  const translations = useTranslations();
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    { name: translations.nav.home, href: '/' },
    { name: translations.nav.services, href: '/services/receiving' },
    { name: translations.nav.poBox, href: '/services/po-box' },
    { name: translations.nav.help, href: '/help' },
    { name: translations.nav.about, href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white rounded-full p-1 h-16 w-16 flex items-center justify-center">
            <Image
              src="/images/somali-post-logo.png"
              alt="Somali Post Logo"
              width={60}
              height={60}
              quality={100}
            />
          </div>
          <span className="text-xl font-bold text-somali-blue hidden sm:block">
            Posta.so
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-base font-medium text-dark-text hover:text-somali-blue transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center gap-3 text-sm font-medium">
          {languageOptions.map(({ code, short }) => (
            <button
              key={code}
              type="button"
              className={`transition-colors ${language === code ? 'text-dark-text font-bold' : 'text-gray-500 hover:text-dark-text'}`}
              onClick={() => setLanguage(code)}
              aria-label={translations.languageNames[code]}
            >
              {short}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
