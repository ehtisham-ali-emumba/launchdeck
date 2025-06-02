import { Typography, Button, Avatar, Tag } from "antd";

import { Spacer } from "~/components";
import { StyledTabs } from "~/styles";
import { getRandomAvatarUrl, getRandomImageUrl } from "~/utils";

import {
  Actions,
  AvatarsRow,
  BoxFlex,
  CardContainer,
  DescriptionHeading,
  DescriptionText,
  GalleryImage,
  HeaderInfo,
  HeaderRow,
  Logo,
  ScrollGallery,
  Section,
  StatsRow,
  StatusBadge,
  TagsRow,
} from "./elements";
import { RecentLaunches } from "./RecentLaunches";
import type { ProductDetailsCardType } from "./type";
import { tabsArray } from "./utils";

const { Title, Text } = Typography;

export const ProductDetailsCard: React.FC<ProductDetailsCardType> = ({
  product,
}) => {
  const { image, name, description, tags } = product;

  return (
    <>
      <CardContainer>
        <HeaderRow>
          <Logo
            src={image}
            alt="Next.js"
            onError={e => (e.currentTarget.src = getRandomImageUrl(0))}
          />
          <HeaderInfo>
            <Title level={3} style={{ margin: 0 }}>
              {name}
            </Title>
            <Text type="secondary" style={{ fontSize: 17 }}>
              {description}
            </Text>
            <StatsRow>
              <span>⭐ 85 reviews</span>
              <span>· 313 shoutouts</span>
              <span>· 1.9K followers</span>
            </StatsRow>
            <Actions>
              <Button type="default" href="https://nextjs.org" target="_blank">
                Visit website
              </Button>
              <Button type="primary">Follow</Button>
            </Actions>
          </HeaderInfo>
        </HeaderRow>

        <StyledTabs defaultActiveKey="overview" items={tabsArray} />

        <Section>
          <DescriptionHeading level={4}>What is {name}?</DescriptionHeading>
          <DescriptionText>{description}</DescriptionText>
        </Section>

        <AvatarsRow>
          <BoxFlex>
            <Avatar.Group max={{ count: 3 }} size="large">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Avatar
                  key={index}
                  src={getRandomAvatarUrl(index)}
                  alt={`Avatar ${index + 1}`}
                />
              ))}
            </Avatar.Group>
            <Text style={{ marginLeft: 8, fontSize: 15 }}>
              you and 8,031 others use {name}
            </Text>
          </BoxFlex>
          <StatusBadge>In my stack</StatusBadge>
        </AvatarsRow>

        <ScrollGallery>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <GalleryImage
              key={index}
              src={getRandomImageUrl(index)}
              alt={`Gallery ${index + 1}`}
            />
          ))}
        </ScrollGallery>

        <TagsRow>
          {tags?.map?.(item => (
            <Tag color="purple" key={item}>
              {item}
            </Tag>
          ))}
        </TagsRow>
      </CardContainer>
      <Spacer marginTop="40px" />
      <RecentLaunches product={product} />
    </>
  );
};
