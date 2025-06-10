import type { ChartData, ChartOptions } from "chart.js";

import type { TSFixMe } from "~/types";

import { CHART_COLORS } from "./elements";

const generateColors = (count: number, alpha?: number): string[] => {
  const colors = CHART_COLORS.defaultColors;
  const result: string[] = [];

  // Loop through the colors and repeat if needed
  for (let i = 0; i < count; i++) {
    const baseColor = colors[i % colors.length];

    if (alpha !== undefined) {
      // Add alpha channel if specified
      const rgbMatch = baseColor.match(
        /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
      );

      if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 16);
        const g = parseInt(rgbMatch[2], 16);
        const b = parseInt(rgbMatch[3], 16);
        result.push(`rgba(${r}, ${g}, ${b}, ${alpha})`);
      } else {
        result.push(baseColor);
      }
    } else {
      result.push(baseColor);
    }
  }

  return result;
};

export const createBarChartData = (
  labels: string[],
  data: number[],
  label = "Value"
): ChartData<"bar"> => {
  return {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: generateColors(data.length),
        borderColor: generateColors(data.length, 0.8),
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
};

export const createPieChartData = (
  labels: string[],
  data: number[]
): ChartData<"pie"> => {
  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: generateColors(data.length),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
};

export const createLineChartData = (
  labels: string[],
  data: number[],
  label = "Value"
): ChartData<"line"> => {
  return {
    labels,
    datasets: [
      {
        label,
        data,
        borderColor: CHART_COLORS.line.border,
        backgroundColor: CHART_COLORS.line.background,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: CHART_COLORS.line.point,
        pointBorderColor: CHART_COLORS.line.pointBorder,
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };
};

export const defaultBarOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 15,
        usePointStyle: true,
        padding: 15,
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 4,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const defaultLineOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 15,
        usePointStyle: true,
        padding: 15,
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 4,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
    x: {
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
};

export const defaultPieOptions: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      align: "center",
      labels: {
        boxWidth: 15,
        usePointStyle: true,
        padding: 15,
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 4,
    },
  },
};

const defaultDoughnutOptions: ChartOptions<"doughnut"> = {
  ...(defaultPieOptions as ChartOptions<"doughnut">),
  cutout: "70%",
};

const defaultRadarOptions: ChartOptions<"radar"> = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.2,
    },
    point: {
      radius: 4,
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 15,
        usePointStyle: true,
        padding: 15,
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 4,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      angleLines: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      pointLabels: {
        font: {
          size: 12,
        },
      },
    },
  },
};

const getDefaultOptions = (type: string): ChartOptions<TSFixMe> => {
  switch (type) {
    case "bar":
      return defaultBarOptions;
    case "line":
      return defaultLineOptions;
    case "pie":
      return defaultPieOptions;
    case "doughnut":
      return defaultDoughnutOptions;
    case "radar":
      return defaultRadarOptions;
    default:
      return defaultBarOptions;
  }
};

export const mergeChartOptions = (
  type: string,
  options?: ChartOptions<TSFixMe>
): ChartOptions<TSFixMe> => {
  const defaultOptions = getDefaultOptions(type);
  return {
    ...defaultOptions,
    ...(options || {}),
    plugins: {
      ...defaultOptions.plugins,
      ...(options?.plugins || {}),
    },
    scales: {
      ...defaultOptions.scales,
      ...(options?.scales || {}),
    },
  };
};
