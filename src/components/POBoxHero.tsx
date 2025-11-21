import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import { LockIcon } from './icons/LockIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { BuildingIcon } from './icons/BuildingIcon'; // The correct icon

export const POBoxHero = () => {
  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/images/po-box.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* The final "credit card" style container */}
      <div className="relative z-10 bg-white text-dark-text w-11/12 max-w-3xl rounded-lg shadow-2xl overflow-hidden">
        
        {/* --- THE FIX (Part 1): Repositioned Watermark --- 
            It is now centered and behind the main text for better visibility. */}
        <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src="/images/somali-post-logo.png" 
              alt="Somali Post Watermark" 
              width={250} 
              height={250} 
              className="opacity-5 pointer-events-none" 
            />
        </div>
        
        {/* All content is now relative to allow the watermark to sit behind it */}
        <div className="relative">
          <div className="p-8 sm:p-12 text-center">
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-brand-dark-blue leading-tight">
              Your Secure Address in Somalia
            </h2>

            {/* Concise tagline */}
            <p className="text-xl mt-4 mb-8 max-w-lg mx-auto text-gray-700">
              The private, permanent, and professional address from Somalia's most trusted postal service.
            </p>

            {/* Call to Action Button */}
            <Button href="/services/po-box">
              RENT YOURS TODAY
            </Button>
          </div>
          
          {/* The icon bar with the correct icon */}
          <div className="border-t border-border-gray bg-light-gray grid grid-cols-3 gap-4 text-center p-4">
            <div className="flex items-center justify-center gap-2">
              <LockIcon className="w-6 h-6 text-brand-dark-blue" />
              <span className="font-medium text-sm">Reliable & Safe</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <GlobeIcon className="w-6 h-6 text-brand-dark-blue" />
              <span className="font-medium text-sm">Connects You Globally</span>
            </div>
            {/* --- THE FIX (Part 2): Using the correct 'BuildingIcon' --- */}
            <div className="flex items-center justify-center gap-2">
              <BuildingIcon className="w-6 h-6 text-brand-dark-blue" />
              <span className="font-medium text-sm">Professional Address</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
