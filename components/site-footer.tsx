"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";

export function SiteFooter() {
  const { text } = useLanguage();

  return (
    <footer className="border-t border-border/60 bg-background/90">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>{text.footer.disclosure}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/responsible-gaming" className="hover:text-foreground">
            {text.footer.responsibleGaming}
          </Link>
          <span>{text.footer.terms}</span>
        </div>
      </div>
    </footer>
  );
}
