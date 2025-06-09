import React from "react";

import { ChartContainerDiv, ChartTitle, ChartDescription } from "./elements";
import { type ChartContainerProps } from "./types";

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  description,
  children,
  className,
  style,
}) => {
  return (
    <ChartContainerDiv className={className} style={style}>
      {title && <ChartTitle>{title}</ChartTitle>}
      {description && <ChartDescription>{description}</ChartDescription>}
      {children}
    </ChartContainerDiv>
  );
};
