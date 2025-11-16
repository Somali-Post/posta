"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AccordionItem } from '@/components/AccordionItem';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// --- This is the new Interest Form Component ---
const InterestForm = () => {
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState<string | undefined>();
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !ownerName || !phone || !location) {
        setStatus('error');
        setMessage('Please fill in all fields.');
        return;
    }
    setStatus('loading');
    try {
        const response = await fetch('/api/register-pudo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ businessName, ownerName, phone, location }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        setStatus('success');
        setMessage(result.message);
    } catch (err: any) {
        setStatus('error');
        setMessage(err.message);
    }
  };

  if (status === 'success') {
    return <div className="p-8 bg-green-100 text-green-800 rounded-lg text-center"><h3 className="font-bold text-2xl">{message}</h3><p>You are now on our priority list for the official launch.</p></div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label><input type="text" id="businessName" value={businessName} onChange={e => setBusinessName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"/></div>
        <div><label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Your Full Name</label><input type="text" id="ownerName" value={ownerName} onChange={e => setOwnerName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"/></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="phone-input-container"><label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label><PhoneInput international defaultCountry="SO" value={phone} onChange={setPhone} required /></div>
        <div><label htmlFor="location" className="block text-sm font-medium text-gray-700">Location / District</label><input type="text" id="location" value={location} onChange={e => setLocation(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"/></div>
      </div>
      <button type="submit" disabled={status === 'loading'} className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400">
        {status === 'loading' ? 'Submitting...' : 'Register My Interest'}
      </button>
      {status === 'error' && <div className="p-4 bg-red-100 text-red-800 rounded-md text-center">{message}</div>}
    </form>
  );
}


// --- This is the Main Page Component ---
const PudoPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <ServicePageHero
          title="Introducing the RUG PUDO Network"
          subtitle="The future of Somali logistics is local. We are building a nationwide network of trusted local businesses to serve as official postal points, bringing services closer to every community."
        />

        {/* --- How It Works Section --- */}
        <section className="py-20 bg-light-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark-blue">A Seamless Ecosystem</h2>
                    <p className="text-lg text-gray-600 mt-2">Connecting people, partners, and Posta.so in three simple steps.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-2xl text-brand-dark-blue">1. For the Somali People</h3>
                        <p className="mt-2 text-gray-700">Download the app, choose your local shop as your address, and receive notifications with a secure pickup code the moment your package arrives.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-2xl text-brand-dark-blue">2. For Local Businesses</h3>
                        <p className="mt-2 text-gray-700">Use our simple app to scan incoming parcels, automatically notifying customers. Verify pickup codes to ensure secure handovers and earn extra income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-2xl text-brand-dark-blue">3. For Somali Post</h3>
                        <p className="mt-2 text-gray-700">Our staff use a central dashboard to digitally route international mail to the correct local PUDO point, creating an efficient, error-free national network.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* --- Call to Action / Interest Form Section --- */}
        <section id="register-interest" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark-blue">Become a Founding Partner</h2>
                    <p className="text-lg text-gray-600 mt-2">Be among the first to join Somalia's new postal network. By registering your interest today, you will get priority consideration and help shape the future of logistics in your community.</p>
                </div>
                <InterestForm />
            </div>
        </section>

        {/* --- Partner FAQ Section --- */}
        <section className="py-20 bg-light-gray">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark-blue">Questions You Might Have</h2>
                </div>
                <AccordionItem question="What equipment do I need to become a PUDO point?">
                    All you need is a smartphone with an internet connection to run the simple Rug Agent app. No special hardware is required.
                </AccordionItem>
                <AccordionItem question="How much space is required?">
                    You only need a small, secure area to store a few parcels. This could be a shelf behind your counter or a lockable cabinet.
                </AccordionItem>
                <AccordionItem question="How do I get paid?">
                    PUDO partners earn a commission for every parcel they successfully process (both inbound scans and outbound collections). Payments are settled on a regular, automated basis.
                </AccordionItem>
                 <AccordionItem question="What kind of support will I receive from Somali Post?">
                    Founding partners will receive full training on the app, official "RUG PUDO Partner" branding materials for your shop, and a dedicated support line for any questions.
                </AccordionItem>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PudoPage;
