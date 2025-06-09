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
      width: 160,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 180,
      ellipsis: true,
    },
    {
      title: "Votes",
      dataIndex: "votes",
      key: "votes",
      sorter: getNumberSorter("votes"),
      width: 90,
      render: (votes: number) => renderNumericValue(votes, true),
    },
    {
      title: "Launch Date",
      dataIndex: "launchDate",
      key: "launchDate",
      width: 140,
      render: (date: string) => formatDate(date),
    },
  ];
};

const getRecentColumns = (): ColumnsType<LeaderboardData> => {
  return [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
      width: 160,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 180,
      ellipsis: true,
    },
    {
      title: "Votes",
      dataIndex: "votes",
      key: "votes",
      width: 90,
      sorter: getNumberSorter("votes"),
    },
    {
      title: "Launch Date",
      dataIndex: "launchDate",
      key: "launchDate",
      width: 140,
      sorter: getDateSorter("launchDate"),
      render: (date: string) => formatDate(date),
    },
  ];
};

const getDetailedColumns = (): ColumnsType<DetailedProductData> => {
  return [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
      width: 160,
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
      ellipsis: true,
      width: 180,
      render: (category: any) => category?.name || "Unknown",
    },
    {
      title: "Votes",
      dataIndex: "votesCount",
      key: "votesCount",
      width: 90,
      sorter: getNumberSorter("votesCount"),
    },
    {
      title: "Launch Date",
      dataIndex: "launchDate",
      key: "launchDate",
      width: 140,
      render: (date: string) => formatDate(date),
      sorter: getDateSorter("launchDate"),
    },
  ];
};
