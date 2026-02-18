"use client";

import Link from "next/link";

import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { text } = useLanguage();

  const navItems = [
    { href: "#casinos", label: text.header.casinos },
    { href: "#top-bonuses", label: text.header.topBonuses },
    { href: "#twitch-stats", label: text.header.twitchStats },
    { href: "#faq", label: text.header.faq },
    { href: "/responsible-gaming", label: text.header.responsibleGaming }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.08em] text-foreground/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={text.header.homeAriaLabel}
        >
          LEON528 BONUS
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label={text.header.navAriaLabel}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="#top-bonuses">{text.header.topBonusesCta}</Link>
          </Button>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <div className="container flex gap-2 overflow-x-auto pb-4 lg:hidden">
        {navItems.map((item) => (
          <Button key={item.label} asChild variant="outline" size="sm" className="shrink-0">
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </header>
  );
}
