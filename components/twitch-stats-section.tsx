"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ExternalLink,
  Gamepad2,
  Radio,
  Users,
  Video,
  WifiOff
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TwitchErrorResponse, TwitchSummary } from "@/types/twitch";

type FetchState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: TwitchSummary };

const numberFormatter = new Intl.NumberFormat("de-DE");

function formatDateTime(dateString: string | null) {
  if (!dateString) {
    return "Unbekannt";
  }

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(dateString));
}

export function TwitchStatsSection() {
  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    let mounted = true;

    async function loadSummary() {
      try {
        const response = await fetch("/api/twitch/summary", {
          method: "GET",
          cache: "no-store"
        });

        if (!response.ok) {
          const errorData = (await response.json()) as TwitchErrorResponse;
          throw new Error(errorData.message || "Twitch Daten momentan nicht verfuegbar");
        }

        const data = (await response.json()) as TwitchSummary;

        if (mounted) {
          setState({ status: "success", data });
        }
      } catch (error) {
        if (mounted) {
          setState({
            status: "error",
            message:
              error instanceof Error
                ? error.message
                : "Twitch Daten momentan nicht verfuegbar"
          });
        }
      }
    }

    loadSummary();

    return () => {
      mounted = false;
    };
  }, []);

  const liveBadge = useMemo(() => {
    if (state.status !== "success") {
      return null;
    }

    return state.data.isLive ? (
      <Badge variant="success" className="gap-1">
        <Activity className="h-3.5 w-3.5" /> LIVE
      </Badge>
    ) : (
      <Badge variant="outline" className="gap-1">
        <WifiOff className="h-3.5 w-3.5" /> OFFLINE
      </Badge>
    );
  }, [state]);

  return (
    <section id="twitch-stats" className="container pb-16 sm:pb-24">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
            Creator Media Kit
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Twitch Stats</h2>
        </div>
        {liveBadge}
      </div>

      {state.status === "loading" ? <LoadingState /> : null}
      {state.status === "error" ? <ErrorState message={state.message} /> : null}
      {state.status === "success" ? <SuccessState summary={state.data} /> : null}
    </section>
  );
}

function LoadingState() {
  return (
    <Card className="border-border/60 bg-card/70">
      <CardContent className="grid gap-5 pt-6 lg:grid-cols-[280px,1fr]">
        <div className="space-y-3">
          <Skeleton className="h-28 w-full rounded-3xl" />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-28 w-full rounded-2xl" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <Card className="border-destructive/40 bg-destructive/10">
      <CardHeader>
        <CardTitle className="text-xl">Twitch Daten momentan nicht verfuegbar</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Bitte spaeter erneut versuchen. Die Casino-Partnerdaten bleiben verfuegbar.
        </p>
      </CardContent>
    </Card>
  );
}

function SuccessState({ summary }: { summary: TwitchSummary }) {
  const liveTitle = summary.live?.title || "Aktuell offline";
  const liveGame = summary.live?.gameName || "Keine laufende Kategorie";
  const liveViewers =
    typeof summary.live?.viewerCount === "number"
      ? numberFormatter.format(summary.live.viewerCount)
      : "-";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-border/60 bg-card/75">
        <CardContent className="grid gap-6 pt-6 lg:grid-cols-[300px,1fr]">
          <Card className="border-border/50 bg-background/50">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={summary.profileImageUrl}
                  alt="Profilbild Leon_528"
                  width={112}
                  height={112}
                  className="rounded-full border border-border/60"
                />
                <h3 className="mt-4 text-xl font-semibold">{summary.channel}</h3>
                <p className="text-sm text-muted-foreground">Twitch Partner Creator</p>
                <Button asChild className="mt-4 w-full">
                  <Link
                    href="https://www.twitch.tv/leon_528"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kanal oeffnen
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="live" className="w-full">
            <TabsList>
              <TabsTrigger value="live">Live Stats</TabsTrigger>
              <TabsTrigger value="kit">Media Kit</TabsTrigger>
            </TabsList>

            <TabsContent value="live">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <StatCard
                  label="Follower"
                  value={
                    summary.followerCount !== null
                      ? numberFormatter.format(summary.followerCount)
                      : "Nicht verfuegbar"
                  }
                  icon={Users}
                />
                <StatCard
                  label="Live Viewers"
                  value={summary.isLive ? liveViewers : "Offline"}
                  icon={Radio}
                />
                <StatCard
                  label="Kategorie / Game"
                  value={liveGame}
                  icon={Gamepad2}
                />
                <StatCard label="Streamtitel" value={liveTitle} icon={Video} className="sm:col-span-2" />
                <StatCard
                  label="Zuletzt live"
                  value={formatDateTime(summary.lastStreamedAt)}
                  icon={Activity}
                  className="sm:col-span-2 xl:col-span-1"
                />
              </div>
            </TabsContent>

            <TabsContent value="kit">
              <Card className="border-border/50 bg-background/50">
                <CardContent className="grid gap-3 pt-6 text-sm text-muted-foreground">
                  <p>
                    Creator: <span className="font-semibold text-foreground">Leon_528</span>
                  </p>
                  <p>
                    Channel URL: <span className="font-semibold text-foreground">twitch.tv/leon_528</span>
                  </p>
                  <p>
                    Live Status: <span className="font-semibold text-foreground">{summary.isLive ? "Live" : "Offline"}</span>
                  </p>
                  <p>
                    Last Streamed: <span className="font-semibold text-foreground">{formatDateTime(summary.lastStreamedAt)}</span>
                  </p>
                  <p>
                    Follower Source: <span className="font-semibold text-foreground">{summary.followerCountSource}</span>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  className
}: {
  label: string;
  value: string;
  icon: typeof Activity;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <p className="text-sm font-medium leading-relaxed text-foreground">{value}</p>
          <Icon className="h-4 w-4 shrink-0 text-cyan-300" />
        </div>
      </CardContent>
    </Card>
  );
}