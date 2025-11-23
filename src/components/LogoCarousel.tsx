'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useId, useState } from 'react';
import { useTranslations } from '@/context/LanguageContext';

type PartnerLogo = {
  file: string;
  name: string;
};

const partnerLogos: PartnerLogo[] = [
  { file: '01.png', name: 'Canada Post' },
  { file: '02.png', name: 'La Poste (France)' },
  { file: '03.png', name: 'Hongkong Post' },
  { file: '04.png', name: 'Japan Post' },
  { file: '05.png', name: 'Pakistan Post' },
  { file: '06.png', name: 'Saudi Post Logistics' },
  { file: '07.png', name: 'Swiss Post' },
  { file: '08.png', name: 'Royal Mail' },
  { file: '09.png', name: 'An Post (Ireland)' },
  { file: '10.png', name: 'Australia Post' },
  { file: '11.png', name: 'China Post' },
  { file: '12.png', name: 'Deutsche Post' },
  { file: '13.png', name: 'India Post' },
  { file: '14.png', name: 'La Poste de Djibouti' },
  { file: '15.png', name: 'Pos Malaysia' },
  { file: '16.png', name: 'South African Post Office' },
  { file: '17.png', name: 'Tanzania Posta' },
  { file: '18.png', name: 'United States Postal Service' },
  { file: '19.png', name: 'Posta Kenya' },
  { file: '20.png', name: 'Bahrain Post' },
  { file: '21.png', name: 'Maldives Post' },
  { file: '22.png', name: 'Ghana Post' },
  { file: '23.png', name: 'Pos Indonesia' },
  { file: '24.png', name: 'New Zealand Post' },
  { file: '25.png', name: 'Poșta Română' },
  { file: '26.png', name: 'Korea Post' },
  { file: '27.png', name: 'Turkish PTT' },
  { file: '28.png', name: 'Emirates Post Group' },
  { file: '29.png', name: 'Qatar Post' },
  { file: '30.png', name: 'Correios (Brazil)' },
  { file: '31.png', name: 'Egypt Post' },
  { file: '32.png', name: 'Ethiopost' },
  { file: '33.png', name: 'Poste Italiane' },
  { file: '34.png', name: 'Nigerian Postal Service' },
  { file: '35.png', name: 'La Poste Tunisienne' },
  { file: '36.png', name: 'PostNord' },
  { file: '37.png', name: 'Ukrposhta' },
];

const LOGO_CARD_WIDTH = 220;
const LOGO_CARD_HEIGHT = 110;
const pixelsPerSecond = 220;

const createLogoSequence = (seed: number) => {
  const pool = [...partnerLogos];
  let state = seed || 1;
  for (let i = pool.length - 1; i > 0; i -= 1) {
    state = (state * 48271) % 2147483647;
    const j = state % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return [...pool, ...pool];
};

export const LogoCarousel = () => {
  const { logoCarousel } = useTranslations();
  const [animationDuration, setAnimationDuration] = useState('60s');
  const carouselRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();
  const seed = useMemo(() => uniqueId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0), [uniqueId]);
  const logos = useMemo(() => createLogoSequence(seed), [seed]);

  useEffect(() => {
    const measure = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth / 2;
        if (totalWidth > 0) {
          const duration = totalWidth / pixelsPerSecond;
          setAnimationDuration(`${duration.toFixed(2)}s`);
        }
      }
    };

    const raf = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, [logos]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-somali-blue">{logoCarousel.heading}</h2>
        <p className="text-lg text-gray-600 mt-2">{logoCarousel.description}</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] px-4">
          <div
            ref={carouselRef}
            className="flex animate-infinite-scroll"
            style={{ animationDuration }}
          >
            {logos.map((logo, index) => (
              <div
                key={`${logo.file}-${index}`}
                className="mx-3 flex flex-shrink-0 items-center justify-center rounded-xl border border-border-gray bg-white/80 shadow-sm"
                style={{ width: LOGO_CARD_WIDTH, height: LOGO_CARD_HEIGHT }}
              >
                <Image
                  src={`/images/logos/${logo.file}`}
                  alt={`${logoCarousel.altPrefix}: ${logo.name}`}
                  width={LOGO_CARD_WIDTH}
                  height={LOGO_CARD_HEIGHT}
                  sizes={`${LOGO_CARD_WIDTH}px`}
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
