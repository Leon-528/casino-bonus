import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqItems = [
  {
    question: "Sind das Affiliate-Links?",
    answer:
      "Ja. Bei einer Registrierung ueber Partner-Links kann eine Provision an den Creator gehen. Fuer dich entstehen keine Zusatzkosten."
  },
  {
    question: "Warum unterscheiden sich Bonusbedingungen?",
    answer:
      "Jeder Anbieter hat eigene Regeln zu Wagering, Max-Bet und Auszahlungsgrenzen. Vor der Einzahlung immer die T&C pruefen."
  },
  {
    question: "Was bedeutet Wagering?",
    answer:
      "Wagering ist die Anzahl, wie oft ein Bonus umgesetzt werden muss, bevor eine Auszahlung moeglich ist."
  },
  {
    question: "Wie schnell sind Auszahlungen?",
    answer:
      "Je nach Zahlungsart und Verifizierung liegen Auszahlungen meist zwischen wenigen Stunden und 72 Stunden."
  },
  {
    question: "Wie transparent sind die Empfehlungen?",
    answer:
      "Die Bewertungen sind redaktionell aufbereitet. Partnerstatus hat keinen Einfluss auf die Anzeige von API-Live-Daten oder Sicherheits-Hinweisen."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="container pb-16 sm:pb-24">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">FAQ</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Transparenz & Bedingungen</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {faqItems.map((item) => (
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