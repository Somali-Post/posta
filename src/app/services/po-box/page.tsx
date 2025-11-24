"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { useTranslations } from '@/context/LanguageContext';

const POBoxPage = () => {
  const { services } = useTranslations();
  const poBox = services.poBox;

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={poBox.heroTitle} subtitle={poBox.heroSubtitle} />

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBox.whyTitle}</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {poBox.cards.map((card) => (
                    <div key={card.title}>
                      <h3 className="font-semibold text-xl text-dark-text">{card.title}</h3>
                      <p className="text-gray-600 mt-1">{card.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBox.howTitle}</h2>
                <div className="space-y-6">
                  {poBox.steps.map((step, index) => (
                    <div key={step.title} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-dark-blue text-white font-bold rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-dark-text">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-dark-blue">
                <h2 className="text-2xl font-bold text-dark-text mb-4">{poBox.pricing.title}</h2>
                <div className="space-y-4">
                  {poBox.pricing.plans.map((plan) => (
                    <div key={plan.label} className="p-4 border rounded-lg text-center">
                      <p className="font-bold text-lg text-dark-text">{plan.label}</p>
                      <p className="text-2xl font-bold text-brand-dark-blue">
                        {plan.price} <span className="text-base font-normal text-gray-500">{plan.suffix}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">{poBox.pricing.note}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-dark-text mb-4">{poBox.visit.title}</h2>
                <p className="text-gray-700 font-semibold">{poBox.visit.officeName}</p>
                <p className="text-gray-600">{poBox.visit.address}</p>
                <div className="mt-4 border-t pt-4">
                  <h3 className="font-semibold text-gray-700">{poBox.visit.hoursTitle}</h3>
                  <ul className="text-gray-600">
                    {poBox.visit.hours.map((hour) => (
                      <li key={hour.label}>
                        <strong>{hour.label}:</strong> {hour.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-dark-blue text-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold mb-2">{poBox.portal.title}</h2>
                <p className="opacity-90">{poBox.portal.body}</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default POBoxPage;
