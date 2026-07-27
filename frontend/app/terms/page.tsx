import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Somali Post website.",
};

const sections = [
  {
    title: "Purpose of the website",
    paragraphs: [
      "This website provides public information about Somali Post services, contact routes, tracking guidance and postal address guidance.",
    ],
  },
  {
    title: "Accuracy of public guidance",
    paragraphs: [
      "Somali Post aims to keep public guidance clear and current. Service requirements, fees and arrangements should be confirmed directly when they affect a customer decision.",
    ],
  },
  {
    title: "Tracking information",
    paragraphs: [
      "Tracking results reflect available postal events for supported international postal items and may not show every stage immediately.",
    ],
  },
  {
    title: "Service availability",
    paragraphs: [
      "Services and contact arrangements may vary depending on postal operations, transport, customs requirements and customer information provided with an item.",
    ],
  },
  {
    title: "Website availability",
    paragraphs: [
      "Somali Post aims to keep this website available, but access may be interrupted by maintenance, connectivity issues or circumstances outside Somali Post control.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: [
      "Do not misuse this website, interfere with its operation, attempt unauthorised access or submit information that is false, harmful or unlawful.",
    ],
  },
  {
    title: "External links",
    paragraphs: [
      "This website may link to official social-media accounts and external postal resources. Those services operate under their own terms and practices.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The Somali Post name, logo, content and design materials belong to Somali Post or are used with permission.",
    ],
  },
  {
    title: "Changes and questions",
    paragraphs: [
      "Somali Post may update these terms when services, website features or public guidance change.",
      "For questions, email postalservice@moct.gov.so, call +252 61 100 3239 or use WhatsApp.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Website policy"
      title="Terms of Use"
      intro="These terms explain how the Somali Post website may be used."
      dateLabel="Last updated 14 July 2026"
      sections={sections}
    />
  );
}
