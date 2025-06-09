import type { TSFixMe } from "./tour";

export interface AnalyticsData {
  query: string;
  products: TSFixMe[];
  analysis: {
    queryType: string;
    suggestedCharts: string[];
    suggestedTables: string[];
    keyInsights: string[];
    recommendedLayout: string;
  };
  visualizations: {
    charts: {
      [key: string]: TSFixMe;
    };
    tables: {
      [key: string]: TSFixMe;
    };
  };
  stats: {
    totalResults: number;
    categories: number;
    avgVotes: number;
    topCategory?: string;
    mostRecentLaunch?: string;
    totalVotes: number;
  };
}
