"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicePageHero } from '@/components/ServicePageHero';
import { Required } from '@/components/Required';
import { TermsModal } from '@/components/TermsModal';
import { useTranslations, useLanguage } from '@/context/LanguageContext';
import type { TranslationContent } from '@/lib/translations';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type CardPaymentFormProps = {
  cardText: TranslationContent['poBoxApplication']['payment']['cardForm'];
};

const CardPaymentForm = ({ cardText }: CardPaymentFormProps) => {
  const handleComingSoon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(cardText.comingSoon);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-border-gray">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-lg">{cardText.heading}</h4>
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-6 w-auto"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
            alt="MasterCard"
            className="h-7 w-auto"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{cardText.cardNumber}</label>
          <input
            type="text"
            placeholder={cardText.cardNumberPlaceholder}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">{cardText.expiry}</label>
            <input
              type="text"
              placeholder={cardText.expiryPlaceholder}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{cardText.cvc}</label>
            <input
              type="text"
              placeholder={cardText.cvcPlaceholder}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <h5 className="font-semibold text-md mb-2">{cardText.billingTitle}</h5>
          <div>
            <label className="block text-sm font-medium text-gray-700">{cardText.country}</label>
            <input
              type="text"
              placeholder={cardText.countryPlaceholder}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">{cardText.addressLine1}</label>
            <input
              type="text"
              placeholder={cardText.addressPlaceholder}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{cardText.city}</label>
              <input
                type="text"
                placeholder={cardText.cityPlaceholder}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{cardText.postalCode}</label>
              <input
                type="text"
                placeholder={cardText.postalPlaceholder}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleComingSoon}
          className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition"
        >
          {cardText.submitLabel}
        </button>
      </div>
    </div>
  );
};

type BoxType = 'individual' | 'business';

const BOX_PRICES: Record<BoxType, number> = {
  individual: 24,
  business: 30,
};

