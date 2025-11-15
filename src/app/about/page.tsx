// src/app/about/page.tsx

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';

const AboutPage = () => {
  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero
          title="From Collapse to Comeback"
          subtitle="This is the story of the Somali National Postal Service: A foundation built on a proud legacy, driven by a vision for the future."
        />

        {/* --- The Story Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-dark-text">The Disaster That Shaped Us</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                "Our 'disaster' was a 34-year institutional collapse. Our recovery is a model for how to build back better—not by recreating the past, but by innovating for the future."
              </p>
            </div>

            {/* --- Timeline --- */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-5xl font-bold text-somali-blue">1903</h3>
                <p className="mt-2 text-lg font-semibold">A Cornerstone Institution</p>
                <p className="text-gray-600">The Somali Post is established, connecting our nation with over 100 outlets and serving as a lifeline for generations.</p>
              </div>
              <div className="p-6">
                <h3 className="text-5xl font-bold text-red-600">1991</h3>
                <p className="mt-2 text-lg font-semibold">Complete Operational Collapse</p>
                <p className="text-gray-600">All services cease. An entire generation grows up isolated from the global postal network, losing critical infrastructure and institutional memory.</p>
              </div>
              <div className="p-6">
                <h3 className="text-5xl font-bold text-green-600">2025</h3>
                <p className="mt-2 text-lg font-semibold">A Digital-First Rebirth</p>
                <p className="text-gray-600">Full international connectivity is restored with modern, digital-first infrastructure, leapfrogging legacy models for a new era.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Mission & Vision Section --- */}
        <section className="py-20 bg-somali-blue text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h3 className="text-xl uppercase tracking-wider">Our Vision</h3>
            <h2 className="text-5xl font-bold mt-2">Connecting Communities, Powering Progress.</h2>
            <h3 className="text-xl uppercase tracking-wider mt-12">Our Mission</h3>
            <p className="text-2xl mt-2">
              To develop a future-proof postal ecosystem that harnesses the power of the private sector, acting as a national conduit to link Somalia to the world.
            </p>
          </div>
        </section>

        {/* --- Strategic Pillars Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark-text">Our Strategic Blueprint</h2>
              <p className="text-lg text-gray-600 mt-2">Our transformation is guided by the government-approved National Postal Sector Policy.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-xl text-somali-blue">Legal & Regulatory Framework</h3>
                <p className="text-gray-700 mt-2">Establishing clear laws to govern postal operations and protect consumer rights.</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-xl text-somali-blue">The Role of the SNPS</h3>
                <p className="text-gray-700 mt-2">Defining our mission as the exclusive International Gateway and a Domestic Facilitator.</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-xl text-somali-blue">Universal Access</h3>
                <p className="text-gray-700 mt-2">Ensuring every Somali citizen can access postal services, regardless of location.</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-xl text-somali-blue">The Role of the Private Sector</h3>
                <p className="text-gray-700 mt-2">Creating frameworks for collaboration with private delivery companies to foster innovation.</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-xl text-somali-blue">Customer Choice</h3>
                <p className="text-gray-700 mt-2">Empowering citizens with options and ensuring competitive, quality service delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Achievements "By the Numbers" Section --- */}
        <section className="py-20 bg-light-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-dark-text mb-8">From Zero to Operational in Record Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <p className="text-6xl font-bold text-somali-blue">34</p>
                <p className="text-xl font-semibold">Years Offline</p>
                <p className="text-gray-600">Complete institutional hiatus overcome.</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-somali-blue">$1.8M</p>
                <p className="text-xl font-semibold">Debt Cleared</p>
                <p className="text-gray-600">UPU confidence restored, a landmark achievement.</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-somali-blue">1</p>
                <p className="text-xl font-semibold">IMPC Active</p>
                <p className="text-gray-600">Full international connectivity re-established.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
