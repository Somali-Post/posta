// src/components/layout/Navbar.tsx
"use client"; // Add this line to use React hooks like useState

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    // We'll handle Services separately
    { name: 'Government Directory', href: '/directory' },
    { name: 'Help', href: '/help' },
    { name: 'About Us', href: '/about' },
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
          {/* --- Services Dropdown --- */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="text-base font-medium text-dark-text hover:text-somali-blue transition-colors duration-300 flex items-center gap-1"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
              >
                <Link href="/services/receiving" className="block px-4 py-2 text-dark-text hover:bg-light-gray">
                  Receiving International Mail
                </Link>
                <Link href="/services/po-box" className="block px-4 py-2 text-dark-text hover:bg-light-gray">
                  P.O. Box Services
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-base font-medium text-dark-text hover:text-somali-blue transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & Mobile Menu Icon can go here if needed */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-gray-500 hover:text-dark-text">SO</button>
          <button className="text-dark-text font-bold">EN</button>
          <button className="text-gray-500 hover:text-dark-text">AR</button>
        </div>
      </div>
    </header>
  );
};
