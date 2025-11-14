// src/pages/index.tsx
import type { NextPage } from 'next';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Hero } from '@/src/components/Hero';
import { HomeServices } from '@/src/components/HomeServices';
import { SixDAddress } from '@/src/components/SixDAddress';
import { RugPudo } from '@/src/components/RugPudo';
import { LogoCarousel } from '@/src/components/LogoCarousel'; // Import the new component

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel /> {/* Replace OurStory with LogoCarousel */}
        <HomeServices />
        <SixDAddress />
        <RugPudo />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
