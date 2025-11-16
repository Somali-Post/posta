// src/components/POBoxHero.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import { LockIcon } from './icons/LockIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { BuildingIcon } from './icons/BuildingIcon';

export const POBoxHero = () => {
  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/images/po-box.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* The new, persuasive content card */}
      <div className="relative z-10 bg-white text-dark-text w-11/12 max-w-2xl rounded-lg shadow-2xl">
        <div className="p-8 sm:p-12 text-center">
          
          {/* Logo for Authority */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <Image src="/images/somali-post-logo.png" alt="Somali Post Logo" width={40} height={40} />
            <span className="font-semibold text-gray-600">The Official Somali National Postal Service</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-brand-dark-blue leading-tight">
            Your Secure Address in Somalia
          </h2>

          {/* New Persuasive Subtitle */}
          <p className="text-xl mt-6 mb-8 max-w-lg mx-auto">
            Protect your privacy and establish a permanent, professional address. Secure your mail with the nation's trusted postal service.
          </p>

          {/* Call to Action Button */}
          <Button href="/services/po-box">
            RENT YOURS TODAY
          </Button>

        </div>
        
        {/* The updated icon bar */}
        <div className="border-t border-border-gray bg-light-gray grid grid-cols-3 gap-4 text-center p-4 rounded-b-md">
          <div className="flex items-center justify-center gap-2">
            <LockIcon className="w-6 h-6 text-brand-dark-blue" />
            <span className="font-medium text-sm">Reliable & Safe</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <GlobeIcon className="w-6 h-6 text-brand-dark-blue" />
            <span className="font-medium text-sm">Connects You Globally</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <BuildingIcon className="w-6 h-6 text-brand-dark-blue" />
            <span className="font-medium text-sm">Professional Address</span>
          </div>
        </div>
      </div>
    </section>
  );
};