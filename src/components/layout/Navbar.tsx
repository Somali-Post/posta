// src/components/layout/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const navLinks = [
    { name: 'Services', href: '/#services' },
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
            Posta
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
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-gray-500 hover:text-dark-text">SO</button>
          <button className="text-dark-text font-bold">EN</button>
          <button className="text-gray-500 hover:text-dark-text">AR</button>
        </div>
      </div>
    </header>
  );
};
