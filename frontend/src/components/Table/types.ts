import React from "react";
import type { TableProps as AntTableProps, ColumnsType } from "antd/es/table";

export interface BaseTableProps<T extends object = any> {
  data: T[];
  columns: ColumnsType<T>;
  rowKey?: string | ((record: T, index?: number) => React.Key);
  height?: string | number;
  width?: string | number;
  title?: string;
  pagination?: boolean | object;
  size?: "small" | "middle" | "large";
  scroll?: { x?: number | string; y?: number | string };
  loading?: boolean;
  className?: string;
  onRowClick?: (record: T, index?: number) => void;
  tableProps?: Omit<
    AntTableProps<T>,
    | "dataSource"
    | "columns"
    | "rowKey"
    | "pagination"
    | "size"
    | "scroll"
    | "loading"
    | "className"
  >;
}

export interface TableContainerProps {
  title?: string;
  headerContent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
