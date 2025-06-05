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
  /**
   * Chart data which could be one of multiple formats based on chart type
   */
  data: AnalyticsChartData;
  /**
   * Type of analytics chart to display
   */
  type: AnalyticsChartType;
  /**
   * Chart title
   */
  title: string;
  /**
   * Optional description for the chart
   */
  description?: string;
  /**
   * Custom class name
   */
  className?: string;
}
