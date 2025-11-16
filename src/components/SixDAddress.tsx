'use client';

// src/components/SixDAddress.tsx
import Image from 'next/image';
import { Button } from './Button';
import { useTranslations } from '@/context/LanguageContext';

export const SixDAddress = () => {
  const { sixDAddress } = useTranslations();

  return (
    // --- THE FIX: Increased vertical padding to py-28 to match other sections ---
    <section className="relative py-28 bg-dark-text overflow-hidden">
      <Image
        src="/images/6d-address.png"
        alt="Digital 6D Address visualization"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* --- THE FIX: Increased margin-bottom from mb-4 to mb-6 --- */}
        <h2 className="text-4xl font-bold mb-6">
          {sixDAddress.heading}
        </h2>
        {/* --- THE FIX: Increased margin-bottom from mb-8 to mb-10 --- */}
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          {sixDAddress.body}
        </p>
        <Button href="/#"> {/* Update href when the page exists */}
          {sixDAddress.cta}
        </Button>
      </div>
    </section>
  );
};
