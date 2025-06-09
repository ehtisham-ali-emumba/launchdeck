import { type ChartData, type ChartOptions } from "chart.js";

import { CHART_COLORS } from "~/components/Chart/elements";
import {
  defaultBarOptions,
  defaultPieOptions,
  defaultLineOptions,
  createBarChartData,
  createPieChartData,
  createLineChartData,
} from "~/components/Chart/utils";
import type { TSFixMe } from "~/types";

import {
  type PopularityChartData,
  type CategoryChartData,
  type TimelineChartData,
  type AnalyticsChartType,
  type AnalyticsChartData,
} from "./types";

export const generatePopularityChartData = (
  data: PopularityChartData[]
): ChartData<"bar"> => {
  const labels = data.map(item => item.name);
  const values = data.map(item => item.votes);

  const chartData = createBarChartData(labels, values, "Votes");

  // Add some analytics-specific styling
  chartData.datasets[0].borderRadius = 8;
  chartData.datasets[0].borderSkipped = false;

  return chartData;
};

export const getPopularityChartOptions = (): ChartOptions<"bar"> => {
  return {
    ...defaultBarOptions,
    plugins: {
      ...defaultBarOptions.plugins,
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      ...defaultBarOptions.scales,
      x: {
        ...(defaultBarOptions.scales?.x || {}),
        ticks: {
          color: "#666",
          maxRotation: 45,
        },
      },
    },
  };
};

export const generateCategoryChartData = (
  data: CategoryChartData
): ChartData<"pie"> => {
  const categoryEntries = Object.entries(data);
  const categoryLabels = categoryEntries.map(([name]) => name);
  const categoryValues = categoryEntries.map(([, value]) => value as number);

  const chartData = createPieChartData(categoryLabels, categoryValues);

  // Add some analytics-specific styling
  chartData.datasets[0].hoverBorderWidth = 3;
  chartData.datasets[0].hoverBorderColor = CHART_COLORS.pie.hoverBorder;

  return chartData;
};

export const getCategoryChartOptions = (): ChartOptions<"pie"> => {
  return {
    ...defaultPieOptions,
    plugins: {
      ...defaultPieOptions.plugins,
      legend: {
        ...(defaultPieOptions.plugins?.legend || {}),
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
          color: "#666",
          generateLabels: (chart: TSFixMe) => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label: string, i: number) => {
                const value = data.datasets[0].data[i];
                const total = data.datasets[0].data.reduce(
                  (a: number, b: number) => a + b,
                  0
                );
                const percentage = ((value / total) * 100).toFixed(1);
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].backgroundColor[i],
                  lineWidth: 0,
                  pointStyle: "circle",
                  hidden: false,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
      tooltip: {
        ...(defaultPieOptions.plugins?.tooltip || {}),
        callbacks: {
          label: (context: TSFixMe) => {
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          },
        },
      },
    },
  };
};

export const generateTimelineChartData = (
  data: TimelineChartData
): ChartData<"line"> => {
  const timelineEntries = Object.entries(data);
  const timelineData = timelineEntries
    .map(([month, count]) => ({
      month: new Date(month + "-01").toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      count: count as number,
      sortDate: new Date(month + "-01"),
    }))
    .sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());

  const labels = timelineData.map(item => item.month);
  const values = timelineData.map(item => item.count);

  const chartData = createLineChartData(labels, values, "Products Launched");

  // Add some analytics-specific styling
  chartData.datasets[0].borderWidth = 3;
  chartData.datasets[0].pointRadius = 6;
  chartData.datasets[0].pointHoverRadius = 8;

  return chartData;
};

export const getTimelineChartOptions = (): ChartOptions<"line"> => {
  return {
    ...defaultLineOptions,
    plugins: {
      ...defaultLineOptions.plugins,
      legend: {
        display: false,
      },
    },
    scales: {
      ...defaultLineOptions.scales,
      x: {
        ...(defaultLineOptions.scales?.x || {}),
        grid: {
          display: false,
        },
      },
    },
  };
};

export const getChartConfig = (
  type: AnalyticsChartType,
  data: AnalyticsChartData
): {
  chartData: ChartData<TSFixMe>;
  chartOptions: ChartOptions<TSFixMe>;
  chartType: "bar" | "pie" | "line";
} => {
  switch (type) {
    case "popularity":
      return {
        chartData: generatePopularityChartData(data as TSFixMe[]),
        chartOptions: getPopularityChartOptions(),
        chartType: "bar",
      };
    case "category":
      return {
        chartData: generateCategoryChartData(data as Record<string, number>),
        chartOptions: getCategoryChartOptions(),
        chartType: "pie",
      };
    case "timeline":
      return {
        chartData: generateTimelineChartData(data as Record<string, number>),
        chartOptions: getTimelineChartOptions(),
        chartType: "line",
      };
    default:
      return {
        chartData: { datasets: [] },
        chartOptions: {},
        chartType: "bar",
      };
  }
};
