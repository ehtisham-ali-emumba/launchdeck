import React from "react";
import { Row, Statistic } from "antd";
import {
  TrophyOutlined,
  AppstoreOutlined,
  HeartOutlined,
  CalendarOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import type { StatsCardsProps } from "./type";
import { uiStrings } from "~/constants";
import { StatsCardUI } from "./elements";
import { formatLaunchDate } from "./utils";

export const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  const { totalResults, categories, avgVotes, totalVotes, mostRecentLaunch } =
    stats;

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
      <StatsCardUI>
        <Statistic
          title={uiStrings.totalProducts}
          value={totalResults}
          prefix={<AppstoreOutlined style={{ color: "#1890ff" }} />}
          valueStyle={{ color: "#1890ff" }}
        />
      </StatsCardUI>

      <StatsCardUI>
        <Statistic
          title={uiStrings.categories}
          value={categories}
          prefix={<TrophyOutlined style={{ color: "#52c41a" }} />}
          valueStyle={{ color: "#52c41a" }}
        />
      </StatsCardUI>

      <StatsCardUI>
        <Statistic
          title={uiStrings.avgVotes}
          value={avgVotes}
          prefix={<HeartOutlined style={{ color: "#eb2f96" }} />}
          valueStyle={{ color: "#eb2f96" }}
        />
      </StatsCardUI>

      <StatsCardUI>
        <Statistic
          title={uiStrings.totalVotes}
          value={totalVotes}
          prefix={<RiseOutlined style={{ color: "#fa8c16" }} />}
          valueStyle={{ color: "#fa8c16" }}
        />
      </StatsCardUI>

      {mostRecentLaunch && (
        <StatsCardUI>
          <Statistic
            title={uiStrings.latestLaunch}
            value={formatLaunchDate(mostRecentLaunch)}
            prefix={<CalendarOutlined style={{ color: "#13c2c2" }} />}
            valueStyle={{ color: "#13c2c2" }}
          />
        </StatsCardUI>
      )}
    </Row>
  );
};
