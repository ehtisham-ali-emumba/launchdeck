import React from "react";
import { Chart } from "~/components/Chart";

import { type AnalyticsChartProps } from "./types";
import { getChartConfig } from "./utils";
import { ChartContainer } from "~/components/Chart/ChartContainer";

export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  data,
  type,
  title,
  description,
  className,
}) => {
  const { chartData, chartOptions, chartType } = getChartConfig(type, data);

  // Validate data before rendering
  const hasValidData = (): boolean => {
    if (!data) return false;

    if (Array.isArray(data)) {
      return data.length > 0;
    }

    return Object.keys(data).length > 0;
  };

  if (!hasValidData()) {
    return null;
  }

  return (
    <ChartContainer
      title={title}
      description={description}
      className={className}
    >
      <Chart data={chartData} options={chartOptions} type={chartType} />
    </ChartContainer>
  );
};
