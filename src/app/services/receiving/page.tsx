'use client';

// src/app/services/receiving/page.tsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { ServiceSidebar } from '@/components/ServiceSidebar'; // Import the new sidebar
import { useTranslations } from '@/context/LanguageContext';

const ReceivingPage = () => {
  const { services } = useTranslations();
  const copy = services.receiving;

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="w-full lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-dark-text mb-6">{copy.processTitle}</h2>
              <div className="space-y-6">
                {copy.steps.map((step, index) => (
                  <div key={step.title} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-blue text-white font-bold rounded-full flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-blue-50 border-l-4 border-somali-blue rounded-r-lg">
                <h3 className="text-2xl font-bold text-dark-text mb-4">{copy.whatToBringTitle}</h3>
                <p className="text-gray-700 mb-4">{copy.whatToBringBody}</p>
                <ul className="list-disc list-inside space-y-2">
                  {copy.bringList.map((item) => (
                    <li key={item} className="font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-dark-text mb-4">{copy.locationTitle}</h3>
                <p className="text-gray-700">
                  {copy.locationBody}
                  <br />
                  <strong>{copy.addressLabel}:</strong> {copy.addressValue}
                  <br />
                  <strong>{copy.hoursLabel}:</strong> {copy.hoursValue}
                </p>
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
export default ReceivingPage;
