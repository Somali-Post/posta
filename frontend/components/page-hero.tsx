type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  status?: string;
};

export function PageHero({ eyebrow, title, intro, status }: PageHeroProps) {
  return (
    <section className="pageHero">
      <div className="shell pageHeroInner">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p className="pageHeroIntro">{intro}</p>
        </div>
        {status ? <p className="pageStatus">{status}</p> : null}
      </div>
    </section>
  );
}
