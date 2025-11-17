"use client";

// src/app/services/po-box/page.tsx
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslations } from '@/context/LanguageContext';

const POBoxPage = () => {
  const { poBoxApplication } = useTranslations();
  const [boxType, setBoxType] = useState<'Individual' | 'Business'>('Individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string | undefined>();
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setStatus('error');
      setMessage(poBoxApplication.missingFieldsMessage);
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch('/api/register-pobox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, whatsapp, boxType }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Something went wrong.');
      setStatus('success');
      setMessage(poBoxApplication.successMessage);
    } catch (err: unknown) {
      setStatus('error');
      const errorMessage = err instanceof Error ? err.message : 'Unexpected error. Please try again.';
      setMessage(errorMessage);
    }
  };

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={poBoxApplication.heroTitle} subtitle={poBoxApplication.heroSubtitle} />
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-border-gray">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBoxApplication.stepOneTitle}</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setBoxType('Individual')}
                  className={`p-4 rounded-lg border-2 text-center transition ${
                    boxType === 'Individual'
                      ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue'
                      : 'border-border-gray hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-lg">{poBoxApplication.planOptions.individualLabel}</span>
                  <br />
                  <span className="text-2xl font-bold text-brand-dark-blue">
                    {poBoxApplication.planOptions.individualPrice}
                  </span>
                  <span className="text-gray-500">{poBoxApplication.planOptions.priceSuffix}</span>
                </button>
                <button
                  onClick={() => setBoxType('Business')}
                  className={`p-4 rounded-lg border-2 text-center transition ${
                    boxType === 'Business'
                      ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue'
                      : 'border-border-gray hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-lg">{poBoxApplication.planOptions.businessLabel}</span>
                  <br />
                  <span className="text-2xl font-bold text-brand-dark-blue">
                    {poBoxApplication.planOptions.businessPrice}
                  </span>
                  <span className="text-gray-500">{poBoxApplication.planOptions.priceSuffix}</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {poBoxApplication.formFields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {poBoxApplication.formFields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                  />
                </div>
                <div className="phone-input-container">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {poBoxApplication.formFields.phone}
                  </label>
                  <PhoneInput international defaultCountry="SO" value={phone} onChange={setPhone} required />
                </div>
                <div className="phone-input-container">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {poBoxApplication.formFields.whatsapp}
                  </label>
                  <PhoneInput international defaultCountry="SO" value={whatsapp} onChange={setWhatsapp} />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? poBoxApplication.submittingLabel : poBoxApplication.submitLabel}
                </button>
              </form>
              {status === 'success' && <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">{message}</div>}
              {status === 'error' && <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">{message}</div>}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBoxApplication.stepTwoTitle}</h2>
                <p className="text-gray-700 mb-4">{poBoxApplication.stepTwoBody}</p>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-gray-600">{poBoxApplication.evcLabel}:</p>
                  <p className="text-2xl font-bold text-dark-text">{poBoxApplication.evcNumber}</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">{poBoxApplication.paymentNote}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBoxApplication.stepThreeTitle}</h2>
                <p className="text-gray-700">{poBoxApplication.stepThreeBody}</p>
              </div>

              <div className="bg-transparent pt-4">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6 text-center">
                  {poBoxApplication.testimonialsTitle}
                </h2>
                <div className="space-y-6">
                  {poBoxApplication.testimonials.map((testimonial) => (
                    <blockquote key={testimonial.author} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-dark-blue">
                      <p className="text-gray-700 italic">{testimonial.quote}</p>
                      <footer className="mt-4 flex items-center gap-4">
                        <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} className="rounded-full" />
                        <div>
                          <cite className="font-bold not-italic">{testimonial.author}</cite>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default POBoxPage;
