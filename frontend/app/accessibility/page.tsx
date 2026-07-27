import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Somali Post's commitment to an accessible public-service website.",
};

const sections = [
  {
    title: "Accessibility commitment",
    paragraphs: [
      "Somali Post aims to provide clear public postal information that can be used across different devices, input methods and connection conditions.",
    ],
  },
  {
    title: "Measures implemented",
    items: [
      "Keyboard-accessible navigation and controls",
      "Visible focus states for links, buttons and form fields",
      "Responsive layouts for mobile, tablet and desktop screens",
      "Reduced-motion support",
      "Semantic headings, lists, forms and navigation landmarks",
      "Alternative text for meaningful images",
    ],
  },
  {
    title: "Keyboard navigation",
    paragraphs: [
      "Navigation menus, links, buttons and form controls can be reached and operated with a keyboard.",
    ],
  },
  {
    title: "Known limitations",
    paragraphs: [
      "Somali Post has not completed a formal accessibility audit. Some third-party pages linked from this website may follow different accessibility practices.",
    ],
  },
  {
    title: "Report an accessibility problem",
    paragraphs: [
      "If you find an accessibility problem, contact Somali Post by telephone, WhatsApp or email and describe the page, issue and device you were using.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <PolicyPage
      eyebrow="Inclusive public service"
      title="Accessibility Statement"
      intro="Somali Post aims to make this website usable by as many people as possible."
      dateLabel="Last reviewed 14 July 2026"
      sections={sections}
    />
  );
}
