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
        <nav className="hidden md:flex items-center gap-6 text-base font-medium text-dark-text">
          <Link href="/" className="hover:text-somali-blue transition-colors duration-300">
            Home
          </Link>
          <Link href="/track" className="hover:text-somali-blue transition-colors duration-300">
            Track
          </Link>
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 hover:text-somali-blue transition-colors duration-300"
            >
              Services <span className="text-sm">▼</span>
            </button>
            <div className="absolute left-0 mt-3 w-60 rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <Link
                href="/services/receiving"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-somali-blue"
              >
                Receiving Mail &amp; Parcels
              </Link>
              <Link
                href="/services/po-box"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-somali-blue"
              >
                P.O. Box Rentals
              </Link>
              <Link
                href="/pudo"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-somali-blue"
              >
                RUG PUDO Network
              </Link>
            </div>
          </div>
          <Link href="/help" className="hover:text-somali-blue transition-colors duration-300">
            Help
          </Link>
          <Link href="/about" className="hover:text-somali-blue transition-colors duration-300">
            About Us
          </Link>
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
