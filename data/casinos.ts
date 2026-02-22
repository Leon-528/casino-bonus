import type { Casino } from "@/types/casino";

const slotoroAffiliateUrl =
  "https://slotorooffer.com/l/6998a4086231718ce603c752?sub_id=%7Bsub_id_1%7D&click_id=%7Bclick_id%7D";

const soonBenefits = ["SOON", "SOON", "SOON", "SOON"];

function createSoonPlaceholder(id: string): Casino {
  return {
    id,
    name: "SOON",
    logo: "/logos/soon.svg",
    rating: 0,
    bonusTitle: "SOON",
    bonusDetails: "SOON",
    benefits: soonBenefits,
    regions: ["SOON"],
    tags: ["New"],
    paymentMethods: ["SOON"],
    affiliateUrl: slotoroAffiliateUrl,
    reviewLong: "SOON",
    pros: ["SOON"],
    cons: ["SOON"],
    wagering: "SOON",
    minDeposit: "SOON",
    payoutSpeed: "SOON",
    crypto: false
  };
}

export const casinos: Casino[] = [
  {
    id: "slotoro",
    name: "SLOTORO",
    logo: "/logos/slotoro.svg",
    rating: 4.9,
    bonusTitle: "100% bis EUR150 + 100 Freispiele",
    bonusDetails:
      "Exklusiver Slotoro-Deal fuer die Community mit starkem Willkommenspaket und klarem Bonus-Flow.",
    benefits: [
      "100 Freispiele als Welcome-Extra",
      "Schneller Account-Start auf Desktop und Mobile",
      "Regelmaessige Promo-Aktionen und Reloads",
      "Uebersichtliche Bonusanzeige im Konto"
    ],
    regions: ["DE", "AT", "CH", "EU"],
    tags: ["Highest Bonus", "New"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Paysafecard"],
    affiliateUrl: slotoroAffiliateUrl,
    reviewLong:
      "Slotoro bietet ein fokussiertes Bonusangebot mit solidem Einstieg und einfacher Navigation. Besonders stark ist der schnelle Onboarding-Prozess inklusive klarer Bonusdarstellung.",
    pros: ["Starker Welcome-Bonus", "Saubere mobile Nutzerfuehrung", "Klare Bonuskommunikation"],
    cons: ["Aktionsumfang kann je Region variieren", "Bonusbedingungen vor Aktivierung pruefen"],
    wagering: "Gemaess Bonusbedingungen",
    minDeposit: "EUR20",
    payoutSpeed: "Bis zu 24 Stunden",
    crypto: false
  },
  createSoonPlaceholder("soon-2"),
  createSoonPlaceholder("soon-3"),
  createSoonPlaceholder("soon-4"),
  createSoonPlaceholder("soon-5"),
  createSoonPlaceholder("soon-6"),
  createSoonPlaceholder("soon-7"),
  createSoonPlaceholder("soon-8")
];

export const topPickIds = ["slotoro", "soon-2", "soon-3"];
