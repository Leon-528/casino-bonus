"use client";

import Link from "next/link";
import { ArrowLeft, BadgeAlert, ShieldCheck } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResponsibleGamingPageContent() {
  const { text } = useLanguage();

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container space-y-8">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {text.responsiblePage.backToHome}
          </Link>
        </Button>

        <section className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
            <BadgeAlert className="h-4 w-4" />
            {text.responsiblePage.badge}
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">{text.responsiblePage.title}</h1>
          <p className="max-w-3xl text-muted-foreground">{text.responsiblePage.intro}</p>
        </section>

        <Card className="border-border/60 bg-card/70">
          <CardHeader>
            <CardTitle>{text.responsiblePage.principlesTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {text.responsiblePage.principles.map((principle) => (
              <p key={principle} className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-300" />
                <span>{principle}</span>
              </p>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/70">
          <CardHeader>
            <CardTitle>{text.responsiblePage.disclosureTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>{text.responsiblePage.disclosureTextOne}</p>
            <p>{text.responsiblePage.disclosureTextTwo}</p>
          </CardContent>
        </Card>

        <Card className="border-amber-500/40 bg-amber-500/10">
          <CardContent className="pt-6 text-sm text-amber-100/90">
            {text.responsiblePage.warning}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
