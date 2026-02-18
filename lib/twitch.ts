import "server-only";

import type { TwitchSummary } from "@/types/twitch";

const TWITCH_OAUTH_URL = "https://id.twitch.tv/oauth2/token";
const TWITCH_HELIX_BASE = "https://api.twitch.tv/helix";
const TOKEN_EXPIRY_BUFFER_MS = 60_000;

interface TokenCache {
  token: string;
  expiresAt: number;
}

interface SummaryCache {
  data: TwitchSummary;
  expiresAt: number;
}

interface HelixEnvelope<T> {
  data: T[];
  total?: number;
}

interface HelixUser {
  id: string;
  display_name: string;
  profile_image_url: string;
}

interface HelixStream {
  viewer_count: number;
  game_name: string;
  title: string;
  started_at: string;
}

interface HelixVideo {
  created_at: string;
  published_at?: string;
}

interface TokenResponse {
  access_token: string;
  expires_in: number;
}

type FollowerSource = "channels/followers" | "users/follows" | "unavailable";

class TwitchApiError extends Error {
  readonly status: number;
  readonly endpoint: string;

  constructor(message: string, status: number, endpoint: string) {
    super(message);
    this.status = status;
    this.endpoint = endpoint;
  }
}

let tokenCache: TokenCache | null = null;
let summaryCache: SummaryCache | null = null;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getChannelLogin(): string {
  return process.env.TWITCH_CHANNEL_LOGIN?.trim() || "leon_528";
}

function getClientId(): string {
  return requireEnv("TWITCH_CLIENT_ID");
}

function canReuseToken(cache: TokenCache | null): cache is TokenCache {
  return Boolean(cache && Date.now() < cache.expiresAt - TOKEN_EXPIRY_BUFFER_MS);
}

function canReuseSummary(cache: SummaryCache | null): cache is SummaryCache {
  return Boolean(cache && Date.now() < cache.expiresAt);
}

export async function getAppAccessToken(): Promise<string> {
  if (canReuseToken(tokenCache)) {
    return tokenCache.token;
  }

  const clientId = getClientId();
  const clientSecret = requireEnv("TWITCH_CLIENT_SECRET");

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials"
  });

  const response = await fetch(TWITCH_OAUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body,
    cache: "no-store"
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Unable to fetch Twitch app token (${response.status}): ${errorText}`);
  }

  const tokenPayload = (await response.json()) as TokenResponse;

  tokenCache = {
    token: tokenPayload.access_token,
    expiresAt: Date.now() + tokenPayload.expires_in * 1000
  };

  return tokenCache.token;
}

async function twitchRequest<T>(endpoint: string): Promise<T> {
  const token = await getAppAccessToken();
  const clientId = getClientId();

  const response = await fetch(`${TWITCH_HELIX_BASE}${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Client-Id": clientId
    },
    cache: "no-store"
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new TwitchApiError(
      `Twitch request failed (${response.status}) at ${endpoint}: ${errorText}`,
      response.status,
      endpoint
    );
  }

  return (await response.json()) as T;
}

async function getFollowerCountWithFallback(
  broadcasterId: string
): Promise<{ count: number | null; source: FollowerSource }> {
  try {
    const followers = await twitchRequest<HelixEnvelope<unknown>>(
      `/channels/followers?broadcaster_id=${encodeURIComponent(broadcasterId)}`
    );

    if (typeof followers.total === "number") {
      return { count: followers.total, source: "channels/followers" };
    }
  } catch (error) {
    if (
      error instanceof TwitchApiError &&
      [401, 403, 404].includes(error.status)
    ) {
      // Fall through to legacy official endpoint fallback.
    } else {
      console.warn("Follower request failed without fallback", error);
      return { count: null, source: "unavailable" };
    }
  }

  try {
    const legacyFollowers = await twitchRequest<HelixEnvelope<unknown>>(
      `/users/follows?to_id=${encodeURIComponent(broadcasterId)}&first=1`
    );

    if (typeof legacyFollowers.total === "number") {
      return { count: legacyFollowers.total, source: "users/follows" };
    }
  } catch (legacyError) {
    console.warn("Legacy followers fallback unavailable", legacyError);
  }

  return { count: null, source: "unavailable" };
}

export async function fetchTwitchSummary(channelLogin = getChannelLogin()): Promise<TwitchSummary> {
  const normalizedLogin = channelLogin.toLowerCase();

  const userData = await twitchRequest<HelixEnvelope<HelixUser>>(
    `/users?login=${encodeURIComponent(normalizedLogin)}`
  );

  const user = userData.data[0];

  if (!user) {
    throw new Error(`Twitch channel not found: ${normalizedLogin}`);
  }

  const [streamResponse, followers, videosResponse] = await Promise.all([
    twitchRequest<HelixEnvelope<HelixStream>>(
      `/streams?user_id=${encodeURIComponent(user.id)}`
    ),
    getFollowerCountWithFallback(user.id),
    twitchRequest<HelixEnvelope<HelixVideo>>(
      `/videos?user_id=${encodeURIComponent(user.id)}&first=1&type=archive`
    ).catch((error) => {
      console.warn("Unable to fetch archived videos for last-streamed fallback", error);
      return { data: [] } as HelixEnvelope<HelixVideo>;
    })
  ]);

  const stream = streamResponse.data[0];
  const isLive = Boolean(stream);

  const lastArchivedVideo = videosResponse.data[0];
  const lastStreamedAt = isLive
    ? stream.started_at
    : lastArchivedVideo?.created_at ?? lastArchivedVideo?.published_at ?? null;

  return {
    channel: user.display_name,
    profileImageUrl: user.profile_image_url,
    followerCount: followers.count,
    isLive,
    live: stream
      ? {
          title: stream.title,
          gameName: stream.game_name,
          viewerCount: stream.viewer_count,
          startedAt: stream.started_at
        }
      : null,
    lastStreamedAt,
    followerCountSource: followers.source
  };
}

export async function getCachedTwitchSummary(cacheTtlSeconds = 120): Promise<TwitchSummary> {
  if (canReuseSummary(summaryCache)) {
    return summaryCache.data;
  }

  const data = await fetchTwitchSummary();

  summaryCache = {
    data,
    expiresAt: Date.now() + cacheTtlSeconds * 1000
  };

  return data;
}