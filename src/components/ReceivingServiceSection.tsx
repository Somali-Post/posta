'use client';

// src/components/ReceivingServiceSection.tsx
import { Button } from './Button';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { useTranslations } from '@/context/LanguageContext';

export const ReceivingServiceSection = () => {
  const { receivingSection } = useTranslations();

  return (
    // --- THE FIX: Increased vertical padding from py-20 to py-28 for more height ---
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 text-center">
        {/* --- THE FIX: Increased margin-bottom from mb-4 to mb-6 --- */}
        <h2 className="text-4xl font-bold text-brand-dark-blue mb-6">
          {receivingSection.heading}
        </h2>
        {/* --- THE FIX: Increased margin-bottom from mb-8 to mb-10 --- */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          {receivingSection.body}
        </p>
        <Button href="/services/receiving">
          <span>{receivingSection.cta}</span>
          <ArrowRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};
