import type { ChartOptions, ChartData } from "chart.js";

type ChartType =
  | "bar"
  | "pie"
  | "line"
  | "doughnut"
  | "radar"
  | "polarArea"
  | "bubble"
  | "scatter";

export interface BaseChartProps {
  data: ChartData<ChartType>;
  options?: ChartOptions<ChartType>;
  type: ChartType;
  height?: string;
  width?: string;
  className?: string;
}

export interface ChartContainerProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
