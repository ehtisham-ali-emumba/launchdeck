import React from "react";
import type { TableProps as AntTableProps, ColumnsType } from "antd/es/table";

export interface BaseTableProps<T extends object = any> {
  /**
   * Data source for the table
   */
  data: T[];

  /**
   * Column definitions for the table
   */
  columns: ColumnsType<T>;

  /**
   * Unique key for each row
   * @default (record, index) => record.id || record._id || index
   */
  rowKey?: string | ((record: T, index?: number) => React.Key);

  /**
   * Height of the table
   */
  height?: string | number;

  /**
   * Width of the table
   */
  width?: string | number;

  /**
   * Title of the table
   */
  title?: string;

  /**
   * Whether to show pagination
   * @default true
   */
  pagination?: boolean | object;

  /**
   * Size of the table
   * @default "default"
   */
  size?: "small" | "middle" | "large";

  /**
   * Whether the table can be scrolled
   */
  scroll?: { x?: number | string; y?: number | string };

  /**
   * Loading state of table
   */
  loading?: boolean;

  /**
   * Custom class name for the container
   */
  className?: string;

  /**
   * Callback fired when a row is clicked
   */
  onRowClick?: (record: T, index?: number) => void;

  /**
   * Additional props to pass to Ant Design Table
   */
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
  /**
   * Title of the table
   */
  title?: string;

  /**
   * Additional content to render alongside the title
   */
  headerContent?: React.ReactNode;

  /**
   * React children components
   */
  children: React.ReactNode;

  /**
   * Custom class name for the table container
   */
  className?: string;

  /**
   * Custom styles for the table container
   */
  style?: React.CSSProperties;
}
