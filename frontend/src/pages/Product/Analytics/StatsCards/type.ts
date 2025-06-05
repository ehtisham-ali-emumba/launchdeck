export interface StatsCardsProps {
  stats: {
    totalResults: number;
    categories: number;
    avgVotes: number;
    topCategory?: string;
    mostRecentLaunch?: string;
    totalVotes: number;
  };
}
