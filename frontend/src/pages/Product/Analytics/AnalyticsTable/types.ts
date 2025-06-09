import type { BaseTableProps } from "~/components/Table/types";
import type { TSFixMe } from "~/types";

export type AnalyticsTableType = "leaderboard" | "recent" | "detailed";

export interface AnalyticsTableProps extends Omit<BaseTableProps, "columns"> {
  type: AnalyticsTableType;

  title: string;
}

export interface LeaderboardData {
  id?: string;
  _id?: string;
  rank?: number;
  name: string;
  category: string;
  votes: number;
  launchDate: string;
}

export interface DetailedProductData {
  id?: string;
  _id?: string;
  name: string;
  description: string;
  category?: {
    name: string;
    [key: string]: TSFixMe;
  };
  votesCount: number;
  launchDate: string;
  [key: string]: TSFixMe;
}
