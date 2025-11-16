'use client';

// src/components/layout/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon } from '../icons/FacebookIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { LinkedInIcon } from '../icons/LinkedInIcon';

export const Footer = () => {
  return (
    // We use a very dark blue/charcoal for the background
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/images/somali-post-logo.png" alt="Somali Post Logo" width={50} height={50} />
              <span className="text-xl font-bold">Posta.so</span>
            </Link>
            <p className="text-gray-400">
              The Somali National Postal Service. Reconnecting Somalia to the world with modern, reliable, and digital-first postal solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              <Link href="/services/receiving" className="text-gray-400 hover:text-white">Services</Link>
              <Link href="/services/po-box" className="text-gray-400 hover:text-white">P.O. Box</Link>
              <Link href="/pudo" className="text-gray-400 hover:text-white">RUG PUDO Network</Link>
              <Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-400">
              General Post Office (GPO)<br/>
              Jamhuuriya Road, Boondheere District<br/>
              Mogadishu, Somalia
            </p>
            <p className="mt-4"><a href="mailto:posta@moct.gov.so" className="text-gray-400 hover:text-white">posta@moct.gov.so</a></p>
            <p><a href="tel:252611003239" className="text-gray-400 hover:text-white">252-611003239</a></p>
          </div>

          {/* Column 4: Stay Connected / Socials */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Follow us on social media for the latest news and updates.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black bg-opacity-20">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Somali National Postal Service. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
