'use client';

// src/app/services/po-box/page.tsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { ServiceSidebar } from '@/components/ServiceSidebar'; // Import the new sidebar
import { useTranslations } from '@/context/LanguageContext';

const POBoxPage = () => {
  const { services } = useTranslations();
  const copy = services.poBox;

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="w-full lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-dark-text mb-6">{copy.whyTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {copy.cards.map((card) => (
                  <div key={card.title} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-somali-blue">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-dark-text mb-6">{copy.howTitle}</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                {copy.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-dark-text mb-4">{copy.pricingTitle}</h3>
                <p className="text-gray-700">{copy.pricingBody}</p>
              </div>
            </div>
            {/* Sidebar */}
            <ServiceSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default POBoxPage;
