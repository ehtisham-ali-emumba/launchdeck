import React from "react";
import { Card, Row, Col, Statistic } from "antd";
import {
  TrophyOutlined,
  AppstoreOutlined,
  HeartOutlined,
  CalendarOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { cardStyle } from "./utils";
import type { StatsCardsProps } from "./type";

export const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  const { totalResults, categories, avgVotes, totalVotes, mostRecentLaunch } =
    stats;

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
      <Col xs={24} sm={12} md={8} lg={4}>
        <Card style={cardStyle}>
          <Statistic
            title="Total Products"
            value={totalResults}
            prefix={<AppstoreOutlined style={{ color: "#1890ff" }} />}
            valueStyle={{ color: "#1890ff" }}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={4}>
        <Card style={cardStyle}>
          <Statistic
            title="Categories"
            value={categories}
            prefix={<TrophyOutlined style={{ color: "#52c41a" }} />}
            valueStyle={{ color: "#52c41a" }}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={4}>
        <Card style={cardStyle}>
          <Statistic
            title="Avg Votes"
            value={avgVotes}
            prefix={<HeartOutlined style={{ color: "#eb2f96" }} />}
            valueStyle={{ color: "#eb2f96" }}
          />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={4}>
        <Card style={cardStyle}>
          <Statistic
            title="Total Votes"
            value={totalVotes}
            prefix={<RiseOutlined style={{ color: "#fa8c16" }} />}
            valueStyle={{ color: "#fa8c16" }}
          />
        </Card>
      </Col>

      {mostRecentLaunch && (
        <Col xs={24} sm={12} md={8} lg={4}>
          <Card style={cardStyle}>
            <Statistic
              title="Latest Launch"
              value={mostRecentLaunch}
              prefix={<CalendarOutlined style={{ color: "#13c2c2" }} />}
              valueStyle={{ color: "#13c2c2", fontSize: "14px" }}
            />
          </Card>
        </Col>
      )}
    </Row>
  );
};
