'use client';

import { Button } from './Button';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { useTranslations } from '@/context/LanguageContext';

export const ReceivingServiceSection = () => {
  const { receivingSection } = useTranslations();

  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-brand-dark-blue mb-6">
          {receivingSection.heading}
        </h2>
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
