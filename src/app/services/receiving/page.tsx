// src/app/services/receiving/page.tsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { ServiceSidebar } from '@/components/ServiceSidebar'; // Import the new sidebar

const ReceivingPage = () => {
  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero
          title="Receiving International Mail & Parcels"
          subtitle="Your reliable connection to the world. Here's everything you need to know about receiving your items sent from abroad."
        />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="w-full lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-dark-text mb-6">How the Process Works</h2>
              {/* ... (rest of the content is the same) ... */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-blue text-white font-bold rounded-full flex items-center justify-center mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Item Arrives in Somalia</h3>
                    <p className="text-gray-600">
                      Your parcel arrives at the main international postal facility in Mogadishu and is processed for customs inspection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-blue text-white font-bold rounded-full flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Customs Clearance</h3>
                    <p className="text-gray-600">
                      The item is presented to Somali customs. Once cleared, it is handed over to Somali Post for final processing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-blue text-white font-bold rounded-full flex items-center justify-center mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Notification of Arrival</h3>
                    <p className="text-gray-600">
                      Once your item is ready, we will send you an SMS or email notification to let you know it's available for collection.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-blue-50 border-l-4 border-somali-blue rounded-r-lg">
                <h3 className="text-2xl font-bold text-dark-text mb-4">What to Bring for Collection</h3>
                <p className="text-gray-700 mb-4">
                  To ensure a secure and smooth pickup process, please bring the following to the General Post Office (GPO) in Mogadishu:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="font-semibold">A valid National Identification (NIRA) ID card.</li>
                  <li>Your item's tracking number.</li>
                  <li>The notification message (SMS/email) you received from us.</li>
                </ul>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-dark-text mb-4">Location & Hours</h3>
                <p className="text-gray-700">
                  All items are to be collected from the General Post Office (GPO).
                  <br />
                  <strong>Address:</strong> [Your Full GPO Address, Mogadishu, Somalia]
                  <br />
                  <strong>Hours:</strong> Saturday - Thursday, 8:00 AM - 4:00 PM
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
