'use client';

// src/components/Hero.tsx
import Link from 'next/link';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { useTranslations } from '@/context/LanguageContext';

export const Hero = () => {
  const { hero } = useTranslations();

  return (
    <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero-background.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[70vh]">
        <div className="max-w-3xl py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {hero.description}
          </p>
          <Link href="/track">
            <button className="flex items-center gap-3 bg-somali-blue text-white font-bold text-xl px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>{hero.cta}</span>
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
