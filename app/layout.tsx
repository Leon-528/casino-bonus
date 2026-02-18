import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Leon_528 Bonus & Partner",
    template: "%s | Leon_528"
  },
  description:
    "Premium Bonus & Partner Landingpage für die Leon_528 Community mit Twitch Live-Stats und Responsible Gaming Fokus.",
  keywords: [
    "Leon_528",
    "Twitch Streamer",
    "Casino Boni",
    "Affiliate",
    "Responsible Gaming"
  ],
  openGraph: {
    title: "Leon_528 Bonus & Partner",
    description:
      "Exklusive Boni für die Community plus Live Twitch-Statistiken direkt aus der Twitch API.",
    type: "website",
    locale: "de_DE"
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon_528 Bonus & Partner",
    description:
      "Exklusive Boni für die Community plus Live Twitch-Statistiken direkt aus der Twitch API."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${sora.variable} ${spaceMono.variable} min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="leon-528-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
