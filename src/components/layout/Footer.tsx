'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon } from '../icons/FacebookIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { useTranslations } from '@/context/LanguageContext';

const socialLinks = [
  { href: '#', Icon: TwitterIcon },
  { href: '#', Icon: FacebookIcon },
  { href: '#', Icon: LinkedInIcon },
];

export const Footer = () => {
  const { footer } = useTranslations();
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: '/about', label: footer.links.about },
    { href: '/services/receiving', label: footer.links.services },
    { href: '/services/po-box', label: footer.links.poBox },
    { href: '/pudo', label: footer.links.pudo },
    { href: '/help', label: footer.links.help },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image src="/images/somali-post-logo.png" alt="Somali Post Logo" width={50} height={50} />
              <span className="text-xl font-bold">Posta.so</span>
            </Link>
            <h3 className="font-bold text-lg mb-2">{footer.aboutTitle}</h3>
            <p className="text-gray-400">{footer.aboutBody}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footer.quickLinksTitle}</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footer.contactTitle}</h3>
            <div className="text-gray-400 space-y-2">
              {footer.contactLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-4">
              <span className="font-semibold">{footer.emailLabel}:</span>{' '}
              <a href={`mailto:${footer.emailValue}`} className="text-gray-300 hover:text-white">
                {footer.emailValue}
              </a>
            </p>
            <p>
              <span className="font-semibold">{footer.phoneLabel}:</span>{' '}
              <a href={`tel:${footer.phoneValue}`} className="text-gray-300 hover:text-white">
                {footer.phoneValue}
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footer.stayConnectedTitle}</h3>
            <p className="text-gray-400 mb-4">{footer.stayConnectedBody}</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {socialLinks.map(({ href, Icon }) => (
                <a key={href} href={href} className="text-gray-400 hover:text-white">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} {footer.rights}
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white">
              {footer.privacy}
            </Link>
            <Link href="#" className="hover:text-white">
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
