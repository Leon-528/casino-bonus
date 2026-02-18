export type CasinoTag =
  | "Highest Bonus"
  | "Fast Payout"
  | "Crypto"
  | "Low Wagering"
  | "New";

export interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonusTitle: string;
  bonusDetails: string;
  benefits: string[];
  regions: string[];
  tags: CasinoTag[];
  paymentMethods: string[];
  affiliateUrl: string;
  reviewLong: string;
  pros: string[];
  cons: string[];
  wagering: string;
  minDeposit: string;
  payoutSpeed: string;
  crypto: boolean;
}

export type CasinoSortOption = "recommended" | "highestRated" | "biggestBonus";
