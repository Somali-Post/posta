import { PageHero } from "@/components/page-hero";

type PolicySection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  dateLabel: string;
  sections: PolicySection[];
};

export function PolicyPage({
  eyebrow,
  title,
  intro,
  dateLabel,
  sections,
}: PolicyPageProps) {
  return (
    <main id="main-content">
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="sectionBlock">
        <div className="shell policyLayout">
          <aside>
            <p>{dateLabel}</p>
            <a href="mailto:postalservice@moct.gov.so">
              postalservice@moct.gov.so
            </a>
          </aside>
          <div className="policyContent">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
