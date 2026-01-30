"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import TrackIcon from '@/components/icons/TrackIcon';
import { countryCodeToFlag } from '@/lib/utils';
import { useLanguage, useTranslations } from '@/context/LanguageContext';
import { getEventInfo, getStateLabel } from '@/lib/trackingEvents';
import { isValidS10, normalizeTrackingId } from '@/lib/s10';

interface TrackingEvent {
  status: string;
  location: string;
  code: string;
  timestamp: string;
  explanation?: string;
}

interface TrackingData {
  trackingId: string;
  status: string;
  origin: string;
  destination: string;
  originCode?: string;
  destinationCode?: string;
  history: TrackingEvent[];
  message?: string;
  stateCode?: string;
  latestEventCode?: string;
}

type ApiErrorPayload = { error?: string; message?: string };

const UPU_GTT_URL = 'https://globaltracktrace.ptc.post/gtt.web/';

const CONTACT = {
  address: 'Jamhuuriya Road, Boondheere District, Muqdisho, Somalia',
  email: 'Postalservice@moct.gov.so',
  phone: '252-611003239',
  hours: [
    { label: 'Saturday - Wednesday', value: '8:30 AM - 4:30 PM' },
    { label: 'Thursday', value: '8:30 AM - 2:00 PM' },
    { label: 'Friday', value: 'Closed' },
  ],
};

const formatTimestamp = (ts: string, locale: string) => {
  try {
    return new Date(ts).toLocaleString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return ts;
  }
};

const formatCountry = (name: string, code?: string) => {
  if (code) return `${name} (${code})`;
  return name;
};

const TrackPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [data, setData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  const { track } = useTranslations();
  const { language, locale } = useLanguage();

  const normalizedId = useMemo(() => normalizeTrackingId(trackingId), [trackingId]);

  const handleIdChange = (value: string) => {
    const normalized = normalizeTrackingId(value);
    setTrackingId(normalized);
    if (inputError) setInputError(null);
    if (errorKey || errorMessage) {
      setErrorKey(null);
      setErrorMessage(null);
    }
    if (data) setData(null);
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = normalizedId.trim();

    if (!id) {
      setInputError(track.invalidFormat);
      return;
    }

    if (!isValidS10(id)) {
      setInputError(track.invalidFormat);
      return;
    }

    setIsLoading(true);
    setData(null);
    setInputError(null);
    setErrorKey(null);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/track/${id}`);

      let payload: any = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok) {
        const apiErr = (payload || {}) as ApiErrorPayload;

        if (response.status === 400 || apiErr.error === 'INVALID_S10') {
          setErrorKey('INVALID_S10');
          setErrorMessage(apiErr.message || 'Invalid tracking number. Please check the format and try again.');
        } else if (response.status === 429 || apiErr.error === 'RATE_LIMIT') {
          setErrorKey('RATE_LIMIT');
          setErrorMessage(apiErr.message || 'Too many attempts. Please wait and try again.');
        } else if (
          response.status === 503 ||
          apiErr.error === 'UPSTREAM_BLOCKED' ||
          apiErr.error === 'NETWORK'
        ) {
          setErrorKey('SERVICE_DOWN');
          setErrorMessage(apiErr.message || 'Tracking service is temporarily unavailable. Please try again soon.');
        } else {
          setErrorKey('TRACK_ERROR');
          setErrorMessage(apiErr.message || track.error);
        }

        return;
      }

      setData(payload as TrackingData);
    } catch {
      setErrorKey('TRACK_ERROR');
      setErrorMessage(track.error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFlag = (code?: string, fallback?: string) => {
    const flagFromCode = code ? countryCodeToFlag(code) : '';
    if (flagFromCode) return flagFromCode;
    if (fallback && fallback.length === 2) return countryCodeToFlag(fallback);
    return '';
  };

  const resolveCurrentStatus = () => {
    if (!data) return '';
    const localizedEvent = getEventInfo(data.latestEventCode, language);
    const localizedState = getStateLabel(data.stateCode, language);
    return localizedEvent?.label ?? localizedState ?? data.status;
  };

  const resolveEventCopy = (event: TrackingEvent) => {
    const info = getEventInfo(event.code, language);
    return {
      label: info?.label ?? event.status,
      explanation: info?.explanation ?? event.explanation,
    };
  };

  const isNotFound = data?.status === 'Not Found';
  const isPreArrival = data?.status === 'Pre-Arrival';
  const isTransitGuidance = isNotFound || isPreArrival;
  const showGuidance = !isLoading && (isTransitGuidance || !!errorKey);

  const guidanceTitle = (() => {
    if (isTransitGuidance) return 'No tracking updates are available in Somalia yet';
    if (errorKey === 'INVALID_S10') return 'Invalid tracking number';
    if (errorKey === 'RATE_LIMIT') return 'Too many requests';
    if (errorKey === 'SERVICE_DOWN') return 'Tracking service temporarily unavailable';
    if (errorKey) return 'Unable to retrieve tracking details';
    return null;
  })();

  const guidanceBody = (() => {
    if (isTransitGuidance) return null;
    if (errorKey === 'INVALID_S10') {
      return 'S10 numbers are 13 characters (e.g., RR123456785DE). Please check the letters and digits, then try again.';
    }
    if (errorKey === 'RATE_LIMIT') {
      return 'Please wait a moment and try again.';
    }
    if (errorKey === 'SERVICE_DOWN') {
      return 'Our tracking provider is not responding right now. Please try again shortly or contact Somali Post for support.';
    }
    if (errorKey) {
      return errorMessage || 'Please try again or contact Somali Post for support.';
    }
    return null;
  })();


  return (
    <div className="flex flex-col min-h-screen bg-light-gray">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-brand-dark-blue text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">{track.title}</h1>
            <p className="text-xl mt-4 max-w-2xl mx-auto opacity-90">{track.subtitle}</p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="relative -mt-12 md:-mt-14">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <p className="text-left text-gray-600 mb-4">{track.instructions}</p>
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => handleIdChange(e.target.value)}
                  placeholder={track.placeholder}
                  maxLength={13}
                  data-tracking-input="true"
                  aria-invalid={inputError ? 'true' : 'false'}
                  className="flex-grow w-full px-4 py-3 text-lg border-2 border-border-gray rounded-md focus:ring-2 focus:ring-brand-dark-blue focus:border-brand-dark-blue transition"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-brand-dark-blue text-white font-bold text-lg rounded-md hover:bg-blue-900 transition-all disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  <TrackIcon className="w-6 h-6" />
                  <span>{isLoading ? track.buttonLoading : track.buttonIdle}</span>
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-3">{track.helper}</p>
              {inputError && <p className="text-sm text-red-600 mt-2">{inputError}</p>}
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg my-12">
            {isLoading && (
              <div className="text-center">
                <p className="text-lg text-gray-600">{track.loading}</p>
              </div>
            )}

            {showGuidance && (
              <div className="text-center">
                {guidanceTitle && <p className="text-xl font-semibold text-dark-text">{guidanceTitle}</p>}
                {!isTransitGuidance && guidanceBody && <p className="text-md text-gray-600 mt-2">{guidanceBody}</p>}

                {isTransitGuidance && (
                  <div className="mt-4 text-left bg-light-gray rounded-lg p-5 border border-border-gray">
                    <p className="text-dark-text font-semibold">
                      No tracking updates are available in Somalia yet. This usually means the item has not arrived in
                      Somalia and is still in transit through the origin and international transit network.
                    </p>

                    <p className="text-gray-700 mt-3">
                      Once the item arrives in Somalia and is recorded in our system for inbound processing, it will become
                      trackable on this page within <span className="font-semibold">4 hours</span> of arrival.
                    </p>

                    <div className="mt-5">
                      <a
                        href={UPU_GTT_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-md border border-border-gray bg-white hover:border-brand-dark-blue hover:shadow-sm transition"
                      >
                        <span className="flex items-center justify-center w-12 h-12 rounded-md bg-light-gray border border-border-gray">
                          <Image
                            src="/images/upu-logo.png"
                            alt="UPU"
                            width={34}
                            height={34}
                            className="object-contain"
                            priority
                          />
                        </span>
                        <span className="text-dark-text font-semibold">
                          UPU Global Track &amp; Trace
                        </span>
                        <span className="text-sm text-gray-500 group-hover:text-gray-600">
                          Open
                        </span>
                      </a>
                      <p className="text-xs text-gray-500 mt-2">
                        Use UPU Global Track &amp; Trace as an additional reference while your item is in international transit.
                      </p>
                    </div>

                    <div className="mt-6 bg-white rounded-lg border border-border-gray p-5">
                      <p className="font-bold text-dark-text mb-2">Contact Information</p>
                      <p className="text-sm text-gray-600 mb-4">
                        For more information or support, please contact Somali Post using the details below.
                      </p>

                      <div className="space-y-3 text-sm text-gray-700">
                        <div>
                          <p className="font-semibold text-dark-text">Address</p>
                          <p>{CONTACT.address}</p>
                        </div>

                        <div>
                          <p className="font-semibold text-dark-text">Email</p>
                          <a className="text-brand-dark-blue hover:underline" href={`mailto:${CONTACT.email}`}>
                            {CONTACT.email}
                          </a>
                        </div>

                        <div>
                          <p className="font-semibold text-dark-text">Phone</p>
                          <a
                            className="text-brand-dark-blue hover:underline"
                            href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, '')}`}
                          >
                            {CONTACT.phone}
                          </a>
                        </div>

                        <div>
                          <p className="font-semibold text-dark-text">Opening Hours</p>
                          <div className="mt-1 space-y-1">
                            {CONTACT.hours.map((h) => (
                              <div key={h.label} className="flex items-start justify-between gap-4">
                                <span className="text-gray-600">{h.label}</span>
                                <span className="font-semibold text-dark-text">{h.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!isTransitGuidance && (
                  <div className="mt-6 text-left bg-light-gray rounded-lg p-5 border border-border-gray">
                    <p className="font-bold text-dark-text">Need help?</p>
                    <p className="text-sm text-gray-600 mt-1">Contact Somali Post using the details below.</p>

                    <div className="mt-4 bg-white rounded-lg border border-border-gray p-5">
                      <div className="space-y-3 text-sm text-gray-700">
                        <div>
                          <p className="font-semibold text-dark-text">Address</p>
                          <p>{CONTACT.address}</p>
                        </div>

                        <div>
                          <p className="font-semibold text-dark-text">Email</p>
                          <a className="text-brand-dark-blue hover:underline" href={`mailto:${CONTACT.email}`}>
                            {CONTACT.email}
                          </a>
                        </div>

                        <div>
                          <p className="font-semibold text-dark-text">Phone</p>
                          <a
                            className="text-brand-dark-blue hover:underline"
                            href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, '')}`}
                          >
                            {CONTACT.phone}
                          </a>
                        </div>

                        <div>
                          <p className="font-semibold text-dark-text">Opening Hours</p>
                          <div className="mt-1 space-y-1">
                            {CONTACT.hours.map((h) => (
                              <div key={h.label} className="flex items-start justify-between gap-4">
                                <span className="text-gray-600">{h.label}</span>
                                <span className="font-semibold text-dark-text">{h.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <a
                            href={UPU_GTT_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-brand-dark-blue hover:underline"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white border border-border-gray">
                              <Image src="/images/upu-logo.png" alt="UPU" width={16} height={16} className="object-contain" />
                            </span>
                            Try UPU Global Track &amp; Trace
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {!isLoading && !showGuidance && data && !isTransitGuidance && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-dark-text">
                  {track.detailsHeading}{' '}
                  <span className="text-brand-dark-blue">{data.trackingId}</span>
                </h2>

                <div className="bg-brand-dark-blue text-white p-6 rounded-lg">
                  <p className="text-sm uppercase tracking-wider">{track.currentStatus}</p>
                  <p className="text-4xl font-bold">{resolveCurrentStatus()}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center">
                  <div>
                    <p className="text-4xl">{renderFlag(data.originCode, data.origin)}</p>
                    <p className="text-lg font-bold">{formatCountry(data.origin, data.originCode)}</p>
                    <p className="text-sm text-gray-500">{track.originLabel}</p>
                  </div>
                  <div className="hidden md:block text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-4xl">{renderFlag(data.destinationCode, data.destination)}</p>
                    <p className="text-lg font-bold">{formatCountry(data.destination, data.destinationCode)}</p>
                    <p className="text-sm text-gray-500">{track.destinationLabel}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 border-t pt-8">{track.historyTitle}</h3>
                  <div className="border-l-2 border-brand-dark-blue pl-6">
                    {data.history.map((event) => {
                      const localized = resolveEventCopy(event);
                      return (
                        <div key={event.timestamp + event.code} className="relative mb-8">
                          <div className="absolute -left-[35px] top-1 w-4 h-4 bg-brand-dark-blue rounded-full border-4 border-white" />
                          <p className="font-bold text-lg text-dark-text">{localized.label}</p>
                          {localized.explanation && <p className="text-md text-gray-600 mt-1">{localized.explanation}</p>}
                          <p className="text-gray-500 mt-2">{event.location}</p>
                          <p className="text-sm text-gray-500 mt-1">{formatTimestamp(event.timestamp, locale)}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {!isLoading && !data && !errorKey && (
              <div className="text-center text-gray-500 py-8">
                <p className="text-lg">{track.emptyStateInstructions}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackPage;
