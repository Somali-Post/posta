import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/Hero';
import { POBoxHero } from '@/components/POBoxHero';
import { ReceivingServiceSection } from '@/components/ReceivingServiceSection';
import { RugPudo } from '@/components/RugPudo';
import { LogoCarousel } from '@/components/LogoCarousel';
import { AnimatedSection } from '@/components/AnimatedSection';

const HomePage = () => {
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
          <RugPudo />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
