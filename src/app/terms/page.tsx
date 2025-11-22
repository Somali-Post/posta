"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { useTranslations } from '@/context/LanguageContext';

const TermsPage = () => {
  const { legal } = useTranslations();
  const { terms } = legal;

  return (
    <div className="bg-light-gray min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServicePageHero title={terms.title} subtitle={terms.subtitle} />
        <div className="container mx-auto px-4 py-16 space-y-8 max-w-4xl">
          <p className="text-sm text-gray-500">{terms.lastUpdatedLabel}</p>
          {terms.sections.map((section) => (
            <section key={section.title} className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">{section.title}</h2>
              <p className="text-gray-700">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
