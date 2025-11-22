'use client';

// src/components/RugPudo.tsx
import { Button } from './Button';
import { useTranslations } from '@/context/LanguageContext';

export const RugPudo = () => {
  const { rugPudo } = useTranslations();
  const highlights = [
    {
      title: 'Neighborhood Hubs',
      description: 'Supermarkets, pharmacies, and mom-and-pop stores become your drop-off and pickup points.',
    },
    {
      title: 'Digital Check-ins',
      description: 'Each parcel is scanned in the Rug Agent app, so you see when it arrives and who collected it.',
    },
    {
      title: 'Secure Codes',
      description: 'Recipients present a one-time pickup code, ensuring parcels never leave with the wrong person.',
    },
  ];

  const roadmap = [
    { step: '01', label: 'Pilot in Mogadishu', body: 'Founding partners are selected in the busiest districts.' },
    { step: '02', label: 'Nationwide Rollout', body: 'Every region receives a cluster of trained Rug PUDO shops.' },
    { step: '03', label: 'Two-way services', body: 'Send or receive items at the same point—true last‑mile coverage.' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-somali-blue via-brand-dark-blue to-[#031d4a] py-24 px-4 sm:px-8 text-white">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white/80">
              Rug PUDO Network
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">{rugPudo.heading}</h2>
            <p className="mt-4 text-lg text-white/80">{rugPudo.body}</p>

            <div className="mt-8 grid gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-white/80 mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                href="/pudo"
                className="bg-white !text-brand-dark-blue hover:bg-slate-100 transition-shadow duration-300 hover:shadow-xl"
              >
                {rugPudo.cta}
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            {roadmap.map((stage) => (
              <div
                key={stage.step}
                className="relative flex items-start gap-4 rounded-3xl bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold">
                  {stage.step}
                </div>
                <div>
                  <p className="text-lg font-semibold">{stage.label}</p>
                  <p className="text-sm text-white/80">{stage.body}</p>
                </div>
              </div>
            ))}

            <div className="rounded-3xl bg-gradient-to-r from-white/20 to-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <p className="text-sm uppercase tracking-widest text-white/70">Why it matters</p>
              <p className="text-2xl font-bold mt-2">Trust, traceability, and time saved.</p>
              <p className="text-white/80 mt-3">
                Every pickup and drop-off feeds live tracking data back to our main hub, so customers get instant SMS updates and our
                operations team sees the entire journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
