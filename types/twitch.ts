export interface TwitchLiveData {
  title: string;
  gameName: string;
  viewerCount: number;
  startedAt: string;
}

export interface TwitchSummary {
  channel: string;
  profileImageUrl: string;
  followerCount: number | null;
  isLive: boolean;
  live: TwitchLiveData | null;
  lastStreamedAt: string | null;
  followerCountSource: "channels/followers" | "users/follows" | "unavailable";
}

export interface TwitchErrorResponse {
  message: string;
}