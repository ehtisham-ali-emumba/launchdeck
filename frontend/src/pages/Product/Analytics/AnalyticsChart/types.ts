export type AnalyticsChartType = "popularity" | "category" | "timeline";

export interface PopularityChartData {
  name: string;
  votes: number;
}

export interface CategoryChartData {
  [category: string]: number;
}

export interface TimelineChartData {
  [month: string]: number;
}

export type AnalyticsChartData =
  | PopularityChartData[]
  | CategoryChartData
  | TimelineChartData;

export interface AnalyticsChartProps {
  data: AnalyticsChartData;
  type: AnalyticsChartType;
  title: string;
  description?: string;
  className?: string;
}
