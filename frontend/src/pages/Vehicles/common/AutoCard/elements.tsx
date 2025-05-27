import styled from "styled-components";
import { colors } from "../../../../constants";
import { Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";

export const { Title, Paragraph, Text } = Typography;

export const AutoCardTitle = styled(Title)`
  &.ant-typography {
    margin-top: 4px;
    margin-bottom: 8px;
    color: ${colors.text.primary};
  }
`;

export const AutoCardDescription = styled(Paragraph)`
  color: ${colors.text.secondary};
  font-size: 14px;
  min-height: 55px;
`;

export const AutoMetaInfoContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 14px;
`;

export const AutoMetaText = styled(Text)`
  color: ${colors.text.primary};
  font-size: 14px;
  font-weight: 500;
  background-color: ${colors.chip};
  padding: 4px 16px;
  border-radius: 50px;
`;

export const PriceText = styled(Text)`
  font-size: 20px;
  // margin-top: 5px;
  font-weight: 700;
  color: ${colors.text.primary};
`;

export const AutoChip = styled.div`
  background: red;
  color: #fff;
  padding: 2px 12px;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const DropDownIcon = styled(MoreOutlined)({
  fontSize: "30px",
  color: "black",
});
