import React from "react";

import {
  Bar,
  Pie,
  Line,
  Doughnut,
  PolarArea,
  Radar,
  Bubble,
  Scatter,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale,
  ScatterController,
  BubbleController,
  RadarController,
  type ChartData,
} from "chart.js";

import { uiStrings } from "~/constants";

import { ChartWrapper, FallbackMessage } from "./elements";
import { type BaseChartProps } from "./types";
import { mergeChartOptions } from "./utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale,
  ScatterController,
  BubbleController,
  RadarController
);

export const Chart: React.FC<BaseChartProps> = ({
  data,
  options,
  type,
  height = "350px",
  width = "100%",
  className,
}) => {
  const mergedOptions = React.useMemo(
    () => mergeChartOptions(type, options),
    [type, options]
  );

  const renderChart = () => {
    switch (type) {
      case "bar":
        return <Bar data={data as ChartData<"bar">} options={mergedOptions} />;
      case "pie":
        return <Pie data={data as ChartData<"pie">} options={mergedOptions} />;
      case "line":
        return (
          <Line data={data as ChartData<"line">} options={mergedOptions} />
        );
      case "doughnut":
        return (
          <Doughnut
            data={data as ChartData<"doughnut">}
            options={mergedOptions}
          />
        );
      case "radar":
        return (
          <Radar data={data as ChartData<"radar">} options={mergedOptions} />
        );
      case "polarArea":
        return (
          <PolarArea
            data={data as ChartData<"polarArea">}
            options={mergedOptions}
          />
        );
      case "bubble":
        return (
          <Bubble data={data as ChartData<"bubble">} options={mergedOptions} />
        );
      case "scatter":
        return (
          <Scatter
            data={data as ChartData<"scatter">}
            options={mergedOptions}
          />
        );
      default:
        return (
          <FallbackMessage>{uiStrings.chartTypeNotSupported}</FallbackMessage>
        );
    }
  };

  return (
    <ChartWrapper height={height} width={width} className={className}>
      {renderChart()}
    </ChartWrapper>
  );
};
