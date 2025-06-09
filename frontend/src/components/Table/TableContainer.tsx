import React from "react";
import {
  TableContainerDiv,
  TableHeader,
  TableTitle,
  HeaderContent,
} from "./elements";
import type { TableContainerProps } from "./types";

export const TableContainer: React.FC<TableContainerProps> = ({
  title,
  headerContent,
  children,
  className,
  style,
}) => {
  return (
    <TableContainerDiv className={className} style={style}>
      {(title || headerContent) && (
        <TableHeader>
          {title && <TableTitle>{title}</TableTitle>}
          {headerContent && <HeaderContent>{headerContent}</HeaderContent>}
        </TableHeader>
      )}
      {children}
    </TableContainerDiv>
  );
};
