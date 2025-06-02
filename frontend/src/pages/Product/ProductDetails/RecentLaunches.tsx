import {
  MessageOutlined,
  BellOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import styled, { css } from "styled-components";

import { sizeMobile } from "~/utils";

import type { RecentLaunchesType } from "./type";

const { Text } = Typography;

const Section = styled.section`
  margin: 0px auto;
  width: 100%;
  max-width: 900px;
`;

const LaunchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin: 32px;
  ${sizeMobile(css`
    margin: 32px 16px 0px 16px;
  `)}
  }

`;

const LaunchRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

const BoxFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  ${sizeMobile(css`
    flex-direction: column;
    gap: 16px;
  `)}
`;
const LaunchInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const LaunchIcon = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 16px;
  object-fit: contain;
  background: rgb(87, 104, 137);
`;

const LaunchText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const LaunchTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: #171717;
`;

const LaunchDesc = styled(Text)`
  font-size: 16px;
  color: rgb(19, 20, 21);
`;

const LaunchDate = styled(Text)`
  font-size: 16px;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`;

const LaunchStats = styled.div`
  display: flex;
  gap: 12px;
`;

const StatBox = styled.div`
  width: 55px;
  height: 55px;
  background: #fff;
  border: 2px solid #eceff3;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #374151;
  gap: 4px;
`;
const HeaderTitle = styled(Text)`
  font-size: 22px;
  margin-left: 16px;
`;
export const RecentLaunches: React.FC<RecentLaunchesType> = ({ product }) => {
  return (
    <Section>
      <HeaderTitle>Recent {product.name} Launches</HeaderTitle>
      <LaunchList>
        {[1, 2].map((item, key) => (
          <LaunchRow key={item}>
            <LaunchIcon src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" />
            <BoxFlex>
              <LaunchInfo>
                <LaunchText>
                  <LaunchTitle>
                    {product.name} Buzz {key + 2}.0
                  </LaunchTitle>
                  <LaunchDesc>Asset production made easy.</LaunchDesc>
                  <LaunchDate>
                    <ClockCircleOutlined /> Launched on May 8th, 2025
                  </LaunchDate>
                </LaunchText>
              </LaunchInfo>
              <LaunchStats>
                <StatBox>
                  <MessageOutlined style={{ fontSize: 18 }} />
                  <div>12</div>
                </StatBox>
                <StatBox>
                  <BellOutlined style={{ fontSize: 18 }} />
                  <div>206</div>
                </StatBox>
              </LaunchStats>
            </BoxFlex>
          </LaunchRow>
        ))}
      </LaunchList>
    </Section>
  );
};
