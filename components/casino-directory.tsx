"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Search, SlidersHorizontal, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import type { Casino, CasinoSortOption, CasinoTag } from "@/types/casino";

const filterTags: CasinoTag[] = [
  "Highest Bonus",
  "Fast Payout",
  "Crypto",
  "Low Wagering",
  "New"
];

const sortOptions: CasinoSortOption[] = [
  "Recommended",
  "Highest Rated",
  "Biggest Bonus"
];

function extractBonusAmount(casino: Casino) {
  const numbers = casino.bonusTitle.match(/\d+/g);
  if (!numbers) {
    return 0;
  }

  return Math.max(...numbers.map((value) => Number(value)));
}

interface CasinoDirectoryProps {
  casinos: Casino[];
  topPicks: Casino[];
}

export function CasinoDirectory({ casinos, topPicks }: CasinoDirectoryProps) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<CasinoTag[]>([]);
  const [sortBy, setSortBy] = useState<CasinoSortOption>("Recommended");

  const filteredAndSorted = useMemo(() => {
    const filtered = casinos.filter((casino) => {
      const matchesSearch = casino.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchesFilters =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => casino.tags.includes(tag));

      return matchesSearch && matchesFilters;
    });

    if (sortBy === "Highest Rated") {
      return [...filtered].sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Biggest Bonus") {
      return [...filtered].sort(
        (a, b) => extractBonusAmount(b) - extractBonusAmount(a)
      );
    }

    return filtered;
  }, [casinos, search, selectedTags, sortBy]);

  const toggleTag = (tag: CasinoTag) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((value) => value !== tag)
        : [...current, tag]
    );
  };

  return (
    <>
      <section id="top-bonuses" className="container py-16 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
              Highlighted Partners
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Top Bonus Picks</h2>
          </div>
          <Badge variant="warning" className="hidden md:inline-flex">
            18+ Responsible Play
          </Badge>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {topPicks.map((casino, index) => (
            <motion.div
              key={casino.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <Card className="h-full border-primary/30 bg-card/90">
                <CardHeader>
                  <div className="relative mb-4 h-16 w-full overflow-hidden rounded-2xl border border-border/40">
                    <Image
                      src={casino.logo}
                      alt={`${casino.name} Logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle>{casino.name}</CardTitle>
                    <span className="inline-flex items-center gap-1 text-sm text-amber-300">
                      <Star className="h-4 w-4 fill-current" />
                      {casino.rating.toFixed(1)}
                    </span>
                  </div>
                  <Badge className="w-fit">{casino.bonusTitle}</Badge>
                  <CardDescription>{casino.bonusDetails}</CardDescription>
                </CardHeader>
                <CardFooter className="gap-2">
                  <Button asChild className="flex-1">
                    <Link
                      href={casino.affiliateUrl}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                    >
                      Bonus sichern
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <CasinoDetailsDialog casino={casino} />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="casinos" className="container pb-16 sm:pb-24">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Casino Partner</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Transparente Reviews, schnelle Filter und direkte Bonus-Links für die Community.
            </p>
          </div>
          <Badge variant="outline" className="w-fit">
            Affiliate-Links: no extra cost
          </Badge>
        </div>

        <Card className="mb-8 border-border/60 bg-card/60">
          <CardContent className="pt-6">
            <div className="grid gap-4 lg:grid-cols-[1.2fr,auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
                <Input
                  aria-label="Casino nach Name suchen"
                  placeholder="Nach Casino suchen..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Sort: {sortBy}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {sortOptions.map((option) => (
                      <DropdownMenuItem key={option} onClick={() => setSortBy(option)}>
                        {option}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {filterTags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <Button
                    key={tag}
                    type="button"
                    variant={active ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => toggleTag(tag)}
                    aria-pressed={active}
                  >
                    {tag}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${search}-${selectedTags.join("-")}-${sortBy}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredAndSorted.map((casino) => (
              <Card key={casino.id} className="h-full border-border/60 bg-card/80">
                <CardHeader>
                  <div className="relative mb-4 h-16 overflow-hidden rounded-2xl border border-border/40">
                    <Image
                      src={casino.logo}
                      alt={`${casino.name} Logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle>{casino.name}</CardTitle>
                    <span className="inline-flex items-center gap-1 text-sm text-amber-300">
                      <Star className="h-4 w-4 fill-current" />
                      {casino.rating.toFixed(1)}
                    </span>
                  </div>
                  <Badge className="w-fit">{casino.bonusTitle}</Badge>
                  <CardDescription>{casino.bonusDetails}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {casino.benefits.slice(0, 4).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {casino.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Regionen & Sprachen
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {casino.regions.map((region) => (
                        <Badge key={region} variant="secondary">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild className="flex-1">
                    <Link
                      href={casino.affiliateUrl}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                    >
                      Bonus sichern
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <CasinoDetailsDialog casino={casino} />
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredAndSorted.length === 0 ? (
          <Card className="mt-6 border-dashed bg-card/50">
            <CardContent className="pt-6 text-sm text-muted-foreground">
              Keine Casinos für diese Suche/Filter gefunden. Entferne einzelne Filter und versuche es erneut.
            </CardContent>
          </Card>
        ) : null}
      </section>
    </>
  );
}

function CasinoDetailsDialog({ casino }: { casino: Casino }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Details</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[88vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{casino.name} - Review</DialogTitle>
          <DialogDescription>{casino.reviewLong}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 md:grid-cols-2">
          <Card className="border-border/60 bg-background/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Pros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0 text-sm">
              {casino.pros.map((pro) => (
                <p key={pro} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {pro}
                </p>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-background/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Cons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0 text-sm">
              {casino.cons.map((con) => (
                <p key={con} className="text-muted-foreground">
                  - {con}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60 bg-background/60">
          <CardContent className="grid gap-3 pt-6 text-sm sm:grid-cols-2">
            <MetaItem label="Wagering" value={casino.wagering} />
            <MetaItem label="Min Deposit" value={casino.minDeposit} />
            <MetaItem label="Payout Speed" value={casino.payoutSpeed} />
            <MetaItem
              label="Crypto"
              value={casino.crypto ? "Ja" : "Nein"}
            />
            <MetaItem
              label="Payment Methods"
              value={casino.paymentMethods.join(", ")}
              className="sm:col-span-2"
            />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

function MetaItem({
  label,
  value,
  className
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm text-foreground">{value}</p>
    </div>
  );
}
