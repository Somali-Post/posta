import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import Image from 'next/image';

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
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Your Secure Address in Somalia</h2>
              <p className="text-lg text-gray-700 mb-6">
                A P.O. Box from the Somali National Postal Service is the most reliable and secure way to manage your
                personal and business mail. It provides a permanent, official address that protects your privacy and
                ensures you never miss an important delivery.
              </p>

              {/* Benefits Section */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <div>
                    <h3 className="font-semibold text-lg">Total Security & Privacy</h3>
                    <p className="text-gray-600">Keep your mail safe under lock and key and your home address confidential.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <div>
                    <h3 className="font-semibold text-lg">Permanent, Professional Address</h3>
                    <p className="text-gray-600">Your address remains the same even if you move, providing a stable, professional point of contact.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <div>
                    <h3 className="font-semibold text-lg">Reliable Notifications</h3>
                    <p className="text-gray-600">Receive timely alerts when new mail or parcels arrive for you at the GPO.</p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">Annual Rental Fees</h3>
              <div className="flex gap-4 mb-8">
                <div className="flex-1 p-4 border rounded-lg text-center">
                  <p className="font-bold text-lg">Individual</p>
                  <p className="text-2xl font-bold text-brand-dark-blue">
                    $24 <span className="text-base font-normal text-gray-500">/ year</span>
                  </p>
                </div>
                <div className="flex-1 p-4 border rounded-lg text-center">
                  <p className="font-bold text-lg">Business</p>
                  <p className="text-2xl font-bold text-brand-dark-blue">
                    $30 <span className="text-base font-normal text-gray-500">/ year</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-2 space-y-8">
              {/* How to Apply Section */}
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-dark-blue">
                <h2 className="text-2xl font-bold text-dark-text mb-4">How to Apply (In-Person)</h2>
                <p className="text-gray-700 mb-4">
                  Please visit the Customer Service desk at the General Post Office (GPO) in Mogadishu during our opening
                  hours.
                </p>
                <h3 className="text-lg font-semibold mb-2">What you will need:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>A valid National ID (NIRA) or Passport</li>
                  <li>A passport-size photo</li>
                  <li>For businesses: A copy of your Business License</li>
                </ul>
              </div>

              {/* Coming Soon Section */}
              <div className="bg-brand-dark-blue text-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold mb-2">Online Portal Coming Soon!</h2>
                <p className="opacity-90">
                  We are building a new digital platform that will allow you to register, pay for, and manage your P.O. Box
                  entirely online. Stay tuned for updates!
                </p>
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
