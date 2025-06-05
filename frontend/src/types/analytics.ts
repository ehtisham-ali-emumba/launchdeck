export interface AnalyticsData {
  query: string;
  products: any[];
  analysis: {
    queryType: string;
    suggestedCharts: string[];
    suggestedTables: string[];
    keyInsights: string[];
    recommendedLayout: string;
  };
  visualizations: {
    charts: {
      [key: string]: any;
    };
    tables: {
      [key: string]: any;
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
