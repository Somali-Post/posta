"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AccordionItem } from '@/components/AccordionItem';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useTranslations } from '@/context/LanguageContext';
import type { TranslationContent } from '@/lib/translations';

type ContactFormProps = {
  copy: TranslationContent['help']['contactForm'];
};

const ContactForm = ({ copy }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessageText] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus('success');
      setResponseMsg('');
      setName('');
      setEmail('');
      setMessageText('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setResponseMsg(copy.errorMessage);
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 bg-green-100 text-green-800 rounded-lg text-center">
        <h3 className="font-bold text-xl">{copy.successTitle}</h3>
        <p>{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {copy.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {copy.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          {copy.messageLabel}
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessageText(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400"
      >
        {status === 'loading' ? copy.submittingLabel : copy.submitLabel}
      </button>
      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-800 rounded-md text-center">{responseMsg || copy.errorMessage}</div>
      )}
    </form>
  );
};

const renderAnswer = (faq: TranslationContent['help']['faqs']['tracking'][number]) => {
  if (faq.answerParts) {
    const [before, linkText, after] = faq.answerParts;
    return (
      <span>
        {before}
        <Link href="/track" className="font-semibold underline">
          {linkText}
        </Link>
        {after}
      </span>
    );
  }
  return faq.answer ?? null;
};

const HelpPage = () => {
  const gpoPosition = { lat: 2.040212912457093, lng: 45.347156485402365 };
  const { help } = useTranslations();
  const { sections, faqs, contact, supportSection, contactForm } = help;

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={help.heroTitle} subtitle={help.heroSubtitle} />

        <div className="container mx-auto px-4 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark-blue">{help.faqTitle}</h2>
              <p className="text-lg text-gray-600 mt-2">{help.heroSubtitle}</p>
            </div>
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-x-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue pt-4 border-b pb-2">{sections.tracking}</h3>
                  {faqs.tracking.map((faq) => (
                    <AccordionItem key={faq.question} question={faq.question}>
                      {renderAnswer(faq)}
                    </AccordionItem>
                  ))}

                  <h3 className="text-xl font-semibold text-brand-dark-blue pt-6 border-b pb-2">{sections.parcel}</h3>
                  {faqs.parcel.map((faq) => (
                    <AccordionItem key={faq.question} question={faq.question}>
                      {faq.answer}
                    </AccordionItem>
                  ))}
                </div>

                <div className="space-y-4 mt-10 md:mt-0">
                  <h3 className="text-xl font-semibold text-brand-dark-blue pt-4 border-b pb-2">{sections.general}</h3>
                  {faqs.general.map((faq) => (
                    <AccordionItem key={faq.question} question={faq.question}>
                      {faq.answer}
                    </AccordionItem>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark-blue">{supportSection.title}</h2>
              <p className="text-lg text-gray-600 mt-2">{supportSection.body}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-dark-text mb-6">{supportSection.messageHeading}</h3>
                <ContactForm copy={contactForm} />
                <div className="mt-8 border-t pt-6 space-y-4">
                  <h4 className="text-lg font-semibold text-dark-text">{contact.title}</h4>
                  <div>
                    <p className="font-semibold">{contact.addressLabel}</p>
                    <p className="text-gray-600">{contact.address}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{contact.emailLabel}</p>
                    <a href={`mailto:${contact.email}`} className="text-brand-dark-blue">
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">{contact.phoneLabel}</p>
                    <a href={`tel:${contact.phone}`} className="text-brand-dark-blue">
                      {contact.phone}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">{contact.hoursLabel}</p>
                    <ul className="text-gray-600 space-y-1">
                      {contact.hours.map((hour) => (
                        <li key={hour.label}>
                          <strong>{hour.label}:</strong> {hour.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8 border-b border-border-gray">
                  <h3 className="text-2xl font-bold text-dark-text">{supportSection.visitHeading}</h3>
                  <p className="text-gray-600 mt-2">{supportSection.visitDescription}</p>
                </div>
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                  <div style={{ height: '100%', minHeight: '420px', width: '100%' }}>
                    <Map defaultCenter={gpoPosition} defaultZoom={16} mapId="posta-so-map">
                      <Marker position={gpoPosition} />
                    </Map>
                  </div>
                </APIProvider>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpPage;
