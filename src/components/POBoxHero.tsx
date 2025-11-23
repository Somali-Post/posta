"use client";

import Image from 'next/image';
import { Button } from './Button';
import { LockIcon } from './icons/LockIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { BuildingIcon } from './icons/BuildingIcon';
import { useTranslations } from '@/context/LanguageContext';

export const POBoxHero = () => {
  const { poBoxHero } = useTranslations();
  const { title, subtitleLines, button, badges } = poBoxHero;

  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed px-4"
      style={{ backgroundImage: "url('/images/po-box.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white text-dark-text shadow-2xl">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
          <Image src="/images/somali-post-logo.png" alt="Somali Post watermark" width={280} height={280} />
        </div>

        <div className="relative p-8 text-center sm:p-12">
          <h2 className="text-4xl font-extrabold uppercase leading-tight text-brand-dark-blue md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 mb-8 max-w-lg text-xl text-gray-700">{subtitleLines.join(' • ')}</p>
          <Button href="/services/po-box">{button}</Button>
        </div>

        <div className="grid grid-cols-1 border-t border-border-gray bg-light-gray text-center text-sm font-medium text-dark-text sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2 px-4 py-3">
            <LockIcon className="h-6 w-6 text-brand-dark-blue" />
            <span>{badges[0]}</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3">
            <GlobeIcon className="h-6 w-6 text-brand-dark-blue" />
            <span>{badges[1]}</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3">
            <BuildingIcon className="h-6 w-6 text-brand-dark-blue" />
            <span>{badges[2]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
