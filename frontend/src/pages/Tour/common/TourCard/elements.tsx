import { Typography } from "antd";
import styled from "styled-components";
import { colors } from "../../../../constants";
import { Button } from "../../../../components";
import { StyledBaseCard } from "../../../../components/Card/elements";

export const { Title, Paragraph, Text } = Typography;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export const MetaInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  ${StyledBaseCard}:hover & {
    display: none;
  }
`;
export const CardTitle = styled(Title)`
  &.ant-typography {
    margin-top: 0;
    margin-bottom: 4px;
  }
`;

export const CardDescription = styled(Paragraph)`
  &.ant-typography {
    color: ${colors.text.secondary};
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.background.badge};
  padding: 4px 16px;
  border-radius: 100px;
  gap: 4px;
`;

export const MetaText = styled(Text)`
  color: black;
  font-size: 15px;
  font-weight: 500;
`;

export const HoverButton = styled(Button)`
  display: none;
  width: 100%;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #147dd6;
  }
  ${StyledBaseCard}:hover & {
    display: block;
  }
`;
export const BookingActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 8px;
`;
