import { Reveal } from '@/components/ui/Reveal';

export function Section({
  eyebrow,
  title,
  children,
  className = '',
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <section className={`container-site ${compact ? 'py-12 md:py-14' : 'py-14 md:py-[4.5rem]'} ${className}`}>
      <div className="max-w-4xl">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-gold-500">{eyebrow}</p>
          )}
          <h2 className="text-balance text-[clamp(1.75rem,3vw,2.45rem)] font-bold leading-tight tracking-tight text-navy-950">
            {title}
          </h2>
        </Reveal>
      </div>
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-surface-soft">
      <div className="container-site pb-16 pt-12">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="mb-3 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-gold-500">{eyebrow}</p>
          )}
          <h1 className="text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-navy-950">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-ink-muted md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl border border-border bg-white p-6 shadow-card md:p-7 ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-navy-950">
      {children}
    </span>
  );
}
