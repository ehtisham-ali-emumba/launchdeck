import { Card, Col } from "antd";
import styled from "styled-components";

import { hideScrollBarCss } from "~/styles";

import { cardStyle } from "./utils";

export const StatsCardUI: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Col xs={24} sm={12} md={8} lg={4}>
    <Card style={cardStyle}>{children}</Card>
  </Col>
);

export const StatsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  ${hideScrollBarCss}
`;
