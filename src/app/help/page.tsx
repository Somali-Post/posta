'use client';

// src/app/help/page.tsx

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AccordionItem } from '@/components/AccordionItem';
import { useTranslations } from '@/context/LanguageContext';
import type { FaqItem } from '@/lib/translations';

const renderAnswer = (item: FaqItem) => {
  if (item.answerParts) {
    return (
      <>
        {item.answerParts[0]}
        <a href="/track" className="text-somali-blue font-semibold underline">
          {item.answerParts[1]}
        </a>
        {item.answerParts[2]}
      </>
    );
  }
  return item.answer;
};

const HelpPage = () => {
  const { help } = useTranslations();

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={help.heroTitle} subtitle={help.heroSubtitle} />

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* --- FAQ Section --- */}
            <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-dark-text mb-6">{help.faqTitle}</h2>

              <div className="space-y-4">
                {/* Tracking Questions */}
                <h3 className="text-xl font-semibold text-somali-blue pt-4">{help.sections.tracking}</h3>
                {help.faqs.tracking.map((item) => (
                  <AccordionItem key={item.question} question={item.question}>
                    {renderAnswer(item)}
                  </AccordionItem>
                ))}

                {/* Collection Questions */}
                <h3 className="text-xl font-semibold text-somali-blue pt-4">{help.sections.parcel}</h3>
                {help.faqs.parcel.map((item) => (
                  <AccordionItem key={item.question} question={item.question}>
                    {item.answer}
                  </AccordionItem>
                ))}

                {/* General Questions */}
                <h3 className="text-xl font-semibold text-somali-blue pt-4">{help.sections.general}</h3>
                {help.faqs.general.map((item) => (
                  <AccordionItem key={item.question} question={item.question}>
                    {item.answer}
                  </AccordionItem>
                ))}
              </div>
            </div>

            {/* --- Contact Information Section --- */}
            <aside className="w-full lg:w-1/3">
              <div className="sticky top-28 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-dark-text mb-6">{help.contact.title}</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">{help.contact.addressLabel}</h3>
                    <p className="text-lg text-gray-800">{help.contact.address}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">{help.contact.emailLabel}</h3>
                    <p className="text-lg text-somali-blue">{help.contact.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">{help.contact.phoneLabel}</h3>
                    <p className="text-lg text-gray-800">{help.contact.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">{help.contact.hoursLabel}</h3>
                    <ul className="text-lg text-gray-800 space-y-1">
                      {help.contact.hours.map((hour) => (
                        <li key={hour.label}>
                          <strong>{hour.label}:</strong> {hour.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpPage;
