import { Typography } from "antd";
import styled, { css } from "styled-components";

import { colors } from "~/constants";
import { sizeMobile } from "~/utils";

const { Title, Text } = Typography;

export const Box = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
`;

export const BoxFlex = styled.div`
  display: flex;
  align-items: center;
  ${sizeMobile(css`
    gap: 6px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 18px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 0px 12px;
`;

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #f3f4f6;
  object-fit: cover;
`;

export const HeaderInfo = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  margin: 8px 0 0 0;
  color: #6b7280;
  font-size: 15px;
`;

export const Section = styled.div`
  margin: 12px 12px;
`;

export const DescriptionHeading = styled(Title)`
  && {
    font-size: 20px;
    margin-bottom: 0;
  }
`;

export const DescriptionText = styled(Text)`
  display: block;
  margin: 8px 0 0 0;
  font-size: 16px;
  color: #374151;
`;

export const AvatarsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 24px 12px;
  background-color: ${colors.lightBG};
  padding: 12px;
  border-radius: 12px;
`;

export const StatusBadge = styled.div`
  border: 1.5px solid #ff7875;
  color: #ff7875;
  border-radius: 20px;
  padding: 2px 18px;
  font-size: 15px;
  font-weight: 500;
  margin-left: auto;
  text-align: center;
`;

export const ScrollGallery = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 12px;
  overflow-x: auto;
  padding-bottom: 8px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const GalleryImage = styled.img`
  width: 220px;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  background: #f3f4f6;
  flex: 0 0 auto;
`;

export const TagsRow = styled.div`
  margin: 24px 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Tag = styled.span`
  background: #f3f4f6;
  color: #374151;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "🏷️";
    font-size: 12px;
    margin-top: 4px;
    margin-right: 2px;
  }
`;
