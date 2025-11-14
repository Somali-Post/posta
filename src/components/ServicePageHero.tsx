// src/components/ServicePageHero.tsx

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
}

export const ServicePageHero = ({ title, subtitle }: ServicePageHeroProps) => {
  return (
    <section className="bg-somali-blue text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto opacity-90">{subtitle}</p>
      </div>
    </section>
  );
};
