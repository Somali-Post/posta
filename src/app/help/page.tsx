"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { AccordionItem } from '@/components/AccordionItem';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessageText] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus('success');
      setResponseMsg(result.success);
      setName('');
      setEmail('');
      setMessageText('');
    } catch (err: any) {
      setStatus('error');
      setResponseMsg(err.message || 'An unknown error occurred.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 bg-green-100 text-green-800 rounded-lg text-center">
        <h3 className="font-bold text-xl">{responseMsg}</h3>
        <p>We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Your Inquiry
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessageText(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <div className="p-4 bg-red-100 text-red-800 rounded-md text-center">{responseMsg}</div>
      )}
    </form>
  );
};

const HelpPage = () => {
  const gpoPosition = { lat: 2.040212912457093, lng: 45.347156485402365 };

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero
          title="Support & Contact Center"
          subtitle="We're here to help. Find answers to common questions or get in touch with our team directly."
        />

        <div className="container mx-auto px-4 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark-blue">Find Answers Fast</h2>
              <p className="text-lg text-gray-600 mt-2">
                Browse our frequently asked questions to find the information you need.
              </p>
            </div>
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-x-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue pt-4 border-b pb-2">Tracking</h3>
                  <AccordionItem question="How do I track my item?">
                    You can track your item by entering the 13-digit tracking number on our{' '}
                    <Link href="/track" className="font-semibold underline">
                      Track page
                    </Link>
                    . This provides real-time updates on your shipment&rsquo;s journey.
                  </AccordionItem>
                  <AccordionItem question="My tracking number says &lsquo;Not Found&rsquo;. What does this mean?">
                    This usually means the item is new to the system. Please check again in 24-48 hours. If the problem
                    persists, contact the sender to verify the tracking number.
                  </AccordionItem>
                  <AccordionItem question="What does &lsquo;Arrival at inward office of exchange&rsquo; mean?">
                    This means your package has successfully arrived in Somalia and is at our main international
                    processing facility in Mogadishu, where it will be prepared for customs inspection.
                  </AccordionItem>

                  <h3 className="text-xl font-semibold text-brand-dark-blue pt-6 border-b pb-2">P.O. Boxes</h3>
                  <AccordionItem question="How do I apply for a P.O. Box?">
                    Currently, all P.O. Box applications must be made in person at the GPO. We are launching a full
                    online registration portal very soon, which you can find on our{' '}
                    <Link href="/services/po-box" className="font-semibold underline">
                      P.O. Box page
                    </Link>
                    .
                  </AccordionItem>
                  <AccordionItem question="What are the benefits of having a P.O. Box?">
                    A P.O. Box provides a secure, private, and permanent address for all your mail. It&rsquo;s ideal for both
                    individuals who want to protect their home address and for businesses that need a professional
                    mailing address.
                  </AccordionItem>
                </div>

                <div className="space-y-4 mt-10 md:mt-0">
                  <h3 className="text-xl font-semibold text-brand-dark-blue pt-4 border-b pb-2">Parcel Collection</h3>
                  <AccordionItem question="How will I know when my parcel is ready for collection?">
                    We will send an SMS or email notification to you as soon as your item has been processed at the
                    General Post Office (GPO) and is ready for you to pick up.
                  </AccordionItem>
                  <AccordionItem question="What documents do I need to bring to collect my parcel?">
                    To collect your item, you must bring a valid National Identification (NIRA) ID card or Passport, the
                    item&rsquo;s tracking number, and the notification message (SMS/email) you received from us.
                  </AccordionItem>
                  <AccordionItem question="Can someone else collect my parcel for me?">
                    Yes. The person collecting on your behalf must bring their own original NIRA ID card, a signed letter
                    of authorization from you, and a copy of your NIRA ID card.
                  </AccordionItem>

                  <h3 className="text-xl font-semibold text-brand-dark-blue pt-6 border-b pb-2">General Services</h3>
                  <AccordionItem question="Do you handle outbound (international) mail?">
                    Not yet. We are proud to announce that full outbound services for sending mail to the world will be
                    launching in 2026. This will include digital customs clearance and drop-offs at our RUG PUDO network.
                  </AccordionItem>
                  <AccordionItem question="What is the RUG PUDO Network?">
                    The RUG PUDO network is our upcoming network of local partner businesses (like supermarkets and
                    pharmacies) that will act as convenient local points for sending and receiving mail. This will bring
                    postal services closer to every neighborhood.
                  </AccordionItem>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark-blue">Get Direct Support</h2>
              <p className="text-lg text-gray-600 mt-2">
                Can&rsquo;t find an answer? Contact us directly or visit us at the General Post Office.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-dark-text mb-6">Send Us a Message</h3>
                <ContactForm />
                <div className="mt-8 border-t pt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:posta@moct.gov.so" className="text-brand-dark-blue">
                      posta@moct.gov.so
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>252-611003239</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Opening Hours</h4>
                    <p>Sat-Wed: 8:30-4:30 | Thurs: 8:30-2:00 | Fri: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                  <div style={{ height: '100%', minHeight: '500px', width: '100%' }}>
                    <Map defaultCenter={gpoPosition} defaultZoom={16} mapId="posta-so-map">
                      <Marker position={gpoPosition} />
                    </Map>
                  </div>
                </APIProvider>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpPage;
