'use client';

// src/app/services/receiving/page.tsx
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useTranslations } from '@/context/LanguageContext';
import { GlobeIcon } from '@/components/icons/GlobeIcon';
import { LockIcon } from '@/components/icons/LockIcon';
import { KeyIcon } from '@/components/icons/KeyIcon';
import { BuildingIcon } from '@/components/icons/BuildingIcon';
import { Button } from '@/components/Button';

const hours = [
  { label: 'Saturday - Wednesday', value: '8:30 AM - 4:30 PM' },
  { label: 'Thursday', value: '8:30 AM - 2:00 PM (Closes early)' },
  { label: 'Friday', value: 'Closed' },
];

const ReceivingPage = () => {
  const { services, serviceSidebar, nav } = useTranslations();
  const copy = services.receiving;

  const heroTitle = 'International Mail & Parcels';
  const heroSubtitle =
    "Your reliable connection to the world. Here's everything you need to know about receiving items from abroad and our upcoming outbound services.";

  return (
    <div className="bg-light-gray min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-blue via-somali-blue to-[#e7f0ff] text-white">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,#fff,transparent_35%)]" />
          <div className="container mx-auto px-4 py-16 sm:py-20">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm uppercase tracking-[0.25em] text-white/80">{serviceSidebar.receiving}</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{heroTitle}</h1>
              <p className="text-lg md:text-xl text-white/85 max-w-3xl">{heroSubtitle}</p>
              <div className="flex flex-wrap gap-3">
                {copy.steps.map((step) => (
                  <span
                    key={step.title}
                    className="bg-white/15 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
                  >
                    {step.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 -mt-12 pb-16">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-dark-text mb-6">{copy.processTitle}</h2>
                <div className="space-y-6">
                  {copy.steps.map((step, index) => {
                    const icons = [GlobeIcon, LockIcon, KeyIcon];
                    const Icon = icons[index % icons.length];
                    const isLast = index === copy.steps.length - 1;
                    return (
                      <div key={step.title} className="relative pl-14">
                        {!isLast && <span className="absolute left-6 top-10 h-full w-px bg-border-gray" />}
                        <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-somali-blue/10 flex items-center justify-center text-somali-blue">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="bg-light-gray/40 border border-border-gray rounded-xl p-4 shadow-sm">
                          <h3 className="text-lg font-semibold text-dark-text">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-brand-dark-blue/10 space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-brand-dark-blue/70 font-semibold">Coming Soon</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark-blue">
                  Coming Soon: Outbound Services
                </h2>
                <p className="text-gray-700 text-lg">
                  Starting next year, you will be able to send letters and parcels to any country in the world using our
                  modern, convenient, fully-tracked services.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-light-gray/40 border border-border-gray rounded-xl h-full">
                    <h3 className="font-semibold text-dark-text text-lg">Digital-First Customs</h3>
                    <p className="text-gray-700 mt-2">
                      Faster, more accurate customs clearance using the UPU&apos;s modern Customs Declaration System (CDS).
                    </p>
                  </div>
                  <div className="p-4 bg-light-gray/40 border border-border-gray rounded-xl h-full">
                    <h3 className="font-semibold text-dark-text text-lg">RUG PUDO Drop-Offs</h3>
                    <p className="text-gray-700 mt-2">
                      Send your mail from our nationwide network of trusted RUG PUDO partner locations.
                    </p>
                  </div>
                  <div className="p-4 bg-light-gray/40 border border-border-gray rounded-xl h-full">
                    <h3 className="font-semibold text-dark-text text-lg">Full International Tracking</h3>
                    <p className="text-gray-700 mt-2">
                      Track your parcel from your local drop-off point all the way to its final international destination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-somali-blue/10">
                  <h3 className="text-xl font-bold text-dark-text mb-3">{copy.whatToBringTitle}</h3>
                  <p className="text-gray-700 mb-4">{copy.whatToBringBody}</p>
                  <ul className="space-y-3">
                    {copy.bringList.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-somali-blue" />
                        <span className="text-dark-text font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-brand-dark-blue/10 space-y-4">
                  <h3 className="text-xl font-bold text-dark-text">{copy.locationTitle}</h3>
                  <p className="text-gray-700">{copy.locationBody}</p>
                  <div className="flex items-start gap-3">
                    <BuildingIcon className="w-6 h-6 text-brand-dark-blue mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">{copy.addressLabel}</p>
                      <p className="text-dark-text font-semibold">{copy.addressValue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LockIcon className="w-6 h-6 text-brand-dark-blue mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">{copy.hoursLabel}</p>
                      <ul className="text-dark-text font-semibold space-y-1">
                        {hours.map((entry) => (
                          <li key={entry.label}>
                            <span className="font-semibold">{entry.label}:</span> {entry.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border-gray">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">{serviceSidebar.title}</p>
                <h3 className="text-2xl font-bold text-dark-text mb-3">{copy.heroTitle}</h3>
                <p className="text-gray-700 mb-6">{serviceSidebar.needHelpBody}</p>
                <Button href="/help">{serviceSidebar.contactButton}</Button>
              </div>
              <div className="bg-brand-dark-blue text-white rounded-2xl shadow-lg p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <GlobeIcon className="w-6 h-6" />
                  <p className="text-lg font-semibold">{serviceSidebar.receiving}</p>
                </div>
                <div className="flex items-start gap-3 text-white/90">
                  <BuildingIcon className="w-6 h-6 mt-1" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">{copy.addressLabel}</p>
                    <p className="font-semibold">{copy.addressValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-white/90">
                  <KeyIcon className="w-6 h-6 mt-1" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">{copy.hoursLabel}</p>
                    <ul className="space-y-1">
                      {hours.map((entry) => (
                        <li key={entry.label} className="font-semibold">
                          <span className="font-semibold">{entry.label}:</span> {entry.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href="/track" className="inline-flex items-center gap-2 text-white font-semibold hover:underline">
                  {nav.track}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReceivingPage;
