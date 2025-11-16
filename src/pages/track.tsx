"use client"; // This is required for using hooks like useState

import { useState } from 'react';
import type { NextPage } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import TrackIcon from '@/components/icons/TrackIcon';
import { useLanguage, useTranslations } from '@/context/LanguageContext';

// Define the structure of our tracking data
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
  message?: string; // For "Not Found" messages
}

// A component to format the date and time nicely
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
  } catch (e) {
    return ts; // Fallback if the date is invalid
  }
};

const formatCountry = (name: string, code?: string) => {
  if (code) {
    return `${name} (${code})`;
  }
  return name;
};

const TrackPage: NextPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [data, setData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { track } = useTranslations();
  const { locale } = useLanguage();

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsLoading(true);
    setData(null);
    setHasError(false);

    try {
      const response = await fetch(`/api/track/${trackingId.trim()}`);

      if (!response.ok) {
        throw new Error('An error occurred while tracking the item.');
      }

      const result: TrackingData = await response.json();
      setData(result);
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-light-gray">
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* --- The Search Form --- */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h1 className="text-4xl font-bold text-somali-blue mb-2">{track.title}</h1>
            <p className="text-lg text-gray-600">{track.subtitle}</p>
            <p className="text-base text-gray-500 mb-6">{track.instructions}</p>
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder={track.placeholder}
                className="flex-grow w-full px-4 py-3 text-lg border-2 border-border-gray rounded-md focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-somali-blue text-white font-bold text-lg rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100"
                disabled={isLoading}
              >
                <TrackIcon className="w-6 h-6" />
                <span>{isLoading ? track.buttonLoading : track.buttonIdle}</span>
              </button>
            </form>
          </div>

          {/* --- The Results Area --- */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {isLoading && <p className="text-center text-lg text-gray-600">{track.loading}</p>}

            {hasError && <p className="text-center text-lg text-red-600">{track.error}</p>}

            {data && (
              <div>
                {/* Not Found Message */}
                {data.status === 'Not Found' && (
                  <p className="text-center text-lg text-gray-700">{data.message ?? track.notFound}</p>
                )}

                {/* Success Results */}
                {data.status !== 'Not Found' && (
                  <div>
                    <h2 className="text-3xl font-bold text-dark-text mb-6">
                      {track.detailsHeading}{' '}
                      <span className="text-somali-blue">{data.trackingId}</span>
                    </h2>

                    {/* Status Card */}
                    <div className="bg-somali-blue text-white p-6 rounded-lg mb-8">
                      <p className="text-lg uppercase tracking-wider">{track.currentStatus}</p>
                      <p className="text-4xl font-bold">{data.status}</p>
                    </div>

                    {/* Route Summary */}
                    <div className="grid grid-cols-2 gap-4 text-center mb-8">
                      <div>
                        <p className="text-sm text-gray-500">{track.originLabel}</p>
                        <p className="text-2xl font-bold">
                          {formatCountry(data.origin, data.originCode)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{track.destinationLabel}</p>
                        <p className="text-2xl font-bold">
                          {formatCountry(data.destination, data.destinationCode)}
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <h3 className="text-2xl font-bold mb-4">{track.historyTitle}</h3>
                    <div className="border-l-2 border-somali-blue pl-6">
                      {data.history.map((event, index) => (
                        <div key={index} className="relative mb-6">
                          <div className="absolute -left-[34px] top-1 w-4 h-4 bg-somali-blue rounded-full border-4 border-white"></div>
                          <p className="font-bold text-lg text-dark-text">{event.status}</p>
                          <p className="text-gray-600">{event.location}</p>
                          <p className="text-sm text-gray-500">{formatTimestamp(event.timestamp, locale)}</p>
                          {event.explanation && (
                            <p className="text-sm text-gray-500 italic mt-1">{event.explanation}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
