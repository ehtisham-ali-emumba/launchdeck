import { useState } from "react";
import { Row, Col, Alert, Spin, Typography, Divider, Space } from "antd";
import { BulbOutlined } from "@ant-design/icons";

import { Spacer } from "~/components";
import { ContentWrapper } from "~/styles";
import { useAnalyticsQuery } from "~/hooks/queries/useAnalyticsQuery";
import { AnalyticsChart } from "./AnalyticsChart";
import { getChartTitle, getTableTitle } from "./utils";
import { AnalyticsSearchBar } from "./AnalyticsSearchBar";
import { StatsCards } from "./StatsCards";
import { AnalyticsTable } from "./AnalyticsTable";

const { Title, Text } = Typography;

export const AnalyticsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError, error } = useAnalyticsQuery({
    query: searchQuery,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isError) {
    return (
      <ContentWrapper>
        <Alert
          message="Error loading analytics"
          description={error?.message || "Failed to load analytics data"}
          type="error"
          showIcon
        />
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper style={{ minHeight: "calc(100vh - 85px)" }}>
      <div style={{ marginBottom: "32px", textAlign: "center" }}>
        <Title level={2} style={{ marginTop: "32px", marginBottom: "16px" }}>
          AI-Powered Analytics
        </Title>
        <Text type="secondary" style={{ fontSize: "16px" }}>
          Discover insights about your product data using natural language
          queries
        </Text>
      </div>

      <AnalyticsSearchBar
        onSearch={handleSearch}
        loading={isLoading}
        placeholder="Ask AI about your data... (e.g., 'show me popular products', 'ai tools for product analysis')"
      />

      {isLoading ? (
        <div style={{ textAlign: "center", padding: "64px 0" }}>
          <Spin size="large" />
          <div style={{ marginTop: "16px" }}>
            <Text>AI is analyzing your data...</Text>
          </div>
        </div>
      ) : data ? (
        <>
          {/* Stats Cards */}
          <StatsCards stats={data.stats} />
          {/* AI Insights */}
          {data.analysis.keyInsights &&
            data.analysis.keyInsights.length > 0 && (
              <Alert
                message={
                  <Space>
                    <BulbOutlined />
                    <span>AI Insights</span>
                  </Space>
                }
                description={
                  <ul style={{ marginBottom: 0, paddingLeft: "20px" }}>
                    {data.analysis.keyInsights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                }
                type="info"
                showIcon={false}
                style={{ marginBottom: "24px" }}
              />
            )}
          {/* Charts Section */}
          <div style={{ marginBottom: "32px" }}>
            <Title level={3} style={{ marginBottom: "16px" }}>
              📊 Visual Analytics
            </Title>
            <Row gutter={[16, 16]}>
              {data.analysis.suggestedCharts?.map(chartType => {
                const chartData = data.visualizations.charts[chartType];
                if (
                  !chartData ||
                  (Array.isArray(chartData) && chartData.length === 0) ||
                  (typeof chartData === "object" &&
                    Object.keys(chartData).length === 0)
                ) {
                  return null;
                }

                return (
                  <Col xs={24} lg={12} key={chartType}>
                    <AnalyticsChart
                      data={chartData}
                      type={chartType as "popularity" | "category" | "timeline"}
                      title={getChartTitle(chartType)}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          <Divider />
          Tables Section
          <div style={{ marginBottom: "32px" }}>
            <Title level={3} style={{ marginBottom: "16px" }}>
              📋 Data Tables
            </Title>
            <Row gutter={[16, 16]}>
              {data.analysis.suggestedTables?.map(tableType => {
                const tableData = data.visualizations.tables[tableType];
                if (!tableData || tableData.length === 0) {
                  return null;
                }

                return (
                  <Col xs={24} key={tableType}>
                    <AnalyticsTable
                      data={tableData}
                      type={tableType as "leaderboard" | "recent" | "detailed"}
                      title={getTableTitle(tableType)}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          {/* Products Section */}
          {data.products && data.products.length > 0 && (
            <div>
              <Title level={3} style={{ marginBottom: "16px" }}>
                🎯 Filtered Products ({data.products.length} results)
              </Title>
              <AnalyticsTable
                data={data.products}
                type="detailed"
                title="All Matching Products"
              />
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "64px 0" }}>
          <Title level={4} type="secondary">
            Welcome to AI Analytics! 👋
          </Title>
          <Text type="secondary">
            Start by searching above to explore your product data with
            AI-powered insights.
          </Text>
        </div>
      )}
      <Spacer top="80px" />
    </ContentWrapper>
  );
};
