'use client';

// src/components/layout/Footer.tsx
import Link from 'next/link';
import { useTranslations } from '@/context/LanguageContext';

export const Footer = () => {
  const { footer } = useTranslations();

  return (
    <footer className="bg-dark-text text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">{footer.aboutTitle}</h3>
          <p className="text-gray-400">{footer.aboutBody}</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">{footer.quickLinksTitle}</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-400 hover:text-white">{footer.links.home}</Link>
            <Link href="/services/receiving" className="text-gray-400 hover:text-white">{footer.links.services}</Link>
            <Link href="/services/po-box" className="text-gray-400 hover:text-white">{footer.links.poBox}</Link>
            <Link href="/help" className="text-gray-400 hover:text-white">{footer.links.help}</Link>
            <Link href="/about" className="text-gray-400 hover:text-white">{footer.links.about}</Link>
          </nav>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">{footer.contactTitle}</h3>
          <p className="text-gray-400">
            {footer.contactLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < footer.contactLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="mt-2 text-gray-400">
            {footer.emailLabel}: {footer.emailValue}
          </p>
          <p className="mt-2 text-gray-400">
            {footer.phoneLabel}: {footer.phoneValue}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {footer.rights}
        </div>
      </div>
    </footer>
  );
};
