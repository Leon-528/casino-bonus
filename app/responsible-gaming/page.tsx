import type { Metadata } from "next";

import { ResponsibleGamingPageContent } from "@/components/responsible-gaming-page-content";

export const metadata: Metadata = {
  title: "Responsible Gaming | Leon_528 Bonus & Partner",
  description:
    "Responsible gaming guidelines, affiliate disclosure, and 18+ policy for the Leon_528 Bonus & Partner site.",
  alternates: {
    canonical: "/responsible-gaming"
  }
};

export default function ResponsibleGamingPage() {
  return <ResponsibleGamingPageContent />;
}
