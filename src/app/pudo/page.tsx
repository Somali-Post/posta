"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AccordionItem } from '@/components/AccordionItem';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslations } from '@/context/LanguageContext';
import type { TranslationContent } from '@/lib/translations';

type PudoFormContent = TranslationContent['pudo']['form'];

const InterestForm = ({ formText }: { formText: PudoFormContent }) => {
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState<string | undefined>();
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !ownerName || !phone || !location) {
      setStatus('error');
      setMessage(formText.missingFields);
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch('/api/register-pudo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, ownerName, phone, location }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || formText.errorMessage);
      setStatus('success');
      setMessage(result.message ?? '');
    } catch (err: unknown) {
      setStatus('error');
      const errorMessage = err instanceof Error ? err.message : formText.errorMessage;
      setMessage(errorMessage);
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-green-100 text-green-800 rounded-lg text-center">
        <h3 className="font-bold text-2xl">{formText.successTitle}</h3>
        {message && <p className="font-semibold mt-2">{message}</p>}
        <p className="mt-2">{formText.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
            {formText.businessName}
          </label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
          />
        </div>
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
            {formText.ownerName}
          </label>
          <input
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="phone-input-container">
          <label className="block text-sm font-medium text-gray-700 mb-1">{formText.phone}</label>
          <PhoneInput international defaultCountry="SO" value={phone} onChange={setPhone} required />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            {formText.location}
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400"
      >
        {status === 'loading' ? formText.submittingLabel : formText.submitLabel}
      </button>
      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-800 rounded-md text-center">
          {message || formText.errorMessage}
        </div>
      )}
    </form>
  );
};

const PudoPage = () => {
  const { pudo } = useTranslations();

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <ServicePageHero title={pudo.heroTitle} subtitle={pudo.heroSubtitle} />

        <section className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark-blue">{pudo.ecosystemTitle}</h2>
              <p className="text-lg text-gray-600 mt-2">{pudo.ecosystemSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pudo.ecosystemCards.map((card) => (
                <div key={card.title} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-2xl text-brand-dark-blue">{card.title}</h3>
                  <p className="mt-2 text-gray-700">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="register-interest" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark-blue">{pudo.interestTitle}</h2>
              <p className="text-lg text-gray-600 mt-2">{pudo.interestSubtitle}</p>
            </div>
            <InterestForm formText={pudo.form} />
          </div>
        </section>

        <section className="py-20 bg-light-gray">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark-blue">{pudo.faqTitle}</h2>
            </div>
            {pudo.faqs.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PudoPage;
