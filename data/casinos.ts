import type { Casino } from "@/types/casino";

export const casinos: Casino[] = [
  {
    id: "northstar-casino",
    name: "Northstar Casino",
    logo: "/logos/northstar.svg",
    rating: 4.9,
    bonusTitle: "200% bis EUR500 + 100 Freispiele",
    bonusDetails: "Ideal fuer High-Roller mit VIP Cashback und taeglicher Reload Option.",
    benefits: [
      "48h Express Verifizierung",
      "Treueprogramm mit Weekly Cashback",
      "Premium Live Dealer Studio",
      "24/7 deutschsprachiger Support"
    ],
    regions: ["DE", "AT", "CH", "EU"],
    tags: ["Highest Bonus", "Fast Payout"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Bank Transfer", "Paysafecard"],
    affiliateUrl: "https://partner.northstar.example/leon_528",
    reviewLong:
      "Northstar liefert ein starkes Gesamtpaket mit sehr solider Bonusstruktur und klaren Bedingungen. Besonders positiv ist die Kombination aus schneller Auszahlung und transparentem VIP-System.",
    pros: [
      "Sehr hohe Erstbonus-Obergrenze",
      "Schneller KYC Prozess",
      "Stabile Mobil-Performance"
    ],
    cons: ["Live Chat nur auf Englisch in der Nacht", "Weniger eSports Wettmaerkte"],
    wagering: "35x Bonus",
    minDeposit: "EUR20",
    payoutSpeed: "0-24 Stunden",
    crypto: false
  },
  {
    id: "atlas-spins",
    name: "Atlas Spins",
    logo: "/logos/atlas.svg",
    rating: 4.7,
    bonusTitle: "100% bis EUR1000 + 150 Freispiele",
    bonusDetails: "Starker Match-Bonus mit optionalem Risk-Free Weekend fuer neue Spieler.",
    benefits: [
      "Hoher Max Cashout bei Bonus",
      "Woechentliche Slot-Races",
      "Breites Pragmatic und Hacksaw Portfolio",
      "Schneller In-App Support"
    ],
    regions: ["DE", "AT", "EU"],
    tags: ["Highest Bonus", "Crypto"],
    paymentMethods: ["SEPA", "Skrill", "Jeton", "BTC", "ETH", "LTC"],
    affiliateUrl: "https://atlas.partners.example/l528",
    reviewLong:
      "Atlas Spins punktet mit grosszuegiger Bonusstruktur und vielen Turnierformaten. Fuer Crypto-Fans ist die Auswahl an Wallet-Optionen ueberdurchschnittlich gut.",
    pros: ["Sehr hoher Bonusdeckel", "Viele Promotions", "Starke Crypto-Optionen"],
    cons: ["Onboarding etwas textlastig"],
    wagering: "40x Bonus",
    minDeposit: "EUR25",
    payoutSpeed: "24-48 Stunden",
    crypto: true
  },
  {
    id: "neon-reef",
    name: "Neon Reef",
    logo: "/logos/neonreef.svg",
    rating: 4.8,
    bonusTitle: "150% bis EUR400 + 200 Freispiele",
    bonusDetails: "Balanciertes Paket mit niedrigen Einsatzlimits fuer entspannte Sessions.",
    benefits: [
      "Niedrige Mindestwette bei Bonus",
      "Intuitive Lobby mit Smart Filter",
      "Schnelle mobile Ladezeiten",
      "Turnierkalender mit ROI Fokus"
    ],
    regions: ["DE", "AT", "CH"],
    tags: ["Low Wagering", "New"],
    paymentMethods: ["Visa", "Sofort", "Trustly", "Paysafecard"],
    affiliateUrl: "https://go.neonreef.example/leon",
    reviewLong:
      "Neon Reef richtet sich an Spieler, die transparente Regeln und kurze Wege moegen. Die Benutzerfuehrung ist modern und das Bonus-Wagering fair gestaltet.",
    pros: ["Nutzerfreundliches Interface", "Niedrige Bonusanforderung", "Sehr gute FAQ"],
    cons: ["Noch kleineres Live-Game Angebot"],
    wagering: "25x Bonus",
    minDeposit: "EUR10",
    payoutSpeed: "6-24 Stunden",
    crypto: false
  },
  {
    id: "titan-vault",
    name: "Titan Vault",
    logo: "/logos/titan.svg",
    rating: 4.6,
    bonusTitle: "250 Freispiele + 20% Weekly Cashback",
    bonusDetails: "Cashback-first Modell fuer regelmaessige Slot Sessions.",
    benefits: [
      "Fester Cashback Slot jede Woche",
      "Transparente T&C in Kurzform",
      "Gute RTP-Filter je Spiel",
      "Treuepunkte ohne Ablauf"
    ],
    regions: ["DE", "EU"],
    tags: ["Fast Payout", "Low Wagering"],
    paymentMethods: ["Skrill", "Neteller", "SEPA", "Apple Pay"],
    affiliateUrl: "https://titanvault.aff.example/leon_528",
    reviewLong:
      "Titan Vault hat eine klare Cashback-Strategie und eignet sich gut fuer loyale Spieler. Besonders stark: schnelle Auszahlungen und faire Bedingungen beim Bonus.",
    pros: ["Stabiles Cashback", "Saubere UX", "Schneller Support"],
    cons: ["Weniger Exklusivspiele"],
    wagering: "28x Freispiele",
    minDeposit: "EUR15",
    payoutSpeed: "0-12 Stunden",
    crypto: false
  },
  {
    id: "sapphire-ace",
    name: "Sapphire Ace",
    logo: "/logos/sapphire.svg",
    rating: 4.5,
    bonusTitle: "75% bis EUR600 + 50 Freispiele",
    bonusDetails: "Konservativer Bonus, dafuer starke Banking-Optionen und hohe Limits.",
    benefits: [
      "VIP Manager ab Level 2",
      "Hohe monatliche Auszahlungslimits",
      "Starke Turnierstruktur",
      "Viele Provider fuer klassische Slots"
    ],
    regions: ["DE", "AT", "CH", "EU"],
    tags: ["Fast Payout"],
    paymentMethods: ["SEPA", "Skrill", "Revolut", "Bank Transfer"],
    affiliateUrl: "https://sapphireace.media/leon528",
    reviewLong:
      "Sapphire Ace ist besonders fuer Spieler interessant, die auf Zahlungsflexibilitaet und hohe Limits achten. Das Bonusangebot ist kleiner, dafuer sehr transparent.",
    pros: ["Starke Banking-Infra", "Solider RTP Mix", "Schnelle Support-Reaktion"],
    cons: ["Kein Crypto", "Weniger Free-Spins-Deals"],
    wagering: "30x Bonus",
    minDeposit: "EUR20",
    payoutSpeed: "12-36 Stunden",
    crypto: false
  },
  {
    id: "volt-vegas",
    name: "Volt Vegas",
    logo: "/logos/volt.svg",
    rating: 4.8,
    bonusTitle: "120% bis EUR700 + 80 Freispiele",
    bonusDetails: "Crypto-freundliches Casino mit schnellen Wallet-Auszahlungen.",
    benefits: [
      "Instant Wallet Cashout fuer ausgew. Coins",
      "Moderne Live-Lobby",
      "Woechentliche Community Challenges",
      "Klares Bonus-Dashboard"
    ],
    regions: ["DE", "EU", "LATAM"],
    tags: ["Crypto", "Fast Payout", "New"],
    paymentMethods: ["BTC", "ETH", "USDT", "Visa", "Skrill"],
    affiliateUrl: "https://partners.voltvegas.example/leon_528",
    reviewLong:
      "Volt Vegas kombiniert moderne UX mit starkem Crypto-Fokus. Vor allem die klaren Wallet-Flows und schnellen Auszahlungen machen die Plattform fuer Tech-affine Nutzer attraktiv.",
    pros: ["Sehr gute Crypto Experience", "Schnelle Auszahlung", "Modernes Design"],
    cons: ["Regional eingeschraenkte Promotions"],
    wagering: "32x Bonus",
    minDeposit: "EUR15",
    payoutSpeed: "0-6 Stunden",
    crypto: true
  },
  {
    id: "crimson-crown",
    name: "Crimson Crown",
    logo: "/logos/crimson.svg",
    rating: 4.4,
    bonusTitle: "300 Freispiele ohne Einzahlung",
    bonusDetails: "No-Deposit Fokus mit anschliessendem Match-Bonus fuer Neukunden.",
    benefits: [
      "Gratis Spins fuer Start",
      "Uebersichtliche Bonushistorie",
      "Stabile App auf Android/iOS",
      "Live Support mit kurzer Wartezeit"
    ],
    regions: ["DE", "AT", "EU"],
    tags: ["New", "Highest Bonus"],
    paymentMethods: ["Visa", "Mastercard", "Trustly", "Paysafecard"],
    affiliateUrl: "https://crimson.media.example/l528",
    reviewLong:
      "Crimson Crown setzt stark auf Neukundenaktivierung mit grosszuegigem Spin-Angebot. Das Angebot ist gut fuer Casual Sessions, bei High-Roller Features jedoch begrenzter.",
    pros: ["Viele kostenlose Spins", "Schnelles Signup", "Gute mobile App"],
    cons: ["Mittlere Auszahlungsgeschwindigkeit", "Weniger VIP Optionen"],
    wagering: "45x Freispiele",
    minDeposit: "EUR10",
    payoutSpeed: "24-72 Stunden",
    crypto: false
  },
  {
    id: "orbit-nine",
    name: "Orbit Nine",
    logo: "/logos/orbit.svg",
    rating: 4.7,
    bonusTitle: "110% bis EUR550 + 125 Freispiele",
    bonusDetails: "Starkes Gesamtpaket mit fairem Wagering und guter Spielauswahl.",
    benefits: [
      "Ausgewogene Bonuskonditionen",
      "Sehr gute Responsible-Gaming Tools",
      "Monatliche Reload-Promos",
      "Live-Limits fuer gutes Bankroll-Management"
    ],
    regions: ["DE", "CH", "EU"],
    tags: ["Low Wagering", "Crypto"],
    paymentMethods: ["Visa", "SEPA", "BTC", "ETH", "Payz"],
    affiliateUrl: "https://orbitnine.partners.example/leon_528",
    reviewLong:
      "Orbit Nine ist ein klarer Allrounder mit sehr brauchbaren Responsible-Gaming Features. Das macht die Plattform besonders fuer langfristig orientierte Spieler interessant.",
    pros: ["Sehr faire Bonusregeln", "Crypto + Fiat", "Gute Session-Kontrolle"],
    cons: ["Weniger exklusive Jackpot Slots"],
    wagering: "26x Bonus",
    minDeposit: "EUR20",
    payoutSpeed: "6-24 Stunden",
    crypto: true
  }
];

export const topPickIds = ["northstar-casino", "neon-reef", "volt-vegas"];