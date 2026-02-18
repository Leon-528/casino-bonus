import type { Casino } from "@/types/casino";

export type LocalizedCasinoCopy = Pick<
  Casino,
  "bonusTitle" | "bonusDetails" | "benefits" | "reviewLong" | "pros" | "cons"
>;

export const casinoEnglishCopy: Record<string, LocalizedCasinoCopy> = {
  "northstar-casino": {
    bonusTitle: "200% up to EUR500 + 100 Free Spins",
    bonusDetails:
      "Ideal for high rollers with VIP cashback and daily reload opportunities.",
    benefits: [
      "Express verification within 48h",
      "Loyalty program with weekly cashback",
      "Premium live dealer studio",
      "24/7 support in German and English"
    ],
    reviewLong:
      "Northstar delivers a strong all-round package with a solid bonus structure and transparent terms. The combination of quick payouts and a clear VIP system is a major advantage.",
    pros: [
      "Very high first-bonus ceiling",
      "Fast KYC process",
      "Excellent mobile performance"
    ],
    cons: ["Live chat support is English-only during nighttime", "Limited eSports markets"]
  },
  "atlas-spins": {
    bonusTitle: "100% up to EUR1000 + 150 Free Spins",
    bonusDetails:
      "Strong match bonus with an optional risk-free weekend for new players.",
    benefits: [
      "High max cashout on bonuses",
      "Weekly slot races",
      "Broad Pragmatic and Hacksaw portfolio",
      "Fast in-app support"
    ],
    reviewLong:
      "Atlas Spins stands out with generous bonus mechanics and frequent tournament formats. For crypto-focused players, the available wallet options are above average.",
    pros: ["Very high bonus cap", "Frequent promotions", "Strong crypto options"],
    cons: ["Onboarding feels a bit text-heavy"]
  },
  "neon-reef": {
    bonusTitle: "150% up to EUR400 + 200 Free Spins",
    bonusDetails:
      "Balanced package with low bet requirements for relaxed sessions.",
    benefits: [
      "Low minimum bet on bonus play",
      "Intuitive lobby with smart filters",
      "Fast mobile loading times",
      "Tournament calendar with ROI focus"
    ],
    reviewLong:
      "Neon Reef is built for players who value transparent rules and short paths to action. The user flow feels modern and the bonus wagering is fair.",
    pros: ["User-friendly interface", "Low wagering requirement", "Great FAQ quality"],
    cons: ["Smaller live-game selection for now"]
  },
  "titan-vault": {
    bonusTitle: "250 Free Spins + 20% Weekly Cashback",
    bonusDetails: "Cashback-first model for regular slot sessions.",
    benefits: [
      "Fixed weekly cashback window",
      "Transparent terms in compact form",
      "Strong RTP filters per game",
      "Loyalty points without expiry"
    ],
    reviewLong:
      "Titan Vault follows a clear cashback strategy and suits loyal players. Key strengths are fast withdrawals and fair bonus conditions.",
    pros: ["Reliable cashback model", "Clean UX", "Responsive support"],
    cons: ["Fewer exclusive games"]
  },
  "sapphire-ace": {
    bonusTitle: "75% up to EUR600 + 50 Free Spins",
    bonusDetails:
      "Conservative bonus model with strong banking options and high limits.",
    benefits: [
      "Dedicated VIP manager from level 2",
      "High monthly withdrawal limits",
      "Strong tournament structure",
      "Large provider mix for classic slots"
    ],
    reviewLong:
      "Sapphire Ace is especially attractive for players who care about payment flexibility and high limits. The bonus is more conservative but very transparent.",
    pros: ["Strong banking infrastructure", "Solid RTP mix", "Fast support responses"],
    cons: ["No crypto support", "Fewer free-spin deals"]
  },
  "volt-vegas": {
    bonusTitle: "120% up to EUR700 + 80 Free Spins",
    bonusDetails: "Crypto-friendly casino with fast wallet withdrawals.",
    benefits: [
      "Instant wallet cashout for selected coins",
      "Modern live lobby",
      "Weekly community challenges",
      "Clear bonus dashboard"
    ],
    reviewLong:
      "Volt Vegas combines modern UX with a strong crypto focus. Wallet flows are very clean and withdrawals are fast, making it attractive for tech-savvy users.",
    pros: ["Excellent crypto experience", "Very fast payouts", "Modern design"],
    cons: ["Promotions can be region-limited"]
  },
  "crimson-crown": {
    bonusTitle: "300 No-Deposit Free Spins",
    bonusDetails:
      "No-deposit focus with a follow-up match bonus for new users.",
    benefits: [
      "Free spins to get started",
      "Clear bonus history overview",
      "Stable app performance on Android/iOS",
      "Live support with short waiting times"
    ],
    reviewLong:
      "Crimson Crown focuses heavily on new-player activation via generous spin offers. It works well for casual play, but high-roller features are more limited.",
    pros: ["Many free spins", "Fast signup process", "Strong mobile app"],
    cons: ["Medium payout speed", "Fewer VIP features"]
  },
  "orbit-nine": {
    bonusTitle: "110% up to EUR550 + 125 Free Spins",
    bonusDetails:
      "Strong all-round package with fair wagering and good game variety.",
    benefits: [
      "Balanced bonus terms",
      "Excellent responsible-gaming tools",
      "Monthly reload promotions",
      "Live limits for healthy bankroll management"
    ],
    reviewLong:
      "Orbit Nine is a true all-rounder with practical responsible-gaming controls. That makes it particularly suitable for long-term and structured play styles.",
    pros: ["Very fair bonus terms", "Crypto + fiat support", "Great session controls"],
    cons: ["Fewer exclusive jackpot slots"]
  }
};
