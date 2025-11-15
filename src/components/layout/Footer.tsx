// src/components/layout/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-dark-text text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Posta.so</h3>
          <p className="text-gray-400">
            Reconnecting Somalia to the world after 34 years. We are building a modern, digital-first postal service for a new era.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link href="/services/receiving" className="text-gray-400 hover:text-white">Services</Link>
            <Link href="/services/po-box" className="text-gray-400 hover:text-white">P.O. Box</Link>
            <Link href="/help" className="text-gray-400 hover:text-white">Help</Link>
            <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
          </nav>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            General Post Office (GPO)<br/>
            Jamhuuriya Road, Boondheere District<br/>
            Muqdisho, Somalia
          </p>
          <p className="mt-2 text-gray-400">Email: posta@moct.gov.so</p>
          <p className="mt-2 text-gray-400">Phone: 252-611003239</p>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Somali Post. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
