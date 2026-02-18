"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-200">
            BONI, PARTNER & MEDIA KIT
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
            Exklusive Casino-Boni fuer die Leon_528 Community
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Diese Seite enthaelt Affiliate-Links. 18+ only. Bitte verantwortungsvoll spielen und Bonusbedingungen immer vorab pruefen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#top-bonuses">Top Boni ansehen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link
                href="https://www.twitch.tv/leon_528"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auf Twitch anschauen
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Transparente Partnerhinweise
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-2">
              <AlertTriangle className="h-4 w-4 text-amber-300" />
              Gambling kann suchterzeugend sein
            </span>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="rounded-full border border-border/60 bg-background/40 px-4 py-2 font-semibold text-foreground transition-colors hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Affiliate Disclosure Info"
                  >
                    Affiliate Disclosure
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-left">
                  Wir koennen eine Provision erhalten, wenn du ueber einen Link spielst. Das verursacht fuer dich keine Zusatzkosten.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>
      </div>
    </section>
  );
}