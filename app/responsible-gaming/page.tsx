import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BadgeAlert, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Responsible Gaming | Leon_528 Bonus & Partner",
  description:
    "Responsible Gaming Richtlinien, 18+ Hinweis und Affiliate Disclosure fuer die Leon_528 Bonus & Partner Seite.",
  alternates: {
    canonical: "/responsible-gaming"
  }
};

const principles = [
  "Spiele nur mit einem festen Budget und setze vorab klare Limits.",
  "Niemals Verlusten hinterherjagen (No Chasing).",
  "Nutze Reality Checks, Session-Limits und Selbstausschluss-Optionen.",
  "Lege regelmaessige Pausen ein und spiele nicht unter Stress.",
  "Such dir Hilfe, sobald Spielen Druck oder finanzielle Probleme ausloest."
];

export default function ResponsibleGamingPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container space-y-8">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurueck zur Startseite
          </Link>
        </Button>

        <section className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
            <BadgeAlert className="h-4 w-4" />
            Responsible Gaming & 18+
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Verantwortungsbewusst spielen</h1>
          <p className="max-w-3xl text-muted-foreground">
            Gluecksspiel ist Unterhaltung und kein Weg zu sicherem Einkommen. Spiele nur, wenn du volljaehrig bist (18+) und deine finanzielle Situation stabil bleibt.
          </p>
        </section>

        <Card className="border-border/60 bg-card/70">
          <CardHeader>
            <CardTitle>Grundsaetze fuer sicheres Spielen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {principles.map((principle) => (
              <p key={principle} className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{principle}</span>
              </p>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/70">
          <CardHeader>
            <CardTitle>Affiliate Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Diese Website enthaelt Affiliate-Links. Wenn du ueber einen Partner-Link spielst, kann eine Provision an den Betreiber/Creator ausgezahlt werden.
            </p>
            <p>
              Fuer Nutzer entstehen dadurch keine zusaetzlichen Kosten. Empfehlungen ersetzen keine eigene Pruefung von Lizenz, Bedingungen und Bonusregeln.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-500/40 bg-amber-500/10">
          <CardContent className="pt-6 text-sm text-amber-100/90">
            Falls du das Gefuehl hast, die Kontrolle zu verlieren, stoppe sofort und suche professionelle Hilfe in deinem Land.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}