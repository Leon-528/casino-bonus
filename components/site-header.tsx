import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#casinos", label: "Casinos" },
  { href: "#top-bonuses", label: "Top Bonuses" },
  { href: "#twitch-stats", label: "Twitch Stats" },
  { href: "#faq", label: "FAQ" },
  { href: "/responsible-gaming", label: "Responsible Gaming" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.08em] text-foreground/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Startseite Leon 528 Bonus Partner"
        >
          LEON_528 BONUS
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Hauptnavigation">
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
            <Link href="#top-bonuses">Top Boni ansehen</Link>
          </Button>
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