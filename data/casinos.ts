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
    rating: 5,
    bonusTitle: "SOON",
    bonusDetails: "SOON",
    benefits: soonBenefits,
    regions: ["DE", "AT", "CH", "EU"],
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