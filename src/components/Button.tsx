// src/components/Button.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Button = ({ href, children, className = '' }: ButtonProps) => {
  return (
    <Link href={href}>
      <button
        className={`
        flex items-center gap-2 
        mx-auto  // --- THE FIX: This now correctly centers the button in all cases ---
        bg-brand-dark-blue text-white font-bold text-lg 
        px-8 py-3 rounded-lg 
        shadow-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:bg-blue-900
        ${className}
      `}
      >
        {children}
      </button>
    </Link>
  );
};
