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

import { useLanguage } from "@/components/providers/language-provider";
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

function formatDateTime(dateString: string | null, locale: string, fallback: string) {
  if (!dateString) {
    return fallback;
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(dateString));
}

export function TwitchStatsSection() {
  const { language, text } = useLanguage();
  const [state, setState] = useState<FetchState>({ status: "loading" });

  const locale = language === "de" ? "de-DE" : "en-US";

  useEffect(() => {
    let mounted = true;

    async function loadSummary() {
      try {
        const response = await fetch("/api/twitch/summary", {
          method: "GET",
          cache: "no-store"
        });

        if (!response.ok) {
          await response.json() as TwitchErrorResponse;
          throw new Error(text.twitch.unavailableTitle);
        }

        const data = (await response.json()) as TwitchSummary;

        if (mounted) {
          setState({ status: "success", data });
        }
      } catch {
        if (mounted) {
          setState({
            status: "error",
            message: text.twitch.unavailableTitle
          });
        }
      }
    }

    loadSummary();

    return () => {
      mounted = false;
    };
  }, [text.twitch.unavailableTitle]);

  const liveBadge = useMemo(() => {
    if (state.status !== "success") {
      return null;
    }

    return state.data.isLive ? (
      <Badge variant="success" className="gap-1">
        <Activity className="h-3.5 w-3.5" /> {text.twitch.liveBadge}
      </Badge>
    ) : (
      <Badge variant="outline" className="gap-1">
        <WifiOff className="h-3.5 w-3.5" /> {text.twitch.offlineBadge}
      </Badge>
    );
  }, [state, text.twitch.liveBadge, text.twitch.offlineBadge]);

  return (
    <section id="twitch-stats" className="container pb-16 sm:pb-24">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
            {text.twitch.sectionTag}
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{text.twitch.sectionTitle}</h2>
        </div>
        {liveBadge}
      </div>

      {state.status === "loading" ? <LoadingState /> : null}
      {state.status === "error" ? (
        <ErrorState title={text.twitch.unavailableTitle} message={state.message} hint={text.twitch.unavailableHint} />
      ) : null}
      {state.status === "success" ? <SuccessState summary={state.data} locale={locale} /> : null}
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

function ErrorState({
  title,
  message,
  hint
}: {
  title: string;
  message: string;
  hint: string;
}) {
  return (
    <Card className="border-destructive/40 bg-destructive/10">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  );
}

function SuccessState({
  summary,
  locale
}: {
  summary: TwitchSummary;
  locale: string;
}) {
  const { text } = useLanguage();

  const numberFormatter = useMemo(() => new Intl.NumberFormat(locale), [locale]);

  const liveTitle = summary.live?.title || text.twitch.values.currentlyOffline;
  const liveGame = summary.live?.gameName || text.twitch.values.noCategory;
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
                <p className="text-sm text-muted-foreground">{text.twitch.profileRole}</p>
                <Button asChild className="mt-4 w-full">
                  <Link
                    href="https://www.twitch.tv/leon_528"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text.twitch.openChannel}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="live" className="w-full">
            <TabsList>
              <TabsTrigger value="live">{text.twitch.tabs.live}</TabsTrigger>
              <TabsTrigger value="kit">{text.twitch.tabs.kit}</TabsTrigger>
            </TabsList>

            <TabsContent value="live">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <StatCard
                  label={text.twitch.labels.follower}
                  value={
                    summary.followerCount !== null
                      ? numberFormatter.format(summary.followerCount)
                      : text.twitch.values.unavailable
                  }
                  icon={Users}
                />
                <StatCard
                  label={text.twitch.labels.liveViewers}
                  value={summary.isLive ? liveViewers : text.twitch.values.offline}
                  icon={Radio}
                />
                <StatCard
                  label={text.twitch.labels.categoryGame}
                  value={liveGame}
                  icon={Gamepad2}
                />
                <StatCard label={text.twitch.labels.streamTitle} value={liveTitle} icon={Video} className="sm:col-span-2" />
                <StatCard
                  label={text.twitch.labels.lastLive}
                  value={formatDateTime(summary.lastStreamedAt, locale, text.twitch.values.unknown)}
                  icon={Activity}
                  className="sm:col-span-2 xl:col-span-1"
                />
              </div>
            </TabsContent>

            <TabsContent value="kit">
              <Card className="border-border/50 bg-background/50">
                <CardContent className="grid gap-3 pt-6 text-sm text-muted-foreground">
                  <p>
                    {text.twitch.kit.creator}:{" "}
                    <span className="font-semibold text-foreground">Leon_528</span>
                  </p>
                  <p>
                    {text.twitch.kit.channelUrl}:{" "}
                    <span className="font-semibold text-foreground">twitch.tv/leon_528</span>
                  </p>
                  <p>
                    {text.twitch.kit.liveStatus}:{" "}
                    <span className="font-semibold text-foreground">
                      {summary.isLive ? text.twitch.liveBadge : text.twitch.offlineBadge}
                    </span>
                  </p>
                  <p>
                    {text.twitch.kit.lastStreamed}:{" "}
                    <span className="font-semibold text-foreground">
                      {formatDateTime(summary.lastStreamedAt, locale, text.twitch.values.unknown)}
                    </span>
                  </p>
                  <p>
                    {text.twitch.kit.followerSource}:{" "}
                    <span className="font-semibold text-foreground">{summary.followerCountSource}</span>
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
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <p className="text-sm font-medium leading-relaxed text-foreground">{value}</p>
          <Icon className="h-4 w-4 shrink-0 text-cyan-300" />
        </div>
      </CardContent>
    </Card>
  );
}
