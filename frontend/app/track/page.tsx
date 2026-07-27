import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { TrackingForm } from "@/components/tracking-form";

export const metadata: Metadata = {
  title: "Track an Item",
  description:
    "Track supported international postal items using a 13-character S10 tracking number.",
};

export default async function TrackPage({
  searchParams,
}: {
  searchParams: Promise<{ number?: string }>;
}) {
  const { number = "" } = await searchParams;

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Postal tracking"
        title="Track an Item"
        intro="Enter a 13-character S10 tracking number to view available updates for supported international postal items."
      />
      <section className="sectionBlock compactTop">
        <div className="shell narrowShell">
          <TrackingForm initialValue={number} />
          <div className="trackingGuidance">
            <div>
              <h2>No tracking update is available?</h2>
              <p>
                The item may not have arrived in Somalia yet or a participating
                postal operator may not have supplied a supported event.
              </p>
            </div>
            <a
              href="https://globaltracktrace.ptc.post/gtt.web/"
              target="_blank"
              rel="noreferrer"
            >
              UPU Global Track &amp; Trace
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
