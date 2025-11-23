"use client";

import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { Button } from './Button';
import { useTranslations } from '@/context/LanguageContext';

export const Hero = () => {
  const { hero } = useTranslations();

  return (
    <section
      className="relative bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-background.png')", backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[70vh]">
        <div className="w-full max-w-3xl py-24 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">{hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{hero.description}</p>
          <Button href="/track" className="mx-auto md:mx-0">
            <span>{hero.cta}</span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
