// src/pages/index.tsx
import type { NextPage } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/Hero';
import { HomeServices } from '@/components/HomeServices';
import { SixDAddress } from '@/components/SixDAddress';
import { RugPudo } from '@/components/RugPudo';
import { LogoCarousel } from '@/components/LogoCarousel'; // Import the new component

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
