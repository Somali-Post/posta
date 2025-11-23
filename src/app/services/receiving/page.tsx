"use client";

import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { useTranslations } from '@/context/LanguageContext';

const ReceivingPage = () => {
  const { services } = useTranslations();
  const receiving = services.receiving;

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={receiving.heroTitle} subtitle={receiving.heroSubtitle} />

        <AnimatedSection>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-brand-dark-blue">{receiving.processTitle}</h2>
                <p className="text-lg text-gray-600 mt-2">{receiving.heroSubtitle}</p>
              </div>

              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-8">
                  {receiving.steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="bg-white p-6 rounded-lg shadow-md flex items-start transition-transform duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-brand-dark-blue text-white font-bold rounded-full flex items-center justify-center mr-5">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}

                  <div className="bg-brand-dark-blue text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wide text-blue-100">{receiving.trackCta.eyebrow}</p>
                      <h3 className="text-xl font-semibold">{receiving.trackCta.title}</h3>
                      <p className="text-blue-50 text-sm md:text-base">{receiving.trackCta.body}</p>
                    </div>
                    <Link
                      href="/track"
                      className="inline-flex items-center gap-2 bg-white text-brand-dark-blue px-4 py-2 rounded-full text-sm font-semibold shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 active:scale-100"
                    >
                      {receiving.trackCta.button}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <aside className="lg:col-span-2 space-y-8">
                  <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-dark-blue transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-dark-text mb-4">{receiving.whatToBringTitle}</h3>
                    <p className="text-gray-600 mb-4">{receiving.whatToBringBody}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {receiving.bringList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-dark-text mb-4">{receiving.locationTitle}</h3>
                    <p className="text-gray-700 font-semibold">{receiving.locationBody}</p>
                    <p className="text-gray-600 mt-2">
                      <strong>{receiving.addressLabel}:</strong> {receiving.addressValue}
                    </p>
                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-semibold text-gray-700">{receiving.hoursLabel}</h4>
                      <p className="text-gray-600">{receiving.hoursValue}</p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 bg-brand-dark-blue text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold">{receiving.futureSection.title}</h2>
              <p className="text-xl opacity-90 mt-4 max-w-3xl mx-auto">{receiving.futureSection.body}</p>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {receiving.futureSection.cards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all p-6 rounded-lg transform hover:scale-105"
                  >
                    <h3 className="font-bold text-2xl">{card.title}</h3>
                    <p className="opacity-80 mt-2">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default ReceivingPage;
