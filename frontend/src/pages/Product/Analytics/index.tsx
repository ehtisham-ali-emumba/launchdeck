import { useState } from "react";

import { BulbOutlined } from "@ant-design/icons";
import { Row, Col, Spin, Typography, Space } from "antd";

import { Spacer } from "~/components";
import ErrorContainer from "~/components/ErrorContainer";
import { uiStrings } from "~/constants";
import { useAnalyticsQuery } from "~/hooks/queries/useAnalyticsQuery";

import { AnalyticsChart } from "./AnalyticsChart";
import type { AnalyticsChartType } from "./AnalyticsChart/types";
import { AnalyticsSearchBar } from "./AnalyticsSearchBar";
import { AnalyticsTable } from "./AnalyticsTable";
import type { AnalyticsTableType } from "./AnalyticsTable/types";
import {
  HeadingWrapper,
  PaddDiv,
  DescText,
  StyledAlert,
  ChartSection,
  TableSection,
  StyledDivider,
  LoadingText,
  ContentWrapper,
  RootWrapper,
} from "./elements";
import { StatsCards } from "./StatsCards";
import { getChartTitle, getTableTitle } from "./utils";

const { Title } = Typography;

export const AnalyticsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError, error } = useAnalyticsQuery({
    query: searchQuery,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <RootWrapper>
      <ContentWrapper>
        <HeadingWrapper>
          <Title level={2}>{uiStrings.aiPoweredAnalytics}</Title>
          <DescText>{uiStrings.analyticsDiscoverInsights}</DescText>
        </HeadingWrapper>

        <AnalyticsSearchBar
          onSearch={handleSearch}
          loading={isLoading}
          placeholder={uiStrings.askAIAnalyticsPlaceholder}
        />

        {isLoading ? (
          <PaddDiv>
            <Spin size="large" />
            <div>
              <Spacer top="10px" />
              <LoadingText>{uiStrings.aiAnalyzingData}</LoadingText>
            </div>
          </PaddDiv>
        ) : isError && error ? (
          <ErrorContainer message={`Error: ${(error as Error).message}`} />
        ) : data ? (
          <>
            {/* Stats Cards */}
            <StatsCards stats={data.stats} />

            {/* AI Insights */}
            {data.analysis.keyInsights &&
              data.analysis.keyInsights.length > 0 && (
                <StyledAlert
                  message={
                    <Space>
                      <BulbOutlined />
                      <span>{uiStrings.aiInsights}</span>
                    </Space>
                  }
                  description={
                    <ul>
                      {data.analysis.keyInsights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                      ))}
                    </ul>
                  }
                  type="info"
                  showIcon={false}
                />
              )}

            {/* Charts Section */}
            <ChartSection>
              <Title level={3}>{uiStrings.visualAnalytics}</Title>
              <Spacer top="10px" />
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
                    <Col xs={24} key={chartType}>
                      <AnalyticsChart
                        data={chartData}
                        type={chartType as AnalyticsChartType}
                        title={getChartTitle(chartType)}
                      />
                    </Col>
                  );
                })}
              </Row>
            </ChartSection>

            <StyledDivider />

            {/* Tables Section */}
            <TableSection>
              <Title level={3}>{uiStrings.dataTables}</Title>
              <Spacer top="10px" />
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
                        type={tableType as AnalyticsTableType}
                        title={getTableTitle(tableType)}
                      />
                    </Col>
                  );
                })}
              </Row>
            </TableSection>

            {/* Products Section */}
            {data.products && data.products.length > 0 && (
              <TableSection>
                <Title level={3}>
                  {uiStrings.filteredProducts(data.products.length)}
                </Title>
                <Spacer top="10px" />
                <AnalyticsTable
                  data={data.products}
                  type="detailed"
                  title={uiStrings.allMatchingProducts}
                />
              </TableSection>
            )}
          </>
        ) : (
          <PaddDiv>
            <Title level={4} type="secondary">
              {uiStrings.welcomeToAIAnalytics}
            </Title>
            <DescText type="secondary">{uiStrings.startBySearching}</DescText>
          </PaddDiv>
        )}
        <Spacer top="80px" />
      </ContentWrapper>
    </RootWrapper>
  );
};
