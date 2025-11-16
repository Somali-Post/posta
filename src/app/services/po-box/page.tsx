"use client";

// src/app/services/po-box/page.tsx
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const POBoxPage = () => {
  const [boxType, setBoxType] = useState('Individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string | undefined>();
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch('/api/register-pobox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, whatsapp, boxType }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Something went wrong.');
      setStatus('success');
      setMessage('Thank you! Your application has been received. Please proceed to Step 2 to complete your payment.');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero
          title="Get Your Official P.O. Box"
          subtitle="Join hundreds of individuals and businesses who trust Somali Post for a secure, private, and permanent mailing address."
        />

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* --- Redesigned Form Section --- */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-border-gray">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Step 1: Register Your Details</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button onClick={() => setBoxType('Individual')} className={`p-4 rounded-lg border-2 text-center transition ${boxType === 'Individual' ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue' : 'border-border-gray hover:border-gray-400'}`}>
                  <span className="font-bold text-lg">Individual</span><br/><span className="text-2xl font-bold text-brand-dark-blue">$24</span><span className="text-gray-500">/year</span>
                </button>
                <button onClick={() => setBoxType('Business')} className={`p-4 rounded-lg border-2 text-center transition ${boxType === 'Business' ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue' : 'border-border-gray hover:border-gray-400'}`}>
                  <span className="font-bold text-lg">Business</span><br/><span className="text-2xl font-bold text-brand-dark-blue">$30</span><span className="text-gray-500">/year</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label><input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"/></div>
                <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label><input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"/></div>
                <div className="phone-input-container"><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label><PhoneInput international defaultCountry="SO" value={phone} onChange={setPhone} required /></div>
                <div className="phone-input-container"><label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number (if different)</label><PhoneInput international defaultCountry="SO" value={whatsapp} onChange={setWhatsapp} /></div>
                <button type="submit" disabled={status === 'loading'} className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
              {status === 'success' && <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">{message}</div>}
              {status === 'error' && <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">{message}</div>}
            </div>

            {/* Right Column: Instructions & Testimonials */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg"><h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Step 2: Make Payment</h2><p className="text-gray-700 mb-4">After submitting your application, please send the correct amount via EVC Plus.</p><div className="bg-gray-100 p-4 rounded-md text-center"><p className="text-gray-600">EVC Plus Number:</p><p className="text-2xl font-bold text-dark-text">611-69-69-89</p></div><p className="text-sm text-gray-500 mt-4">For faster verification, please send payment during our working hours (Sat-Wed 8:30-4:30, Thurs 8:30-2:00).</p></div>
              <div className="bg-white p-8 rounded-lg shadow-lg"><h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Step 3: Receive Your Certificate</h2><p className="text-gray-700">Once we confirm your payment, our team will issue your official P.O. Box e-certificate and send it to you via email and/or WhatsApp within one business day.</p></div>
              
              {/* Testimonials Section with Updated Copy */}
              <div className="bg-transparent pt-4">
                 <h2 className="text-3xl font-bold text-brand-dark-blue mb-6 text-center">Trusted By Somalia's Leading Institutions</h2>
                 <div className="space-y-6">
                   <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-dark-blue">
                     <p className="text-gray-700 italic">"Using the Somali Post P.O. Box service has streamlined our corporate mail. It gives us the secure, official address that's essential for our national operations and formal correspondence."</p>
                     <footer className="mt-4 flex items-center gap-4">
                       <Image src="/images/logos/hormuud-logo.png" alt="Hormuud Logo" width={40} height={40} className="rounded-full" />
                       <div>
                         <cite className="font-bold not-italic">Hormuud Telecom</cite>
                         <p className="text-sm text-gray-500">Official P.O. Box Holder</p>
                       </div>
                     </footer>
                   </blockquote>
                   <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-dark-blue">
                     <p className="text-gray-700 italic">"The P.O. Box system is critical for the secure correspondence required by financial institutions. Somali Post provides a reliable service that meets our standards for security and professionalism."</p>
                     <footer className="mt-4 flex items-center gap-4">
                       <Image src="/images/logos/central-bank-logo.png" alt="Somali Central Bank Logo" width={40} height={40} />
                       <div>
                         <cite className="font-bold not-italic">Central Bank of Somalia</cite>
                         <p className="text-sm text-gray-500">Official P.O. Box Holder</p>
                       </div>
                     </footer>
                   </blockquote>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default POBoxPage;
