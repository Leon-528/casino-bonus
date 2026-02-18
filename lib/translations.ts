import type { Language } from "@/types/language";

export const translations = {
  de: {
    header: {
      homeAriaLabel: "Startseite Leon528 Bonus Partner",
      navAriaLabel: "Hauptnavigation",
      casinos: "Casinos",
      topBonuses: "Top Bonuses",
      twitchStats: "Twitch Stats",
      faq: "FAQ",
      responsibleGaming: "Responsible Gaming",
      topBonusesCta: "Top Boni ansehen"
    },
    language: {
      label: "Sprache wechseln",
      german: "Deutsch",
      english: "Englisch"
    },
    theme: {
      label: "Theme wechseln",
      dark: "Dunkel",
      light: "Hell",
      system: "System"
    },
    hero: {
      badge: "BONI, PARTNER & MEDIA KIT",
      headline: "Exklusive Casino-Boni für die Leon528 Community",
      subtext:
        "Diese Seite enthält Affiliate-Links. 18+ only. Bitte verantwortungsvoll spielen und Bonusbedingungen immer vorab prüfen.",
      primaryCta: "Top Boni ansehen",
      secondaryCta: "Auf Twitch anschauen",
      transparentLabel: "Transparente Partnerhinweise",
      warningLabel: "Gambling kann suchterzeugend sein",
      disclosureLabel: "Affiliate Disclosure",
      disclosureTooltip:
        "Wir können eine Provision erhalten, wenn du über einen Link spielst. Das verursacht für dich keine Zusatzkosten."
    },
    casino: {
      highlightedPartners: "Highlighted Partners",
      topBonusPicks: "Top Bonus Picks",
      responsiblePlay: "18+ Responsible Play",
      sectionTitle: "Casino Partner",
      sectionDescription:
        "Transparente Reviews, schnelle Filter und direkte Bonus-Links für die Community.",
      affiliateHint: "Affiliate-Links: no extra cost",
      searchAriaLabel: "Casino nach Name suchen",
      searchPlaceholder: "Nach Casino suchen...",
      sortPrefix: "Sort:",
      sortOptions: {
        recommended: "Empfohlen",
        highestRated: "Höchste Bewertung",
        biggestBonus: "Größter Bonus"
      },
      tagLabels: {
        "Highest Bonus": "Highest Bonus",
        "Fast Payout": "Fast Payout",
        Crypto: "Crypto",
        "Low Wagering": "Low Wagering",
        New: "Neu"
      },
      tagsTitle: "Tags",
      regionsTitle: "Regionen & Sprachen",
      bonusCta: "Bonus sichern",
      detailsCta: "Details",
      noResults:
        "Keine Casinos für diese Suche/Filter gefunden. Entferne einzelne Filter und versuche es erneut.",
      reviewTitleSuffix: "Review",
      prosTitle: "Pros",
      consTitle: "Cons",
      labels: {
        wagering: "Wagering",
        minDeposit: "Min Deposit",
        payoutSpeed: "Payout Speed",
        crypto: "Crypto",
        paymentMethods: "Payment Methods"
      },
      yes: "Ja",
      no: "Nein"
    },
    twitch: {
      sectionTag: "Creator Media Kit",
      sectionTitle: "Twitch Stats",
      liveBadge: "LIVE",
      offlineBadge: "OFFLINE",
      unavailableTitle: "Twitch Daten momentan nicht verfügbar",
      unavailableHint:
        "Bitte später erneut versuchen. Die Casino-Partnerdaten bleiben verfügbar.",
      profileRole: "Twitch Partner Creator",
      openChannel: "Kanal öffnen",
      tabs: {
        live: "Live Stats",
        kit: "Media Kit"
      },
      labels: {
        follower: "Follower",
        liveViewers: "Live Viewers",
        categoryGame: "Kategorie / Game",
        streamTitle: "Streamtitel",
        lastLive: "Zuletzt live"
      },
      values: {
        unknown: "Unbekannt",
        offline: "Offline",
        noCategory: "Keine laufende Kategorie",
        currentlyOffline: "Aktuell offline",
        unavailable: "Nicht verfügbar"
      },
      kit: {
        creator: "Creator",
        channelUrl: "Channel URL",
        liveStatus: "Live Status",
        lastStreamed: "Last Streamed",
        followerSource: "Follower Source"
      }
    },
    faq: {
      sectionTag: "FAQ",
      sectionTitle: "Transparenz & Bedingungen",
      items: [
        {
          question: "Sind das Affiliate-Links?",
          answer:
            "Ja. Bei einer Registrierung über Partner-Links kann eine Provision an den Creator gehen. Für dich entstehen keine Zusatzkosten."
        },
        {
          question: "Warum unterscheiden sich Bonusbedingungen?",
          answer:
            "Jeder Anbieter hat eigene Regeln zu Wagering, Max-Bet und Auszahlungsgrenzen. Vor der Einzahlung immer die T&C prüfen."
        },
        {
          question: "Was bedeutet Wagering?",
          answer:
            "Wagering ist die Anzahl, wie oft ein Bonus umgesetzt werden muss, bevor eine Auszahlung möglich ist."
        },
        {
          question: "Wie schnell sind Auszahlungen?",
          answer:
            "Je nach Zahlungsart und Verifizierung liegen Auszahlungen meist zwischen wenigen Stunden und 72 Stunden."
        },
        {
          question: "Wie transparent sind die Empfehlungen?",
          answer:
            "Die Bewertungen sind redaktionell aufbereitet. Partnerstatus hat keinen Einfluss auf die Anzeige von API-Live-Daten oder Sicherheits-Hinweisen."
        }
      ]
    },
    responsiblePreview: {
      badge: "Responsible Gaming",
      text:
        "Nur für Erwachsene (18+). Setze Limits und spiele nur mit Geld, dessen Verlust du dir leisten kannst.",
      button: "Mehr Infos"
    },
    footer: {
      disclosure:
        "Affiliate Disclosure: Diese Seite enthält Partner-Links. 18+ only. Bitte spiele verantwortungsvoll.",
      responsibleGaming: "Responsible Gaming",
      terms: "Terms & Bonusbedingungen gelten je Anbieter."
    },
    responsiblePage: {
      backToHome: "Zurück zur Startseite",
      badge: "Responsible Gaming & 18+",
      title: "Verantwortungsbewusst spielen",
      intro:
        "Glücksspiel ist Unterhaltung und kein Weg zu sicherem Einkommen. Spiele nur, wenn du volljährig bist (18+) und deine finanzielle Situation stabil bleibt.",
      principlesTitle: "Grundsätze für sicheres Spielen",
      principles: [
        "Spiele nur mit einem festen Budget und setze vorab klare Limits.",
        "Niemals Verlusten hinterherjagen (No Chasing).",
        "Nutze Reality Checks, Session-Limits und Selbstausschluss-Optionen.",
        "Lege regelmäßige Pausen ein und spiele nicht unter Stress.",
        "Such dir Hilfe, sobald Spielen Druck oder finanzielle Probleme auslöst."
      ],
      disclosureTitle: "Affiliate Disclosure",
      disclosureTextOne:
        "Diese Website enthält Affiliate-Links. Wenn du über einen Partner-Link spielst, kann eine Provision an den Betreiber/Creator ausgezahlt werden.",
      disclosureTextTwo:
        "Für Nutzer entstehen dadurch keine zusätzlichen Kosten. Empfehlungen ersetzen keine eigene Prüfung von Lizenz, Bedingungen und Bonusregeln.",
      warning:
        "Falls du das Gefühl hast, die Kontrolle zu verlieren, stoppe sofort und suche professionelle Hilfe in deinem Land."
    }
  },
  en: {
    header: {
      homeAriaLabel: "Leon528 bonus partner homepage",
      navAriaLabel: "Main navigation",
      casinos: "Casinos",
      topBonuses: "Top Bonuses",
      twitchStats: "Twitch Stats",
      faq: "FAQ",
      responsibleGaming: "Responsible Gaming",
      topBonusesCta: "View Top Bonuses"
    },
    language: {
      label: "Change language",
      german: "German",
      english: "English"
    },
    theme: {
      label: "Switch theme",
      dark: "Dark",
      light: "Light",
      system: "System"
    },
    hero: {
      badge: "BONUS, PARTNERS & MEDIA KIT",
      headline: "Exclusive Casino Bonuses for the Leon528 Community",
      subtext:
        "This page contains affiliate links. 18+ only. Please gamble responsibly and always review bonus terms.",
      primaryCta: "View Top Bonuses",
      secondaryCta: "Watch on Twitch",
      transparentLabel: "Transparent partner disclosure",
      warningLabel: "Gambling can be addictive",
      disclosureLabel: "Affiliate Disclosure",
      disclosureTooltip:
        "We may receive a commission if you use a partner link. This does not create extra costs for you."
    },
    casino: {
      highlightedPartners: "Highlighted Partners",
      topBonusPicks: "Top Bonus Picks",
      responsiblePlay: "18+ Responsible Play",
      sectionTitle: "Casino Partners",
      sectionDescription:
        "Transparent reviews, powerful filters, and direct bonus links for the community.",
      affiliateHint: "Affiliate links: no extra cost",
      searchAriaLabel: "Search casino by name",
      searchPlaceholder: "Search casino...",
      sortPrefix: "Sort:",
      sortOptions: {
        recommended: "Recommended",
        highestRated: "Highest Rated",
        biggestBonus: "Biggest Bonus"
      },
      tagLabels: {
        "Highest Bonus": "Highest Bonus",
        "Fast Payout": "Fast Payout",
        Crypto: "Crypto",
        "Low Wagering": "Low Wagering",
        New: "New"
      },
      tagsTitle: "Tags",
      regionsTitle: "Regions & Languages",
      bonusCta: "Claim bonus",
      detailsCta: "Details",
      noResults:
        "No casinos found for the current search/filter setup. Remove one or more filters and try again.",
      reviewTitleSuffix: "Review",
      prosTitle: "Pros",
      consTitle: "Cons",
      labels: {
        wagering: "Wagering",
        minDeposit: "Min Deposit",
        payoutSpeed: "Payout Speed",
        crypto: "Crypto",
        paymentMethods: "Payment Methods"
      },
      yes: "Yes",
      no: "No"
    },
    twitch: {
      sectionTag: "Creator Media Kit",
      sectionTitle: "Twitch Stats",
      liveBadge: "LIVE",
      offlineBadge: "OFFLINE",
      unavailableTitle: "Twitch data is currently unavailable",
      unavailableHint:
        "Please try again later. Casino partner data remains available.",
      profileRole: "Twitch Partner Creator",
      openChannel: "Open channel",
      tabs: {
        live: "Live Stats",
        kit: "Media Kit"
      },
      labels: {
        follower: "Followers",
        liveViewers: "Live Viewers",
        categoryGame: "Category / Game",
        streamTitle: "Stream title",
        lastLive: "Last streamed"
      },
      values: {
        unknown: "Unknown",
        offline: "Offline",
        noCategory: "No active category",
        currentlyOffline: "Currently offline",
        unavailable: "Unavailable"
      },
      kit: {
        creator: "Creator",
        channelUrl: "Channel URL",
        liveStatus: "Live Status",
        lastStreamed: "Last Streamed",
        followerSource: "Follower Source"
      }
    },
    faq: {
      sectionTag: "FAQ",
      sectionTitle: "Transparency & Terms",
      items: [
        {
          question: "Are these affiliate links?",
          answer:
            "Yes. If you sign up through partner links, the creator may receive a commission. There are no extra costs for you."
        },
        {
          question: "Why do bonus terms vary?",
          answer:
            "Each provider has different rules for wagering, max bet, and payout limits. Always check the terms and conditions first."
        },
        {
          question: "What does wagering mean?",
          answer:
            "Wagering is the number of times a bonus must be played through before withdrawals are allowed."
        },
        {
          question: "How fast are payouts?",
          answer:
            "Depending on payment method and verification, payouts are typically processed within a few hours up to 72 hours."
        },
        {
          question: "How transparent are these recommendations?",
          answer:
            "The ratings are editorial. Partner status does not influence live API data, safety notes, or responsible-gaming messaging."
        }
      ]
    },
    responsiblePreview: {
      badge: "Responsible Gaming",
      text:
        "For adults only (18+). Set limits and only play with money you can afford to lose.",
      button: "Learn more"
    },
    footer: {
      disclosure:
        "Affiliate Disclosure: This page contains partner links. 18+ only. Please gamble responsibly.",
      responsibleGaming: "Responsible Gaming",
      terms: "Terms and bonus conditions apply per provider."
    },
    responsiblePage: {
      backToHome: "Back to homepage",
      badge: "Responsible Gaming & 18+",
      title: "Play responsibly",
      intro:
        "Gambling is entertainment and not a guaranteed source of income. Play only if you are of legal age (18+) and financially stable.",
      principlesTitle: "Core principles for safer play",
      principles: [
        "Play with a fixed budget and set clear limits in advance.",
        "Never chase losses.",
        "Use reality checks, session limits, and self-exclusion tools.",
        "Take regular breaks and avoid playing under stress.",
        "Seek help if gambling creates emotional or financial pressure."
      ],
      disclosureTitle: "Affiliate Disclosure",
      disclosureTextOne:
        "This website contains affiliate links. If you play through a partner link, the operator/creator may receive a commission.",
      disclosureTextTwo:
        "There are no additional costs for users. Recommendations do not replace your own checks regarding licensing, terms, and bonus rules.",
      warning:
        "If you feel you are losing control, stop immediately and seek professional support in your country."
    }
  }
} as const;

export type TranslationDictionary = (typeof translations)[Language];
