'use client';

// src/components/POBoxHero.tsx
import Link from 'next/link';
import { LockIcon } from './icons/LockIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { KeyIcon } from './icons/KeyIcon';
import { useTranslations } from '@/context/LanguageContext';

export const POBoxHero = () => {
  const { poBoxHero } = useTranslations();

  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/images/po-box.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* The content card with updated styling */}
      <div className="relative z-10 bg-white text-dark-text w-11/12 max-w-2xl rounded-lg shadow-2xl border-4 border-brand-dark-blue">
        <div className="p-8 sm:p-12">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-brand-dark-blue leading-tight">
            {poBoxHero.title}
          </h2>

          {/* Sub-headline and CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xl font-semibold">
              {poBoxHero.subtitleLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < poBoxHero.subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <Link href="/services/po-box">
              <button className="bg-brand-dark-blue text-white font-bold px-8 py-3 rounded-md hover:bg-blue-900 transition-colors whitespace-nowrap">
                {poBoxHero.button}
              </button>
            </Link>
          </div>
        </div>
        
        {/* The three icons at the bottom */}
        <div className="border-t border-border-gray bg-light-gray grid grid-cols-3 gap-4 text-center p-4 rounded-b-md">
          <div className="flex items-center justify-center gap-2">
            <LockIcon className="w-6 h-6 text-brand-dark-blue" />
            <span className="font-medium text-sm">{poBoxHero.badges[0]}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <GlobeIcon className="w-6 h-6 text-brand-dark-blue" />
            <span className="font-medium text-sm">{poBoxHero.badges[1]}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <KeyIcon className="w-6 h-6 text-brand-dark-blue" />
            <span className="font-medium text-sm">{poBoxHero.badges[2]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
