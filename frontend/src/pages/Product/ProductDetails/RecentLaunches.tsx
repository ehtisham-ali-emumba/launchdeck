import {
  MessageOutlined,
  BellOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import styled from "styled-components";

import type { RecentLaunchesType } from "./type";

const { Text } = Typography;

const Section = styled.section`
  margin-top: 32px;
  max-width: 900px;
  margin: 0 auto;
`;

const LaunchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 24px;
`;

const LaunchRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
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
  background: #f3f4f6;
`;

const LaunchText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const LaunchTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: #171717;
`;

const LaunchDesc = styled(Text)`
  font-size: 17px;
  color: #374151;
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
  gap: 24px;
`;

const StatBox = styled.div`
  min-width: 50px;
  min-height: 50px;
  background: #fff;
  border: 2px solid #eceff3;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #374151;
  gap: 2px;
`;

const Badge = styled.div`
  background: #e0e7ff;
  color: #7c3aed;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 16px;
`;

export const RecentLaunches: React.FC<RecentLaunchesType> = ({ product }) => {
  return (
    <Section>
      <Text style={{ fontSize: 20 }}>Recent {product.name} Launches</Text>
      <LaunchList>
        <LaunchRow>
          <LaunchInfo>
            <LaunchIcon src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" />
            <LaunchText>
              <LaunchTitle>{product.name} Buzz</LaunchTitle>
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
        </LaunchRow>
        {/* {product.name} */}
        <LaunchRow>
          <LaunchInfo>
            <LaunchIcon
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="{product.name}"
            />
            <LaunchText>
              <LaunchTitle>{product.name}</LaunchTitle>
              <LaunchDesc>The collaborative interface design tool</LaunchDesc>
              <LaunchDate>
                <ClockCircleOutlined /> Launched on March 21st, 2025
              </LaunchDate>
            </LaunchText>
          </LaunchInfo>
          <LaunchStats>
            <StatBox>
              <MessageOutlined style={{ fontSize: 22 }} />
              <div>6</div>
            </StatBox>
            <StatBox>
              <BellOutlined style={{ fontSize: 22 }} />
              <div>29</div>
            </StatBox>
          </LaunchStats>
        </LaunchRow>
        {/* {product.name} Slides */}
        <LaunchRow>
          <LaunchInfo>
            <LaunchIcon
              src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
              alt="{product.name} Slides"
            />
            <LaunchText>
              <LaunchTitle>{product.name} Slides</LaunchTitle>
              <LaunchDesc>
                Create presentations & slides for every occasion
              </LaunchDesc>
              <LaunchDate>
                <ClockCircleOutlined /> Launched on June 27th, 2024
              </LaunchDate>
            </LaunchText>
          </LaunchInfo>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Badge>
              <span role="img" aria-label="badge">
                🏅
              </span>{" "}
              2
            </Badge>
            <LaunchStats>
              <StatBox>
                <MessageOutlined style={{ fontSize: 22 }} />
                <div>36</div>
              </StatBox>
              <StatBox>
                <BellOutlined style={{ fontSize: 22 }} />
                <div>686</div>
              </StatBox>
            </LaunchStats>
          </div>
        </LaunchRow>
      </LaunchList>
    </Section>
  );
};
