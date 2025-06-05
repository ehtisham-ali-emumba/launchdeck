import type { IProduct } from "../models/Product";

export interface ChartData {
  timeline?: { [key: string]: number };
  popularity?: { name: string; votes: number }[];
  category?: { [key: string]: number };
  monthlyLaunches?: { month: string; count: number }[];
}

export interface TableData {
  leaderboard?: Array<{
    rank: number;
    name: string;
    votes: number;
    category: string;
    launchDate: string;
  }>;
  recent?: Array<{
    name: string;
    votes: number;
    category: string;
    launchDate: string;
  }>;
  detailed?: IProduct[];
}

export interface AnalyticsStats {
  totalResults: number;
  categories: number;
  avgVotes: number;
  topCategory?: string;
  mostRecentLaunch?: string;
  totalVotes: number;
}

export const generateChartData = (products: any[], chartType: string): any => {
  switch (chartType) {
    case "timeline":
    case "monthlyLaunches":
      return products.reduce((acc, product) => {
        const month = new Date(product.launchDate).toISOString().slice(0, 7);
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      }, {});

    case "popularity":
      return products
        .map((p) => ({
          name: p.name.length > 20 ? p.name.substring(0, 20) + "..." : p.name,
          votes: p.votesCount || 0,
        }))
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 10);

    case "category":
      return products.reduce((acc, product) => {
        const category = product.category?.name || "Unknown";
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});

    default:
      return {};
  }
};

export const generateTableData = (products: any[], tableType: string): any => {
  switch (tableType) {
    case "leaderboard":
      return products
        .sort((a, b) => (b.votesCount || 0) - (a.votesCount || 0))
        .slice(0, 10)
        .map((p, index) => ({
          rank: index + 1,
          name: p.name,
          votes: p.votesCount || 0,
          category: p.category?.name || "Unknown",
          launchDate: new Date(p.launchDate).toLocaleDateString(),
        }));

    case "recent":
      return products
        .sort(
          (a, b) =>
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
        )
        .slice(0, 10)
        .map((p) => ({
          name: p.name,
          votes: p.votesCount || 0,
          category: p.category?.name || "Unknown",
          launchDate: new Date(p.launchDate).toLocaleDateString(),
        }));

    case "detailed":
    default:
      return products;
  }
};

export const generateAnalyticsStats = (products: any[]): AnalyticsStats => {
  const totalResults = products.length;
  const categories = [
    ...new Set(products.map((p) => p.category?.name).filter(Boolean)),
  ];
  const totalVotes = products.reduce((sum, p) => sum + (p.votesCount || 0), 0);
  const avgVotes = totalResults > 0 ? Math.round(totalVotes / totalResults) : 0;

  // Find most popular category
  const categoryCount = products.reduce(
    (acc, product) => {
      const category = product.category?.name || "Unknown";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );

  const topCategory = Object.keys(categoryCount).reduce(
    (a, b) => (categoryCount[a] > categoryCount[b] ? a : b),
    ""
  );

  // Find most recent launch
  const mostRecentProduct = products.reduce((latest, current) => {
    return new Date(current.launchDate) > new Date(latest.launchDate)
      ? current
      : latest;
  }, products[0]);

  return {
    totalResults,
    categories: categories.length,
    avgVotes,
    topCategory: topCategory !== "Unknown" ? topCategory : undefined,
    mostRecentLaunch: mostRecentProduct
      ? new Date(mostRecentProduct.launchDate).toLocaleDateString()
      : undefined,
    totalVotes,
  };
};
