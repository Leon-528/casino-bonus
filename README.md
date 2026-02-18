# Leon_528 Bonus & Partner Landingpage

Modernes Next.js Landingpage-Projekt fuer einen Twitch Slot Streamer mit Live-Twitch-Media-Kit und Partner-Casino-Directory.

## Features

- Next.js App Router + TypeScript + Tailwind + shadcn/ui
- Premium Landingpage (Dark Mode default, Light Toggle, subtile Framer Motion Animationen)
- Sticky Navigation mit Sections: Casinos, Top Bonuses, Twitch Stats, FAQ, Responsible Gaming
- Casino-Grid mit:
  - Suche
  - Multi-Filter (`Highest Bonus`, `Fast Payout`, `Crypto`, `Low Wagering`, `New`)
  - Sortierung (`Recommended`, `Highest Rated`, `Biggest Bonus`)
  - Detail-Dialog (Pros/Cons, Wagering, Min Deposit, Payout Speed, Zahlungsarten)
- Twitch Media Kit mit echten API Daten:
  - Follower
  - Live/Offline
  - Kategorie/Game + Titel (wenn live)
  - Viewer Count (wenn live)
  - Last Streamed (fallback ueber `videos`)
  - Profilbild + Kanal-Link
- Sauberer Fehlerzustand ohne Mockdaten: `Twitch Daten momentan nicht verfuegbar`
- Vercel-ready inkl. Node runtime in Route Handler

## Tech Stack

- Next.js 14.2.x (App Router)
- TypeScript
- Tailwind CSS 3
- shadcn/ui Komponenten (Card, Button, Badge, Tabs, Dialog, Tooltip, Skeleton, DropdownMenu)
- lucide-react
- framer-motion

## Projektstruktur

- `app/page.tsx` - Startseite
- `app/responsible-gaming/page.tsx` - Responsible Gaming + Disclosure
- `app/api/twitch/summary/route.ts` - Twitch Summary API
- `lib/twitch.ts` - Twitch Auth, Requests, Caches
- `data/casinos.ts` - Casino Daten (mind. 8)
- `types/twitch.ts` / `types/casino.ts` - Typen

## Environment Variablen

Lokal:

```powershell
Copy-Item .env.example .env.local
```

Danach die Platzhalter in `.env.local` ersetzen:

```env
TWITCH_CLIENT_ID="dein_client_id"
TWITCH_CLIENT_SECRET="dein_client_secret"
TWITCH_CHANNEL_LOGIN="leon_528"
```

Vercel:

- `Project Settings -> Environment Variables`
- dieselben 3 Keys eintragen

## Twitch API Implementierung

Der Endpoint `GET /api/twitch/summary` nutzt:

1. `GET /helix/users?login=leon_528`
2. `GET /helix/streams?user_id=<id>`
3. `GET /helix/channels/followers?broadcaster_id=<id>`
4. `GET /helix/videos?user_id=<id>&first=1&type=archive`

### Caching

- App Access Token wird serverseitig in-memory gecacht bis kurz vor Ablauf.
- Summary wird serverseitig 120 Sekunden in-memory gecacht.
- Route Header: `Cache-Control: s-maxage=120, stale-while-revalidate=120`.

### Follower Endpoint Hinweis

`/channels/followers` kann je nach Token-Setup eingeschraenkt sein. Deshalb ist ein offizieller Fallback auf `/users/follows?to_id=<id>` implementiert.

Wenn beide Varianten nicht verfuegbar sind, wird **kein Fake-Wert** angezeigt, sondern `followerCount = null` (UI: "Nicht verfuegbar").

## Lokal starten

```bash
npm install
npm run dev
```

Build testen:

```bash
npm run build
```

## Vercel Deployment

1. GitHub Repo erstellen und Code pushen.
2. In Vercel `Add New -> Project` und Repo importieren.
3. Unter `Project Settings -> Environment Variables` setzen:
   - `TWITCH_CLIENT_ID`
   - `TWITCH_CLIENT_SECRET`
   - `TWITCH_CHANNEL_LOGIN` (Wert: `leon_528`)
4. Deploy ausloesen.

Danach pruefen:

- `/` laedt normal
- `/api/twitch/summary` liefert JSON
- Twitch Stats Section zeigt Live-Daten oder sauberen Error State

## Hinweise

- Casino Daten in `data/casinos.ts` sind statisch (beabsichtigt).
- Twitch Kennzahlen in der UI werden **nicht** hardcoded gerendert.
- Bitte nur fuer 18+ Zielgruppen einsetzen und lokale rechtliche Vorgaben beachten.
