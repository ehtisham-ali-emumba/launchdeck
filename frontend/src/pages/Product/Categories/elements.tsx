import { Link } from "react-router-dom";

import { Typography } from "antd";
import styled, { css } from "styled-components";

import { hideScrollBarCss } from "~/styles";
import { sizeMobile } from "~/utils";

export const Box = styled.div`
  width: 100%;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

export const HeaderTitle = styled(Typography.Text)`
  margin-top: 40px;
  margin-bottom: 10px;
  display: block;
  font-size: 26px;
  font-weight: 500;
  padding: 0px 12px;
`;
export const Container = styled.div`
  padding: 12px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 8px;
`;

export const ProductIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #f3f4f6;
`;

export const ProductIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #171717;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  ${sizeMobile(css`
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  `)}
`;

export const ProductNumber = styled.span`
  margin-right: 4px;
`;

export const CompanyName = styled.span`
  color: #666;
  font-weight: 400;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled.span`
  color: #f59e0b;
  font-size: 16px;
`;

export const RatingText = styled.span`
  color: #171717;
  font-weight: 500;
  font-size: 14px;
`;

export const UsageStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 6px;
`;

export const UsageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
`;

export const UsageIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #e5e7eb;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const AIBadge = styled.span`
  background: #3b82f6;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;

export const InfoBadge = styled.span`
  background: #f59e0b;
  color: white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
`;

export const ViewAllLink = styled.a`
  color: #ef4444;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const TabContainer = styled.div`
  border-bottom: 1px solid #e5e7eb;
  ${sizeMobile(css`
    margin-top: 24px;
  `)}
`;

export const TabList = styled.div`
  display: flex;
  gap: 32px;
`;

export const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 12px 0;
  font-size: 16px;
  color: ${props => (props.active ? "#171717" : "#666")};
  cursor: pointer;
  border-bottom: 2px solid
    ${props => (props.active ? "#171717" : "transparent")};
  font-weight: ${props => (props.active ? "500" : "400")};

  &:hover {
    color: #171717;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #171717;
  max-width: 800px;
  margin-top: 24px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0px;
`;

export const Tag = styled.span`
  background: #f3f4f6;
  color: #374151;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "🏷️";
    font-size: 12px;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 20px;
  overflow-x: auto;
  ${hideScrollBarCss}
`;

export const ImageCard = styled.div`
  min-width: 250px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f4f6;
  overflow-x: auto;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
`;
