import type { NextPage } from 'next';
import { Navbar } from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import TrackIcon from '@/src/components/icons/TrackIcon';

const TrackPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-light-gray flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-3xl mx-auto text-center bg-white p-8 sm:p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-somali-blue mb-4">
            Track Your Item
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Enter your 13-digit tracking number to see real-time updates on your shipment's journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="e.g., EE123456789XX"
              className="flex-grow w-full px-4 py-3 text-lg border-2 border-border-gray rounded-md focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition"
            />
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-somali-blue text-white font-bold text-lg rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              <TrackIcon className="w-6 h-6" />
              <span>Track</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackPage;
