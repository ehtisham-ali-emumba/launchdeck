import { Card, Typography } from "antd";
import styled, { css } from "styled-components";
import { colors } from "../../constants";
import type { StyledBaseCardType } from "./type";

export const { Title, Paragraph, Text } = Typography;

export const AutoMetaInfo = styled.div`
  display: flex;
  background-color: ${colors.background.badge};
  padding: 3px 16px;
  border-radius: 100px;
`;

export const CarChip = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: #fff;
  padding: 2px 12px;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const StyledBaseCard = styled(Card)<StyledBaseCardType>`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: ${({ dimensions }) => dimensions.height}px;
  width: ${({ dimensions }) => dimensions.width}px;
  margin: 0 auto;
  position: relative;

  .ant-card-cover img {
    height: ${({ imageHeight }) => imageHeight}px;
  }
  .ant-card-body {
    padding: 8px 16px;
  }
`;

export const BaseCardImageWrapper = styled.div<{ imageHeight: number }>`
  position: relative;
  min-height: ${({ imageHeight }) => imageHeight}px;
  height: ${({ imageHeight }) => imageHeight}px;
  align-items: center;
  flex: 1;
  justify-content: center;
  overflow: hidden;
  && {
    display: flex;
  }
`;
export const BaseCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${StyledBaseCard}:hover & {
    transform: scale(1.05);
  }
`;

export const BaseCardContent = styled.div``;

const upperText = css`
  position: absolute;
  top: 8px;
  transition: inherit;
`;
export const BaseCardUpperLeft = styled.div`
  ${upperText} left: 10px;
`;
export const BaseCardUpperRight = styled.div`
  ${upperText} right: 10px;
`;

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AutoCardPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: olive;
`;
