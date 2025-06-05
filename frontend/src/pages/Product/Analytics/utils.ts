export const getChartTitle = (chartType: string): string => {
  switch (chartType) {
    case "popularity":
      return "🏆 Top Products by Votes";
    case "category":
      return "📊 Products by Category";
    case "timeline":
      return "📅 Launches Over Time";
    default:
      return "Chart";
  }
};

export const getTableTitle = (tableType: string): string => {
  switch (tableType) {
    case "leaderboard":
      return "🥇 Top 10 Products";
    case "recent":
      return "🕐 Recent Launches";
    case "detailed":
      return "📝 Detailed View";
    default:
      return "Table";
  }
};

export const suggestedQueries = [
  "popular products",
  "code editor",
  "design tools",
  "top voted products",
  "products by category",
];
