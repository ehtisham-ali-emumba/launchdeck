import { useState } from "react";

import {
  StyledLink,
  Container,
  ProductHeader,
  ProductIcon,
  ProductIconImg,
  ProductInfo,
  ProductTitle,
  ProductNumber,
  CompanyName,
  RatingContainer,
  Stars,
  Star,
  RatingText,
  UsageStats,
  UsageItem,
  UsageIcon,
  AIBadge,
  InfoBadge,
  ViewAllLink,
  TabContainer,
  TabList,
  Tab,
  Description,
  ImageGrid,
  ImageCard,
  CardImg,
  TagContainer,
  Tag,
} from "./elements";
import type { ProductCardType } from "./type";

export const ProductCard: React.FC<ProductCardType> = ({ product, index }) => {
  const { name, description, image, tags, _id } = product;
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Comments", "Reviews"];

  return (
    <StyledLink to={`/products/${_id}`}>
      <Container>
        <ProductHeader>
          <ProductIcon>
            <ProductIconImg src={image} alt={name} />
          </ProductIcon>
          <ProductInfo>
            <ProductTitle>
              <span>
                <ProductNumber>{index}.</ProductNumber>
                <span>{name}</span>
              </span>
              <CompanyName>{description}</CompanyName>
            </ProductTitle>

            <RatingContainer>
              <Stars>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star style={{ opacity: 0.5 }}>★</Star>
              </Stars>
              <RatingText>4.6 (155 reviews)</RatingText>
            </RatingContainer>

            <UsageStats>
              <UsageItem>
                <UsageIcon>👥</UsageIcon>
                Used by 2645:
              </UsageItem>
              <UsageItem>
                <AIBadge>C</AIBadge>
                Chance AI: Visual Reasoning
                <InfoBadge>i</InfoBadge>
              </UsageItem>
              <UsageItem>
                <UsageIcon>C</UsageIcon>
                Clara
              </UsageItem>
              <UsageItem>
                <UsageIcon>❄️</UsageIcon>
                Virtuans AI
              </UsageItem>
              <ViewAllLink>View all</ViewAllLink>
            </UsageStats>
          </ProductInfo>
        </ProductHeader>

        <TabContainer>
          <TabList>
            {tabs.map(tab => (
              <Tab
                key={tab}
                active={activeTab === tab}
                onClick={e => {
                  e.preventDefault();
                  setActiveTab(tab);
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </TabContainer>
        <Description>{description}</Description>
        <ImageGrid>
          {[1, 2, 3].map(item => (
            <ImageCard key={item}>
              <CardImg src={image} />
            </ImageCard>
          ))}
        </ImageGrid>

        <TagContainer>
          {tags?.map?.(item => <Tag key={item}>{item}</Tag>)}
        </TagContainer>
      </Container>
    </StyledLink>
  );
};
