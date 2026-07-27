import type { Metadata } from "next";
import { Bell, MapPin, Package, Store, UserCheck } from "lucide-react";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "RUG PUDO",
  description:
    "Information about Somali Post's planned pickup and drop-off network.",
};

const intentions = [
  { icon: MapPin, title: "Convenient collection points" },
  { icon: Store, title: "Convenient drop-off points" },
  { icon: UserCheck, title: "Customer collection coordination" },
  { icon: Package, title: "Wider access as the network develops" },
];

export default function RugPudoPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Future service development"
        title="RUG PUDO"
        intro="Somali Post's planned pickup and drop-off network is being developed to make postal collection and dispatch more convenient."
        status="In development — not yet live"
      />

      <section className="noticeBand warningNotice">
        <div className="shell noticeBandInner">
          <Bell size={22} aria-hidden="true" />
          <div>
            <h2>This service is not currently available</h2>
            <p>
              Locations, operating procedures and launch information will be
              published before the network opens to customers.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="shell">
          <div className="sectionHeading splitHeading">
            <div>
              <p className="sectionLabel">Planned customer benefits</p>
              <h2>What RUG PUDO is intended to provide</h2>
            </div>
            <p>
              This information describes the planned direction and is not a live
              operational promise.
            </p>
          </div>
          <div className="fourColumn">
            {intentions.map((item) => {
              const Icon = item.icon;
              return (
                <article className="plainPanel" key={item.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{item.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sectionBlock paleSection">
        <div className="shell twoColumn">
          <div>
            <p className="sectionLabel">Planned journey</p>
            <h2>How the service would work</h2>
          </div>
          <ol className="numberedList">
            <li>
              <span>1</span>
              Customer selects or is directed to a participating point.
            </li>
            <li>
              <span>2</span>
              The postal item is routed to the appropriate point.
            </li>
            <li>
              <span>3</span>
              The customer is contacted when the item is ready.
            </li>
            <li>
              <span>4</span>
              Identification or collection requirements are completed.
            </li>
          </ol>
        </div>
      </section>

      <ContactBand
        title="Follow confirmed service updates"
        text="Use Somali Post's official contact routes and social accounts for verified launch information."
      />
    </main>
  );
}
