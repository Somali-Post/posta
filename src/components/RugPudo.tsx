'use client';

// src/components/RugPudo.tsx
import Image from 'next/image';
import { Button } from './Button';
import { useTranslations } from '@/context/LanguageContext';

export const RugPudo = () => {
  const { rugPudo } = useTranslations();

  return (
    <section className="bg-white pt-24 pb-16 px-4 sm:px-8">
      <div className="relative w-full h-[420px] sm:h-[520px] rounded-3xl shadow-2xl overflow-hidden mx-auto">
        <Image
          src="/images/pudo-point.png"
          alt="A customer at a RUG PUDO point"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-xl">
            {rugPudo.heading}
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed mb-10 max-w-3xl drop-shadow">
            {rugPudo.body}
          </p>
          <Button href="/pudo">{rugPudo.cta}</Button>
        </div>
      </div>
    </section>
  );
};
