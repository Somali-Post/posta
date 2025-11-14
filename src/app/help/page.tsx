// src/app/help/page.tsx

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AccordionItem } from '@/components/AccordionItem';

const HelpPage = () => {
  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero
          title="Help & Support Center"
          subtitle="Have questions? We're here to help. Find answers to common questions below or get in touch with our team."
        />

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* --- FAQ Section --- */}
            <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-dark-text mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {/* Tracking Questions */}
                <h3 className="text-xl font-semibold text-somali-blue pt-4">Tracking</h3>
                <AccordionItem question="How do I track my item?">
                  You can track your item by entering the 13-digit tracking number on our{' '}
                  <a href="/track" className="text-somali-blue font-semibold underline">
                    Track page
                  </a>
                  . This will show you the latest updates on your shipment's journey.
                </AccordionItem>
                <AccordionItem question="My tracking number says 'Not Found'. What does this mean?">
                  This usually means the item has just been posted and has not yet been scanned into the international postal system. Please check again in 24-48 hours. If the problem persists, please contact the sender to verify the tracking number.
                </AccordionItem>

                {/* Collection Questions */}
                <h3 className="text-xl font-semibold text-somali-blue pt-4">Parcel Collection</h3>
                <AccordionItem question="How will I know when my parcel is ready for collection?">
                  We will send an SMS or email notification to you as soon as your item has been processed at the General Post Office (GPO) and is ready for you to pick up.
                </AccordionItem>
                <AccordionItem question="What do I need to bring to collect my parcel?">
                  To collect your item, you must bring a valid National Identification (NIRA) ID card, the tracking number, and the notification message you received from us.
                </AccordionItem>
                <AccordionItem question="Can someone else collect my parcel for me?">
                  Yes, but they must bring their own NIRA ID card, a signed letter of authorization from you, and a copy of your NIRA ID card.
                </AccordionItem>

                {/* General Questions */}
                <h3 className="text-xl font-semibold text-somali-blue pt-4">General</h3>
                <AccordionItem question="Do you handle outbound (international) mail?">
                  Currently, we only handle inbound mail and parcels. Outbound services are planned for the near future. Please check our website for updates.
                </AccordionItem>
              </div>
            </div>

            {/* --- Contact Information Section --- */}
            <aside className="w-full lg:w-1/3">
              <div className="sticky top-28 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-dark-text mb-6">Contact Information</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">Address</h3>
                    <p className="text-lg text-gray-800">Jamhuuriya Road, Boondheere District, Muqdisho, Somalia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">Email</h3>
                    <p className="text-lg text-somali-blue">posta@moct.gov.so</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">Phone</h3>
                    <p className="text-lg text-gray-800">252-611003239</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 uppercase text-sm">Opening Hours</h3>
                    <ul className="text-lg text-gray-800">
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
