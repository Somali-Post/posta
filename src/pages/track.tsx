"use client";

import { useState } from 'react';
import type { NextPage } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import TrackIcon from '@/components/icons/TrackIcon';
import { countryCodeToFlag } from '@/lib/utils';

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
}

const formatTimestamp = (ts: string) => {
  try {
    return new Date(ts).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (e) {
    return ts;
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
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedId = trackingId.trim();
    if (!trimmedId) return;

    setIsLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await fetch(`/api/track/${trimmedId}`);

      if (!response.ok) {
        throw new Error('TRACK_ERROR');
      }

      const result: TrackingData = await response.json();
      setData(result);
    } catch (err) {
      setError('Could not track the item. Please check the number and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderFlag = (code?: string, fallback?: string) => {
    const flagFromCode = code ? countryCodeToFlag(code) : '';
    if (flagFromCode) {
      return flagFromCode;
    }
    if (fallback && fallback.length === 2) {
      return countryCodeToFlag(fallback);
    }
    return '';
  };

  return (
    <div className="flex flex-col min-h-screen bg-light-gray">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-brand-dark-blue text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Track Your Item</h1>
            <p className="text-xl mt-4 max-w-2xl mx-auto opacity-90">
              Stay informed every step of the way. Enter your tracking number below to get real-time updates.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="relative -mt-12 md:-mt-14">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <p className="text-left text-gray-600 mb-4">
                Enter the full international tracking number exactly as it appears on your receipt.
              </p>
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                  placeholder="e.g., CC850579694SE"
                  className="flex-grow w-full px-4 py-3 text-lg border-2 border-border-gray rounded-md focus:ring-2 focus:ring-brand-dark-blue focus:border-brand-dark-blue transition"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-brand-dark-blue text-white font-bold text-lg rounded-md hover:bg-blue-900 transition-all disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  <TrackIcon className="w-6 h-6" />
                  <span>{isLoading ? 'Searching...' : 'Track'}</span>
                </button>
              </form>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg my-12">
            {isLoading && (
              <div className="text-center">
                <p className="text-lg text-gray-600">Loading tracking details...</p>
              </div>
            )}

            {error && (
              <div className="text-center">
                <p className="text-lg text-red-600 font-semibold">{error}</p>
              </div>
            )}

            {!isLoading && !error && data && (
              <div>
                {data.status === 'Not Found' && (
                  <div className="text-center">
                    <p className="text-lg text-gray-700">{data.message ?? 'No tracking information is available for this item yet.'}</p>
                  </div>
                )}

                {data.status !== 'Not Found' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-dark-text">
                      Tracking Details for <span className="text-brand-dark-blue">{data.trackingId}</span>
                    </h2>

                    <div className="bg-brand-dark-blue text-white p-6 rounded-lg">
                      <p className="text-sm uppercase tracking-wider">Current Status</p>
                      <p className="text-4xl font-bold">{data.status}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center">
                      <div>
                        <p className="text-4xl">{renderFlag(data.originCode, data.origin)}</p>
                        <p className="text-lg font-bold">{formatCountry(data.origin, data.originCode)}</p>
                        <p className="text-sm text-gray-500">Origin</p>
                      </div>
                      <div className="hidden md:block text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10 mx-auto"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-4xl">{renderFlag(data.destinationCode, data.destination)}</p>
                        <p className="text-lg font-bold">{formatCountry(data.destination, data.destinationCode)}</p>
                        <p className="text-sm text-gray-500">Destination</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 border-t pt-8">Shipment History</h3>
                      <div className="border-l-2 border-brand-dark-blue pl-6">
                        {data.history.map((event, index) => (
                          <div key={index} className="relative mb-8">
                            <div className="absolute -left-[35px] top-1 w-4 h-4 bg-brand-dark-blue rounded-full border-4 border-white"></div>
                            <p className="font-bold text-lg text-dark-text">{event.status}</p>
                            {event.explanation && (
                              <p className="text-md text-gray-600 mt-1">{event.explanation}</p>
                            )}
                            <p className="text-gray-500 mt-2">{event.location}</p>
                            <p className="text-sm text-gray-500 mt-1">{formatTimestamp(event.timestamp)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {!isLoading && !error && !data && (
              <div className="text-center text-gray-500 py-8">
                <p className="text-lg">Enter a tracking number above to see its status.</p>
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
