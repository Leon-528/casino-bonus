import Link from "next/link";
import { AlertTriangle, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ResponsiblePreview() {
  return (
    <section id="responsible-gaming" className="container pb-16 sm:pb-24">
      <Card className="border-amber-500/30 bg-amber-500/10">
        <CardContent className="flex flex-col items-start gap-4 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
              <ShieldAlert className="h-4 w-4" />
              Responsible Gaming
            </p>
            <p className="text-sm text-amber-100/80">
              Nur für Erwachsene (18+). Setze Limits und spiele nur mit Geld, dessen Verlust du dir leisten kannst.
            </p>
          </div>
          <Button asChild variant="outline" className="border-amber-300/40 bg-transparent text-amber-100 hover:bg-amber-500/20">
            <Link href="/responsible-gaming">
              Mehr Infos
              <AlertTriangle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
