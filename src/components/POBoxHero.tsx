"use client";

// src/components/POBoxHero.tsx
import Image from 'next/image';
import { Button } from './Button';
import { LockIcon } from './icons/LockIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { BuildingIcon } from './icons/BuildingIcon';
import { useTranslations } from '@/context/LanguageContext';

export const POBoxHero = () => {
  const { poBoxHero } = useTranslations();

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/images/po-box.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10 bg-white text-dark-text w-11/12 max-w-2xl rounded-lg shadow-2xl overflow-hidden">
        <Image
          src="/images/somali-post-logo.png"
          alt="Somali Post Watermark"
          width={120}
          height={120}
          className="absolute bottom-4 right-4 opacity-5 pointer-events-none"
        />

        <div className="p-8 sm:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-brand-dark-blue leading-tight">
            {poBoxHero.title}
          </h2>
          <p className="text-xl mt-4 mb-8 max-w-lg mx-auto text-gray-700">
            {poBoxHero.subtitleLines.join(' ')}
          </p>
          <Button href="/services/po-box">{poBoxHero.button}</Button>
        </div>

        <div className="border-t border-border-gray bg-light-gray grid grid-cols-3 gap-4 text-center p-4">
          {[LockIcon, GlobeIcon, BuildingIcon].map((Icon, index) => (
            <div key={poBoxHero.badges[index]} className="flex items-center justify-center gap-2">
              <Icon className="w-6 h-6 text-brand-dark-blue" />
              <span className="font-medium text-sm">{poBoxHero.badges[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
