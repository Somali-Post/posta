'use client';

// src/app/about/page.tsx

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { useTranslations } from '@/context/LanguageContext';

const AboutPage = () => {
  const { about } = useTranslations();

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={about.heroTitle} subtitle={about.heroSubtitle} />

        {/* --- The Story Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-dark-text">{about.disasterTitle}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                {about.disasterQuote}
              </p>
            </div>

            {/* --- Timeline --- */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              {about.timeline.map((item, index) => (
                <div key={item.year} className="p-6">
                  <h3
                    className={`text-5xl font-bold ${
                      index === 1 ? 'text-red-600' : index === 2 ? 'text-green-600' : 'text-somali-blue'
                    }`}
                  >
                    {item.year}
                  </h3>
                  <p className="mt-2 text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Mission & Vision Section --- */}
        <section className="py-20 bg-somali-blue text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h3 className="text-xl uppercase tracking-wider">{about.missionVision.visionLabel}</h3>
            <h2 className="text-5xl font-bold mt-2">{about.missionVision.visionStatement}</h2>
            <h3 className="text-xl uppercase tracking-wider mt-12">{about.missionVision.missionLabel}</h3>
            <p className="text-2xl mt-2">
              {about.missionVision.missionStatement}
            </p>
          </div>
        </section>

        {/* --- Strategic Pillars Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark-text">{about.blueprint.title}</h2>
              <p className="text-lg text-gray-600 mt-2">{about.blueprint.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {about.blueprint.pillars.map((pillar) => (
                <div key={pillar.title} className="bg-light-gray p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-somali-blue">{pillar.title}</h3>
                  <p className="text-gray-700 mt-2">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Achievements "By the Numbers" Section --- */}
        <section className="py-20 bg-light-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-dark-text mb-8">{about.achievements.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {about.achievements.cards.map((card) => (
                <div key={card.label}>
                  <p className="text-6xl font-bold text-somali-blue">{card.value}</p>
                  <p className="text-xl font-semibold">{card.label}</p>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
