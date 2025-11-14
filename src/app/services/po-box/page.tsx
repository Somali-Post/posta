// src/app/services/po-box/page.tsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { ServiceSidebar } from '@/components/ServiceSidebar'; // Import the new sidebar

const POBoxPage = () => {
  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero
          title="Secure P.O. Box Rentals"
          subtitle="Get a private, permanent, and professional mailing address at the heart of Mogadishu."
        />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="w-full lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-dark-text mb-6">Why Rent a P.O. Box?</h2>
              {/* ... (rest of the content is the same) ... */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-somali-blue">Security & Privacy</h3>
                  <p className="text-gray-600">
                    Keep your mail safe in a locked box accessible only by you, protecting your personal information.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-somali-blue">Permanent Address</h3>
                  <p className="text-gray-600">
                    Your P.O. Box address remains the same even if you move, providing stability for your contacts.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-somali-blue">Reliable Notifications</h3>
                  <p className="text-gray-600">
                    Receive timely notifications when new mail or parcels arrive in your P.O. Box.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-somali-blue">Professional Image</h3>
                  <p className="text-gray-600">
                    A P.O. Box provides a professional and established address for your business or organization.
                  </p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-dark-text mb-6">How to Register</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>Visit the Customer Service desk at the General Post Office (GPO) in Mogadishu.</li>
                <li>Request and complete a P.O. Box application form.</li>
                <li>Provide a valid National Identification (NIRA) ID card for verification.</li>
                <li>Pay the annual rental fee for your chosen box size.</li>
                <li>Receive your P.O. Box number and keys!</li>
              </ol>
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-dark-text mb-4">Pricing & Sizes</h3>
                <p className="text-gray-700">
                  We offer a range of P.O. Box sizes to fit your needs. Please visit the GPO for current availability and annual rental fees.
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
export default POBoxPage;
