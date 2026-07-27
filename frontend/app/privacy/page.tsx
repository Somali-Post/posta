import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How information is handled when you use the Somali Post website.",
};

const sections = [
  {
    title: "Information submitted through tracking",
    paragraphs: [
      "When you use the tracking service, the tracking number you enter is processed to retrieve available postal-event information.",
    ],
  },
  {
    title: "Basic website information",
    paragraphs: [
      "General page usage and performance information may be processed to support website reliability. It does not provide Somali Post with the contents of postal items.",
    ],
  },
  {
    title: "How information is used",
    paragraphs: [
      "Information is used to provide public guidance, respond to direct enquiries and display available tracking updates for supported international postal items.",
      "Tracking requests may be sent to postal tracking services so available event information can be returned.",
    ],
  },
  {
    title: "External services and links",
    paragraphs: [
      "External social-media links and the UPU Global Track & Trace service have their own privacy practices. Review those services before providing information.",
    ],
  },
  {
    title: "Data security and retention",
    paragraphs: [
      "Somali Post takes reasonable care when handling information submitted through this website, but no online service can be guaranteed to be risk-free.",
      "Tracking numbers may be processed for the time needed to respond to a request. Direct enquiries are retained only as needed for customer service and organisational records.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "This website is intended for general public postal guidance and is not directed at children.",
    ],
  },
  {
    title: "Policy changes and questions",
    paragraphs: [
      "Somali Post may update this policy when website services or public guidance change.",
      "For privacy questions, email postalservice@moct.gov.so, call +252 61 100 3239 or use WhatsApp.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Website policy"
      title="Privacy Policy"
      intro="This policy explains how information is handled when you use the Somali Post website."
      dateLabel="Last updated 14 July 2026"
      sections={sections}
    />
  );
}
