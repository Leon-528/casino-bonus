"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FaqSection() {
  const { text } = useLanguage();

  return (
    <section id="faq" className="container pb-16 sm:pb-24">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
          {text.faq.sectionTag}
        </p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{text.faq.sectionTitle}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {text.faq.items.map((item) => (
          <Card key={item.question} className="border-border/60 bg-card/70">
            <CardHeader>
              <CardTitle className="text-lg">{item.question}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{item.answer}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
