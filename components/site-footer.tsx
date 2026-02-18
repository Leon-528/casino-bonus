import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/90">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          Affiliate Disclosure: Diese Seite enthält Partner-Links. 18+ only. Bitte spiele verantwortungsvoll.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/responsible-gaming" className="hover:text-foreground">
            Responsible Gaming
          </Link>
          <span>Terms & Bonusbedingungen gelten je Anbieter.</span>
        </div>
      </div>
    </footer>
  );
}
