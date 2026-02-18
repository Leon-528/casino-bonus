import type { Metadata } from "next";

import { CasinoDirectory } from "@/components/casino-directory";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ResponsiblePreview } from "@/components/responsible-preview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TwitchStatsSection } from "@/components/twitch-stats-section";
import { casinos, topPickIds } from "@/data/casinos";

export const metadata: Metadata = {
  title: "Leon528 Bonus & Partner | Casino Bonuses + Twitch Stats",
  description:
    "Exclusive casino partner bonuses for the Leon528 community with transparent terms and live Twitch media kit data.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const topPicks = topPickIds
    .map((pickId) => casinos.find((casino) => casino.id === pickId))
    .filter((casino): casino is (typeof casinos)[number] => Boolean(casino));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <CasinoDirectory casinos={casinos} topPicks={topPicks} />
        <TwitchStatsSection />
        <FaqSection />
        <ResponsiblePreview />
      </main>
      <SiteFooter />
    </div>
  );
}
