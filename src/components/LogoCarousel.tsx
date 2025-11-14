// src/components/LogoCarousel.tsx
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const originalLogoFilenames = [
  '01', '02', '03', '04', '05', '06', '07', '08', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '20', '21',
  '22', '23', '24', '25', '26', '27', '30', '31', '32', '33',
  '34', '35', '36', '37'
].map(name => `${name}.png`);

export const LogoCarousel = () => {
  const [shuffledLogos, setShuffledLogos] = useState<string[]>([]);
  const [animationDuration, setAnimationDuration] = useState('60s');
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const array = [...originalLogoFilenames];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledLogos([...array, ...array]);
  }, []);

  useEffect(() => {
    if (carouselRef.current && shuffledLogos.length > 0) {
      const totalWidth = carouselRef.current.scrollWidth / 2;

      // --- THIS IS YOUR NEW SPEED CONTROL ---
      // We've increased this from 100 to 250.
      // A higher number means a FASTER animation.
      const pixelsPerSecond = 850;

      const duration = totalWidth / pixelsPerSecond;
      setAnimationDuration(`${duration.toFixed(2)}s`);
    }
  }, [shuffledLogos]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-somali-blue">
            Connecting with Postal Partners Worldwide
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Part of a global network of trusted postal operators.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex animate-infinite-scroll"
            style={{ animationDuration: animationDuration }}
          >
            {shuffledLogos.map((filename, index) => (
              <div key={index} className="flex-shrink-0 w-88 mx-3 h-40 flex items-center justify-center">
                <Image
                  src={`/images/logos/${filename}`}
                  alt={`Postal partner logo ${index}`}
                  width={320}
                  height={140}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