const POBoxPage = () => {
  const { poBoxApplication: copy } = useTranslations();
  const { language } = useLanguage();
  const [boxType, setBoxType] = useState<BoxType>('individual');
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string | undefined>();
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  const [location, setLocation] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [occupation, setOccupation] = useState('');
  const [niraIdNumber, setNiraIdNumber] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [idFile, setIdFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const priceValue = BOX_PRICES[boxType];
  const displayPrice =
    boxType === 'individual' ? copy.planOptions.individualPrice : copy.planOptions.businessPrice;
  const isBusiness = boxType === 'business';
  const localBody = copy.payment.localBody.replace('{amount}', displayPrice);
  const ussdCode = copy.payment.ussdFormat.replace('{amount}', priceValue.toString());

  const resetForm = () => {
    setBoxType('individual');
    setName('');
    setEmail('');
    setPhone(undefined);
    setWhatsapp(undefined);
    setLocation('');
    setDateOfBirth('');
    setOccupation('');
    setNiraIdNumber('');
    setPassportNumber('');
    setCompanyName('');
    setLicenseNumber('');
    setIdFile(null);
    setPhotoFile(null);
    setLicenseFile(null);
    setAgreedToTerms(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedLocation = location.trim();
    const trimmedOccupation = occupation.trim();
    const trimmedNira = niraIdNumber.trim();
    const trimmedPassport = passportNumber.trim();
    const trimmedCompany = companyName.trim();
    const trimmedLicense = licenseNumber.trim();

    if (
      !trimmedName ||
      !trimmedEmail ||
      !phone ||
      !trimmedLocation ||
      !dateOfBirth ||
      !idFile ||
      !photoFile ||
      !agreedToTerms
    ) {
      setStatus('error');
      setMessage(copy.validationMessages.missingFields);
      return;
    }

    if (!trimmedNira && !trimmedPassport) {
      setStatus('error');
      setMessage(copy.validationMessages.missingIdentification);
      return;
    }

    if (boxType === 'individual' && !trimmedOccupation) {
      setStatus('error');
      setMessage(copy.validationMessages.missingOccupation);
      return;
    }

    if (isBusiness && (!trimmedCompany || !trimmedLicense || !licenseFile)) {
      setStatus('error');
      setMessage(copy.validationMessages.missingBusiness);
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('name', trimmedName);
      formData.append('email', trimmedEmail);
      formData.append('phone', phone);
      formData.append('location', trimmedLocation);
      formData.append('boxType', boxType);
      formData.append('language', language);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('niraIdNumber', trimmedNira);
      if (whatsapp) formData.append('whatsapp', whatsapp);
      if (trimmedPassport) formData.append('passportNumber', trimmedPassport);
      if (trimmedOccupation) formData.append('occupation', trimmedOccupation);
      if (trimmedCompany) formData.append('companyName', trimmedCompany);
      if (trimmedLicense) formData.append('licenseNumber', trimmedLicense);
      formData.append('idFile', idFile as File);
      formData.append('photoFile', photoFile as File);
      if (isBusiness && licenseFile) {
        formData.append('licenseFile', licenseFile);
      }

      const response = await fetch('/api/register-pobox', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || copy.validationMessages.unexpectedError);
      }

      setStatus('success');
      setMessage(copy.validationMessages.successMessage.replace('{email}', trimmedEmail));
      resetForm();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : copy.validationMessages.unexpectedError;
      setStatus('error');
      setMessage(errorMessage || copy.validationMessages.unexpectedError);
    }
  };

  return (
    <div className="bg-light-gray">
      <Navbar />
      <main>
        <ServicePageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} />
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-border-gray">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-2">{copy.stepOneTitle}</h2>
              <p className="text-gray-600 mb-6">{copy.stepOneDescription}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setBoxType('individual')}
                  type="button"
                  className={`p-4 rounded-lg border-2 text-center transition ${
                    boxType === 'individual'
                      ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue'
                      : 'border-border-gray hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-lg">{copy.planOptions.individualLabel}</span>
                  <br />
                  <span className="text-sm text-gray-500">{copy.planOptions.individualDescription}</span>
                  <br />
                  <span className="text-2xl font-bold text-brand-dark-blue">{copy.planOptions.individualPrice}</span>
                  <span className="text-gray-500">{copy.planOptions.priceSuffix}</span>
                </button>
                <button
                  onClick={() => setBoxType('business')}
                  type="button"
                  className={`p-4 rounded-lg border-2 text-center transition ${
                    boxType === 'business'
                      ? 'border-brand-dark-blue bg-blue-50 ring-2 ring-brand-dark-blue'
                      : 'border-border-gray hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-lg">{copy.planOptions.businessLabel}</span>
                  <br />
                  <span className="text-sm text-gray-500">{copy.planOptions.businessDescription}</span>
                  <br />
                  <span className="text-2xl font-bold text-brand-dark-blue">{copy.planOptions.businessPrice}</span>
                  <span className="text-gray-500">{copy.planOptions.priceSuffix}</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700">
                    {copy.formFields.name} <Required />
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                    {copy.formFields.email} <Required />
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="phone-input-container">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      {copy.formFields.phone} <Required />
                    </label>
                    <PhoneInput international defaultCountry="SO" value={phone} onChange={setPhone} />
                  </div>
                  <div className="phone-input-container">
                    <label className="text-sm font-medium text-gray-700 mb-1">{copy.formFields.whatsapp}</label>
                    <PhoneInput international defaultCountry="SO" value={whatsapp} onChange={setWhatsapp} />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="flex items-center text-sm font-medium text-gray-700">
                    {copy.formFields.location} <Required />
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="dateOfBirth" className="flex items-center text-sm font-medium text-gray-700">
                      {copy.formFields.dateOfBirth} <Required />
                    </label>
                    <input
                      id="dateOfBirth"
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      required
                    />
                  </div>
                  {boxType === 'individual' && (
                    <div>
                      <label htmlFor="occupation" className="flex items-center text-sm font-medium text-gray-700">
                        {copy.formFields.occupation} <Required />
                      </label>
                      <input
                        id="occupation"
                        type="text"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    {copy.formFields.niraIdNumber} / {copy.formFields.passportNumber} <Required />
                  </label>
                  <p className="text-xs text-gray-500">{copy.formFields.identityHint}</p>
                  <div className="grid sm:grid-cols-2 gap-6 mt-2">
                    <div>
                      <label htmlFor="niraIdNumber" className="text-sm font-medium text-gray-700">
                        {copy.formFields.niraIdNumber}
                      </label>
                      <input
                        id="niraIdNumber"
                        type="text"
                        value={niraIdNumber}
                        onChange={(e) => setNiraIdNumber(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="passportNumber" className="text-sm font-medium text-gray-700">
                        {copy.formFields.passportNumber}
                      </label>
                      <input
                        id="passportNumber"
                        type="text"
                        value={passportNumber}
                        onChange={(e) => setPassportNumber(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      />
                    </div>
                  </div>
                </div>

                {boxType === 'business' && (
                  <div className="space-y-6 bg-blue-50 p-4 rounded-md">
                    <div>
                      <label htmlFor="companyName" className="flex items-center text-sm font-medium text-gray-700">
                        {copy.businessFields.companyName} <Required />
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="licenseNumber" className="flex items-center text-sm font-medium text-gray-700">
                        {copy.businessFields.licenseNumber} <Required />
                      </label>
                      <input
                        id="licenseNumber"
                        type="text"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700">
                        {copy.businessFields.licenseUpload} <Required />
                      </label>
                      <p className="text-xs text-gray-500">{copy.businessFields.licenseHint}</p>
                      <input
                        type="file"
                        onChange={(e) => setLicenseFile(e.target.files?.[0] ?? null)}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-dark-blue hover:file:bg-blue-100"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    {copy.uploads.idDocument} <Required />
                  </label>
                  <p className="text-xs text-gray-500">{copy.uploads.idDocumentHint}</p>
                  <input
                    type="file"
                    onChange={(e) => setIdFile(e.target.files?.[0] ?? null)}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-dark-blue hover:file:bg-blue-100"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    {copy.uploads.photoUpload} <Required />
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setPhotoFile(e.target.files?.[0] ?? null)}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-dark-blue hover:file:bg-blue-100"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="focus:ring-brand-dark-blue h-4 w-4 text-brand-dark-blue border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      {copy.termsAgreement.prefix}
                      <button
                        type="button"
                        onClick={() => setIsTermsModalOpen(true)}
                        className="underline text-brand-dark-blue font-semibold"
                      >
                        {copy.termsAgreement.linkLabel}
                      </button>
                      {copy.termsAgreement.suffix}
                      <Required />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-dark-blue text-white font-bold py-3 rounded-md hover:bg-blue-900 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? copy.submittingLabel : copy.submitLabel}
                </button>
              </form>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">{message}</div>
              )}
              {status === 'error' && <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">{message}</div>}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{copy.payment.title}</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">{copy.payment.localHeading}</h3>
                  <p className="text-gray-700 mb-4">{localBody}</p>
                  <div className="bg-gray-100 p-4 rounded-md text-center">
                    <p className="text-gray-600">{copy.payment.ussdPrompt}</p>
                    <p className="text-2xl font-mono font-bold text-dark-text tracking-wider">{ussdCode}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{copy.payment.internationalHeading}</h3>
                  <p className="text-gray-700 mb-4">{copy.payment.internationalBody}</p>
                  <CardPaymentForm cardText={copy.payment.cardForm} />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">{copy.certificate.title}</h2>
                <p className="text-gray-700">{copy.certificate.body}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {isTermsModalOpen && <TermsModal onClose={() => setIsTermsModalOpen(false)} />}
    </div>
  );
};

export default POBoxPage;
