import styled from "styled-components";
import { Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { colors } from "../../../../constants";

export const { Title, Paragraph, Text } = Typography;
export const BrandCardTitle = styled(Title)`
  &.ant-typography {
    margin-top: 0;
    margin-bottom: 4px;
    color: ${colors.text.primary};
    font-size: 22px;
    text-align: center;
  }
`;

export const BrandCardDescription = styled(Paragraph)`
  color: ${colors.text.secondary};
  font-size: 14px;
  min-height: 80px;
`;

export const DropDownIcon = styled(MoreOutlined)({
  fontSize: "30px",
  color: "black",
});

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StarRating = styled.div`
  color: #ffd700;
  font-size: 20px;
  margin-right: 8px;
`;

export const ReviewCount = styled.span`
  color: #666;
  font-size: 16px;
`;
