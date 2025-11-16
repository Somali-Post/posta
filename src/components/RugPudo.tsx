'use client';

// src/components/RugPudo.tsx
import Image from 'next/image';
import { Button } from './Button';
import { useTranslations } from '@/context/LanguageContext';

export const RugPudo = () => {
  const { rugPudo } = useTranslations();

  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 items-center">
        {/* --- THE FIX: Elevated the image with padding and shadow --- */}
        <div className="flex items-center justify-center h-[60vh] lg:h-[60vh] w-full p-6 lg:p-10">
          <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-white">
            <Image
              src="/images/pudo-point.png"
              alt="A customer at a RUG PUDO point"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        
        {/* --- THE FIX: Increased padding from p-12 to p-20 for more breathing room --- */}
        <div className="p-16 sm:p-20 text-center lg:text-left">
          {/* --- THE FIX: Increased margin-bottom from mb-4 to mb-6 --- */}
          <h2 className="text-4xl font-bold text-brand-dark-blue mb-6">
            {rugPudo.heading}
          </h2>
          {/* --- THE FIX: Increased margin-bottom from mb-8 to mb-10 --- */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {rugPudo.body}
          </p>
          <Button href="/#"> {/* Update href when the page exists */}
            {rugPudo.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
