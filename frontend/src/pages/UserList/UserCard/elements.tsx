import { Typography } from "antd";
import styled from "styled-components";
import { colors } from "../../../constants";

export const { Title, Paragraph, Text } = Typography;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-top: 10px;
`;
export const UserMetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 16px;
  border-radius: 100px;
  gap: 8px;
`;
export const UserMetaText = styled(Text)`
  color: ${colors.text.light};
  font-size: 14px;
  font-weight: 500;
`;

export const UserNameText = styled(UserMetaText)`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  display: block;
  width: 100%;
  color: ${colors.accentOrange};
`;
