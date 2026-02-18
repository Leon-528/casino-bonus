import { NextResponse } from "next/server";

import { getCachedTwitchSummary } from "@/lib/twitch";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const summary = await getCachedTwitchSummary(30);

    return NextResponse.json(summary, {
      status: 200,
      headers: {
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    console.error("Failed to load Twitch summary", error);

    return NextResponse.json(
      { message: "Twitch Daten momentan nicht verfügbar" },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  }
}
