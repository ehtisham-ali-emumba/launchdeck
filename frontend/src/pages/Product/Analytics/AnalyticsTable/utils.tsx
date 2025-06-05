import type { ColumnsType } from "antd/es/table";

import {
  formatDate,
  getDateSorter,
  getNumberSorter,
  renderNumericValue,
} from "~/components/Table/utils";

import type {
  AnalyticsTableType,
  DetailedProductData,
  LeaderboardData,
} from "./types";

/**
 * Generates the columns configuration based on the table type
 * @param type The type of analytics table
 */
export const getColumnsByType = (
  type: AnalyticsTableType
): ColumnsType<any> => {
  switch (type) {
    case "leaderboard":
      return getLeaderboardColumns();
    case "recent":
      return getRecentColumns();
    case "detailed":
    default:
      return getDetailedColumns();
  }
};

/**
 * Generates columns for the leaderboard table
 */
const getLeaderboardColumns = (): ColumnsType<LeaderboardData> => {
  return [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      width: 60,
      render: (rank: number) => (
        <span
          style={{
            fontWeight: "bold",
            color: rank <= 3 ? "#1890ff" : "inherit",
          }}
        >
          #{rank}
        </span>
      ),
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Votes",
      dataIndex: "votes",
      key: "votes",
      sorter: getNumberSorter("votes"),
      render: (votes: number) => renderNumericValue(votes, true),
    },
    {
      title: "Launch Date",
      dataIndex: "launchDate",
      key: "launchDate",
      render: (date: string) => formatDate(date),
    },
  ];
};

/**
 * Generates columns for the recent products table
 */
const getRecentColumns = (): ColumnsType<LeaderboardData> => {
  return [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Votes",
      dataIndex: "votes",
      key: "votes",
      sorter: getNumberSorter("votes"),
    },
    {
      title: "Launch Date",
      dataIndex: "launchDate",
      key: "launchDate",
      sorter: getDateSorter("launchDate"),
      render: (date: string) => formatDate(date),
    },
  ];
};

/**
 * Generates columns for the detailed products table
 */
const getDetailedColumns = (): ColumnsType<DetailedProductData> => {
  return [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      width: 300,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: any) => category?.name || "Unknown",
    },
    {
      title: "Votes",
      dataIndex: "votesCount",
      key: "votesCount",
      sorter: getNumberSorter("votesCount"),
    },
    {
      title: "Launch Date",
      dataIndex: "launchDate",
      key: "launchDate",
      render: (date: string) => formatDate(date),
      sorter: getDateSorter("launchDate"),
    },
  ];
};
