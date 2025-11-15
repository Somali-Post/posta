// src/components/POBoxHero.tsx
import Link from 'next/link';
import { LockIcon } from './icons/LockIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { KeyIcon } from './icons/KeyIcon';

export const POBoxHero = () => {
  return (
    // The main container. We set the background image here.
    // `bg-fixed` is the Tailwind class that creates the parallax scroll effect.
    <section
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/images/po-box.jpg')" }}
    >
      {/* This div creates a semi-transparent dark overlay to make the text readable */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* The content card. 'relative z-10' places it above the overlay. */}
      <div className="relative z-10 bg-white text-dark-text w-11/12 max-w-2xl rounded-lg shadow-2xl border-4 border-somali-blue">
        <div className="p-8 sm:p-12">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-somali-blue leading-tight">
            Your Secure Address in Somalia
          </h2>

          {/* Sub-headline and CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xl font-semibold">
              P.O. Box Rentals<br />from Somali Post
            </p>
            <Link href="/services/po-box">
              <button className="bg-somali-blue text-white font-bold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap">
                RENT YOURS TODAY
              </button>
            </Link>
          </div>
        </div>

        {/* The three icons at the bottom */}
        <div className="border-t border-border-gray bg-light-gray grid grid-cols-3 gap-4 text-center p-4 rounded-b-md">
          <div className="flex items-center justify-center gap-2">
            <LockIcon className="w-6 h-6 text-somali-blue" />
            <span className="font-medium text-sm">Reliable & Safe</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <GlobeIcon className="w-6 h-6 text-somali-blue" />
            <span className="font-medium text-sm">Connects You Globally</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <KeyIcon className="w-6 h-6 text-somali-blue" />
            <span className="font-medium text-sm">Easy 24/7 Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
