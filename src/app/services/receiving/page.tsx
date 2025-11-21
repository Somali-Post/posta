import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';

const ReceivingPage = () => {
  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero
          title="International Mail & Parcels"
          subtitle="Your reliable connection to the world. Here's everything you need to know about receiving items and our upcoming sending services."
        />

        <AnimatedSection>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                {/* --- THE FIX (Part 1): Customer-Friendly Language --- */}
                <h2 className="text-4xl font-bold text-brand-dark-blue">Receiving from Abroad</h2>
                <p className="text-lg text-gray-600 mt-2">Follow these simple steps to receive your international items.</p>
              </div>

              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-start transition-transform duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-dark-blue text-white font-bold rounded-full flex items-center justify-center mr-5">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Item Arrives in Somalia</h3>
                      <p className="text-gray-600 mt-1">Your parcel arrives at our main international postal facility in Mogadishu and is prepared for customs inspection.</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-start transition-transform duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-dark-blue text-white font-bold rounded-full flex items-center justify-center mr-5">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Customs Clearance</h3>
                      <p className="text-gray-600 mt-1">The item is presented to Somali customs. Once cleared, it is handed over to Somali Post for final processing.</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-start transition-transform duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-dark-blue text-white font-bold rounded-full flex items-center justify-center mr-5">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Notification & Collection</h3>
                      <p className="text-gray-600 mt-1">
                        Once your item is ready, we will notify you via SMS or email. You can then collect it from the GPO.
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-dark-blue text-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wide text-blue-100">Track updates</p>
                      <h3 className="text-xl font-semibold">Track your item anytime</h3>
                      <p className="text-blue-50 text-sm md:text-base">
                        Real-time status from arrival to pickup—peace of mind with instant updates.
                      </p>
                    </div>
                    <Link
                      href="/track"
                      className="inline-flex items-center gap-2 bg-white text-brand-dark-blue px-4 py-2 rounded-full text-sm font-semibold shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 active:scale-100"
                    >
                      Track item
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <aside className="lg:col-span-2 space-y-8">
                  <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-dark-blue transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-dark-text mb-4">What to Bring for Collection</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li className="font-semibold">Valid National ID (NIRA) or Passport</li>
                      <li>Your item's tracking number</li>
                      <li>The notification message (SMS/email)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-dark-text mb-4">Location & Hours</h3>
                    <p className="text-gray-700 font-semibold">General Post Office (GPO)</p>
                    <p className="text-gray-600">Jamhuuriya Road, Boondheere District, Mogadishu</p>
                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-semibold text-gray-700">Opening Hours:</h4>
                      <ul className="text-gray-600">
                        <li>
                          <strong>Saturday - Wednesday:</strong> 8:30 AM - 4:30 PM
                        </li>
                        <li>
                          <strong>Thursday:</strong> 8:30 AM - 2:00 PM
                        </li>
                        <li>
                          <strong>Friday:</strong> Closed
                        </li>
                      </ul>
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
              {/* --- THE FIX (Part 1): Customer-Friendly Language --- */}
              <h2 className="text-4xl font-bold">Coming in 2026: Sending to the World</h2>
              <p className="text-xl opacity-90 mt-4 max-w-3xl mx-auto">
                Get ready to connect with the world. Our new outbound service will allow you to send letters and parcels from your local neighborhood to any destination globally.
              </p>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {/* --- THE FIX (Part 3): Visually Harmonious "Frosted Glass" Cards --- */}
                <div className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all p-6 rounded-lg transform hover:scale-105">
                  <h3 className="font-bold text-2xl">Digital-First Customs</h3>
                  <p className="opacity-80 mt-2">Fast, accurate customs clearance using the modern UPU Customs Declaration System (CDS).</p>
                </div>
                <div className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all p-6 rounded-lg transform hover:scale-105">
                  <h3 className="font-bold text-2xl">Convenient Drop-Offs</h3>
                  <p className="opacity-80 mt-2">Send your mail from our entire nationwide network of RUG PUDO partner locations.</p>
                </div>
                <div className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all p-6 rounded-lg transform hover:scale-105">
                  <h3 className="font-bold text-2xl">Full International Tracking</h3>
                  <p className="opacity-80 mt-2">Track your parcel from your local drop-off point to its final destination, right on our website.</p>
                </div>
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
