"use client"; // This is required for using hooks like useState

import { useState } from 'react';
import type { NextPage } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import TrackIcon from '@/components/icons/TrackIcon';

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
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await fetch(`/api/track/${trackingId.trim()}`);

      if (!response.ok) {
        throw new Error('An error occurred while tracking the item.');
      }

      const result: TrackingData = await response.json();
      setData(result);
    } catch (err) {
      setError('Could not track the item. Please check the number and try again.');
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
            <h1 className="text-4xl font-bold text-somali-blue mb-2">Track Your Item</h1>
            <p className="text-lg text-gray-600 mb-6">Enter your tracking number below.</p>
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="e.g., CC850579694SE"
                className="flex-grow w-full px-4 py-3 text-lg border-2 border-border-gray rounded-md focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-somali-blue text-white font-bold text-lg rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100"
                disabled={isLoading}
              >
                <TrackIcon className="w-6 h-6" />
                <span>{isLoading ? 'Searching...' : 'Track'}</span>
              </button>
            </form>
          </div>

          {/* --- The Results Area --- */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {isLoading && <p className="text-center text-lg text-gray-600">Loading tracking details...</p>}

            {error && <p className="text-center text-lg text-red-600">{error}</p>}

            {data && (
              <div>
                {/* Not Found Message */}
                {data.status === 'Not Found' && <p className="text-center text-lg text-gray-700">{data.message}</p>}

                {/* Success Results */}
                {data.status !== 'Not Found' && (
                  <div>
                    <h2 className="text-3xl font-bold text-dark-text mb-6">
                      Tracking Details for <span className="text-somali-blue">{data.trackingId}</span>
                    </h2>

                    {/* Status Card */}
                    <div className="bg-somali-blue text-white p-6 rounded-lg mb-8">
                      <p className="text-lg uppercase tracking-wider">Current Status</p>
                      <p className="text-4xl font-bold">{data.status}</p>
                    </div>

                    {/* Route Summary */}
                    <div className="grid grid-cols-2 gap-4 text-center mb-8">
                      <div>
                        <p className="text-sm text-gray-500">Origin</p>
                        <p className="text-2xl font-bold">
                          {formatCountry(data.origin, data.originCode)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Destination</p>
                        <p className="text-2xl font-bold">
                          {formatCountry(data.destination, data.destinationCode)}
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <h3 className="text-2xl font-bold mb-4">Shipment History</h3>
                    <div className="border-l-2 border-somali-blue pl-6">
                      {data.history.map((event, index) => (
                        <div key={index} className="relative mb-6">
                          <div className="absolute -left-[34px] top-1 w-4 h-4 bg-somali-blue rounded-full border-4 border-white"></div>
                          <p className="font-bold text-lg text-dark-text">{event.status}</p>
                          <p className="text-gray-600">{event.location}</p>
                          <p className="text-sm text-gray-500">{formatTimestamp(event.timestamp)}</p>
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
