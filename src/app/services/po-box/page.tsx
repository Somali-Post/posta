import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { useTranslations } from '@/context/LanguageContext';

const POBoxPage = () => {
  const { services, serviceSidebar } = useTranslations();
  const poBox = services.poBox;

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={poBox.heroTitle} subtitle={poBox.heroSubtitle} />

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-3 space-y-10">
              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBox.whyTitle}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {poBox.cards.map((card) => (
                    <div key={card.title} className="p-4 border border-border-gray rounded-lg">
                      <h3 className="font-semibold text-lg text-dark-text">{card.title}</h3>
                      <p className="text-gray-600 mt-2">{card.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">{poBox.howTitle}</h2>
                <ol className="space-y-4">
                  {poBox.steps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark-blue text-white font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">{poBox.pricingTitle}</h2>
                <p className="text-gray-700">{poBox.pricingBody}</p>
              </section>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-dark-blue">
                <h2 className="text-2xl font-bold text-dark-text mb-4">{serviceSidebar.visitTitle}</h2>
                <p className="text-gray-700 mb-4">{serviceSidebar.visitBody}</p>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <p className="font-semibold">{serviceSidebar.locationLabel}</p>
                    <p className="text-gray-600">{serviceSidebar.hoursLabel}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {poBox.heroSubtitle}
                  </p>
                </div>
              </div>

              <div className="bg-brand-dark-blue text-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold mb-2">{serviceSidebar.helpLinkLabel}</h2>
                <p className="opacity-90 mb-4">{poBox.pricingBody}</p>
                <Link
                  href="/help"
                  className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-2 font-semibold text-white hover:bg-white/20 transition"
                >
                  {serviceSidebar.helpLinkLabel}
                </Link>
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
