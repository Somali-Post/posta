// src/pages/index.tsx
import type { NextPage } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/Hero';
import { POBoxHero } from '@/components/POBoxHero';
import { ReceivingServiceSection } from '@/components/ReceivingServiceSection';
import { SixDAddress } from '@/components/SixDAddress';
import { RugPudo } from '@/components/RugPudo';
import { LogoCarousel } from '@/components/LogoCarousel';
import { AnimatedSection } from '@/components/AnimatedSection'; // Import the animation wrapper

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <LogoCarousel />
        </AnimatedSection>
        <AnimatedSection>
          <POBoxHero />
        </AnimatedSection>
        <AnimatedSection>
          <ReceivingServiceSection />
        </AnimatedSection>
        <AnimatedSection>
          <SixDAddress />
        </AnimatedSection>
        <AnimatedSection>
          <RugPudo />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
