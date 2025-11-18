"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslations } from '@/context/LanguageContext';

const POBoxPage = () => {
  const { poBoxApplication } = useTranslations();
  const [boxType, setBoxType] = useState<'Individual' | 'Business'>('Individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string | undefined>();
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  const [companyName, setCompanyName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [idFile, setIdFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone || !idFile || !photoFile) {
      setStatus('error');
      setMessage('Please fill in all required fields and upload the necessary documents.');
      return;
    }

    if (boxType === 'Business' && (!companyName.trim() || !licenseNumber.trim() || !licenseFile)) {
      setStatus('error');
      setMessage('Please fill in all required fields and upload the necessary documents.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('email', email.trim());
      formData.append('phone', phone);
      if (whatsapp) formData.append('whatsapp', whatsapp);
      formData.append('boxType', boxType);
      formData.append('idFile', idFile);
      formData.append('photoFile', photoFile);

      if (boxType === 'Business') {
        formData.append('companyName', companyName.trim());
        formData.append('licenseNumber', licenseNumber.trim());
        if (licenseFile) formData.append('licenseFile', licenseFile);
      }

      const response = await fetch('/api/register-pobox', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Something went wrong.');

      setStatus('success');
      setMessage(`Application successful! Your reference has been sent to ${email}. Please proceed to payment.`);
      setName('');
      setEmail('');
      setPhone(undefined);
      setWhatsapp(undefined);
      setCompanyName('');
      setLicenseNumber('');
      setIdFile(null);
      setPhotoFile(null);
      setLicenseFile(null);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error. Please try again.';
      setStatus('error');
      setMessage(errorMessage);
    }
  };

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={poBoxApplication.heroTitle} subtitle={poBoxApplication.heroSubtitle} />
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-border-gray">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Step 1: Register Your Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setBoxType('Individual')}
                  type="button"
                  className={`p-4 rounded-lg border-2 text-center transition ${
                    boxType === 'Individual'
                      ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue'
                      : 'border-border-gray hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-lg">{poBoxApplication.planOptions.individualLabel}</span>
                  <br />
                  <span className="text-2xl font-bold text-brand-dark-blue">
                    {poBoxApplication.planOptions.individualPrice}
                  </span>
                  <span className="text-gray-500">{poBoxApplication.planOptions.priceSuffix}</span>
                </button>
                <button
                  onClick={() => setBoxType('Business')}
                  type="button"
                  className={`p-4 rounded-lg border-2 text-center transition ${
                    boxType === 'Business'
                      ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue'
                      : 'border-border-gray hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-lg">{poBoxApplication.planOptions.businessLabel}</span>
                  <br />
                  <span className="text-2xl font-bold text-brand-dark-blue">
                    {poBoxApplication.planOptions.businessPrice}
                  </span>
                  <span className="text-gray-500">{poBoxApplication.planOptions.priceSuffix}</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                  />
                </div>

                <div className="phone-input-container">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <PhoneInput international defaultCountry="SO" value={phone} onChange={setPhone} required />
                </div>

                <div className="phone-input-container">
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number (optional)</label>
                  <PhoneInput international defaultCountry="SO" value={whatsapp} onChange={setWhatsapp} />
                </div>

                {boxType === 'Business' && (
                  <>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
                        Business License Number
                      </label>
                      <input
                        type="text"
                        id="licenseNumber"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload ID (Passport / NIRA)</label>
                  <input
                    type="file"
                    onChange={(e) => setIdFile(e.target.files?.[0] ?? null)}
                    required
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-dark-blue hover:file:bg-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload Passport-size Photo</label>
                  <input
                    type="file"
                    onChange={(e) => setPhotoFile(e.target.files?.[0] ?? null)}
                    required
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-dark-blue hover:file:bg-blue-100"
                  />
                </div>
                {boxType === 'Business' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Business License</label>
                    <input
                      type="file"
                      onChange={(e) => setLicenseFile(e.target.files?.[0] ?? null)}
                      required
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-dark-blue hover:file:bg-blue-100"
                    />
                  </div>
                )}

                <p className="text-xs text-gray-500">
                  Your email is used to send your official e-certificate upon payment confirmation.
                </p>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>

              {status === 'success' && <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">{message}</div>}
              {status === 'error' && <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">{message}</div>}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBoxApplication.stepTwoTitle}</h2>
                <p className="text-gray-700 mb-4">{poBoxApplication.stepTwoBody}</p>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-gray-600">{poBoxApplication.evcLabel}:</p>
                  <p className="text-2xl font-bold text-dark-text">{poBoxApplication.evcNumber}</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">{poBoxApplication.paymentNote}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{poBoxApplication.stepThreeTitle}</h2>
                <p className="text-gray-700">{poBoxApplication.stepThreeBody}</p>
              </div>

              <div className="bg-transparent pt-4">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6 text-center">
                  {poBoxApplication.testimonialsTitle}
                </h2>
                <div className="space-y-6">
                  {poBoxApplication.testimonials.map((testimonial) => (
                    <blockquote
                      key={testimonial.author}
                      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-dark-blue"
                    >
                      <p className="text-gray-700 italic">{testimonial.quote}</p>
                      <footer className="mt-4 flex items-center gap-4">
                        <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} className="rounded-full" />
                        <div>
                          <cite className="font-bold not-italic">{testimonial.author}</cite>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  ))}
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
