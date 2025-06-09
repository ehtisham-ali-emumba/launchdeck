import styled from "styled-components";

import { colors } from "../../constants/colors";

// Chart specific color constants
export const CHART_COLORS = {
  primary: colors.primary,
  accentOrange: colors.accentOrange,
  defaultColors: [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#FF6384",
    "#C9CBCF",
    "#4BC0C0",
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ],
  bar: {
    background: "#36A2EB",
    border: "#2993DD",
  },
  pie: {
    border: "#fff",
    hoverBorder: "#fff",
  },
  line: {
    background: "rgba(54, 162, 235, 0.1)",
    border: "#36A2EB",
    point: "#36A2EB",
    pointBorder: "#fff",
  },
};

export const ChartContainerDiv = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const ChartTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

export const ChartDescription = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
  text-align: center;
`;

export const ChartWrapper = styled.div<{ height?: string; width?: string }>`
  height: ${({ height }) => height || "350px"};
  width: ${({ width }) => width || "100%"};
`;

export const FallbackMessage = styled.div`
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
`;
