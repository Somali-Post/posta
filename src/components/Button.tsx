// src/components/Button.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Button = ({ href, children, className = '' }: ButtonProps) => (
  <Link
    href={href}
    className={`
      inline-flex items-center gap-2
      bg-brand-dark-blue text-white font-bold text-lg
      px-8 py-3 rounded-lg shadow-lg
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:bg-blue-900
      ${className}
    `}
  >
    {children}
  </Link>
);
