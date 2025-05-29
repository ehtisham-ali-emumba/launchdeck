import { useState } from "react";
import styled from "styled-components";
import { Typography, Button, Tabs, Avatar, Tag } from "antd";
import { colors } from "~/constants";
import { images_png } from "~/assets";
import { Spacer } from "~/components";
import { RecentLaunches } from "./RecentLaunches";
const { Title, Text } = Typography;

const CardContainer = styled.div`
  background: #fff;
  border-radius: 18px;
  max-width: 900px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #f3f4f6;
  object-fit: cover;
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  margin: 16px 0 0 0;
  color: #6b7280;
  font-size: 15px;
`;

const StyledTabs = styled(Tabs)`
  margin: 24px 0 0 0;
  .ant-tabs-nav-list {
    gap: 32px;
  }
`;

const Section = styled.div`
  margin: 32px 0 0 0;
`;

const DescriptionHeading = styled(Title)`
  && {
    font-size: 20px;
    margin-bottom: 0;
  }
`;

const DescriptionText = styled(Text)`
  display: block;
  margin: 8px 0 0 0;
  font-size: 16px;
  color: #374151;
`;

const AvatarsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 24px 0 0 0;
  background-color: ${colors.lightBG};
  padding: 16px;
  border-radius: 12px;
`;

const StatusBadge = styled.div`
  border: 1.5px solid #ff7875;
  color: #ff7875;
  border-radius: 20px;
  padding: 2px 18px;
  font-size: 15px;
  font-weight: 500;
  margin-left: auto;
`;

const ScrollGallery = styled.div`
  display: flex;
  gap: 24px;
  margin: 32px 0 0 0;
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

const GalleryImage = styled.img`
  width: 220px;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  background: #f3f4f6;
  flex: 0 0 auto;
`;

const TagsRow = styled.div`
  margin: 32px 0 0 0;
  display: flex;
  gap: 12px;
`;

export function ProductDetailsCard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Shoutouts", "Reviews", "Launches"];

  return (
    <>
      <CardContainer>
        <HeaderRow>
          <Logo
            src="https://ph-files.imgix.net/76710619-0e0c-4456-918d-f5f2cb58e1cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&frame=1&dpr=2"
            alt="Next.js"
          />
          <HeaderInfo>
            <Title level={3} style={{ marginBottom: 0 }}>
              Next.js
            </Title>
            <Text type="secondary" style={{ fontSize: 17 }}>
              Create web applications with the power of React components
            </Text>
            <StatsRow>
              <span>⭐ 85 reviews</span>
              <span>· 313 shoutouts</span>
              <span>· 1.9K followers</span>
            </StatsRow>
          </HeaderInfo>
          <Actions>
            <Button type="default" href="https://nextjs.org" target="_blank">
              Visit website
            </Button>
            <Button type="primary">Follow</Button>
          </Actions>
        </HeaderRow>

        <StyledTabs
          defaultActiveKey="overview"
          items={[
            { key: "overview", label: "Overview" },
            { key: "launches", label: "Launches" },
            { key: "forums", label: "Forums" },
            { key: "shoutouts", label: "Shoutouts" },
            { key: "reviews", label: "Reviews" },
            { key: "team", label: "Team" },
            { key: "awards", label: "Awards" },
            { key: "more", label: "More" },
          ]}
        />

        <Section>
          <DescriptionHeading level={4}>What is Next.js?</DescriptionHeading>
          <DescriptionText>
            The React framework for production. Next.js provides
            zero-configuration automatic code splitting, filesystem based
            routing, hot code reloading and universal rendering.
          </DescriptionText>
        </Section>

        <AvatarsRow>
          <Avatar.Group maxCount={4} size="large">
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/men/45.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/women/46.jpg" />
          </Avatar.Group>
          <Text style={{ marginLeft: 8, fontSize: 15 }}>
            you and 8,031 others use Next.js
          </Text>
          <StatusBadge>In my stack</StatusBadge>
        </AvatarsRow>

        <ScrollGallery>
          <GalleryImage src={images_png.homeMain3} alt="Gallery 1" />
          <GalleryImage src={images_png.homeMain3} alt="Gallery 2" />
          <GalleryImage src={images_png.homeMain3} alt="Gallery 3" />
          <GalleryImage src={images_png.homeMain3} alt="Gallery 2" />
          <GalleryImage src={images_png.homeMain3} alt="Gallery 3" />
          <GalleryImage src={images_png.homeMain3} alt="Gallery 2" />
          <GalleryImage src={images_png.homeMain3} alt="Gallery 3" />
        </ScrollGallery>

        <TagsRow>
          <Tag color="blue">Engineering & Development</Tag>
          <Tag color="geekblue">Static site generators</Tag>
          <Tag color="purple">UI frameworks</Tag>
        </TagsRow>
      </CardContainer>
      <Spacer marginTop="60px" />
      <RecentLaunches />
    </>
  );
}
