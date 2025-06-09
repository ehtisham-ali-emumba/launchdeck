import { Card, Col } from "antd";
import { cardStyle } from "./utils";

export const StatsCardUI: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Col xs={24} sm={12} md={8} lg={4}>
    <Card style={cardStyle}>{children}</Card>
  </Col>
);
