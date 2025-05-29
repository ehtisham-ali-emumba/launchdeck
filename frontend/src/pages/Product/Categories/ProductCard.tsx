import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { images_png } from "~/assets";
import { Button } from "~/components";

const Container = styled.div`
  padding: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 8px;
`;

const ProductIcon = styled.div`
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #000000, #333333);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "▲";
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #171717;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProductNumber = styled.span``;

const CompanyName = styled.span`
  color: #666;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.span`
  color: #f59e0b;
  font-size: 16px;
`;

const RatingText = styled.span`
  color: #171717;
  font-weight: 500;
  font-size: 14px;
`;

const UsageStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const UsageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
`;

const UsageIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #e5e7eb;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const AIBadge = styled.span`
  background: #3b82f6;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;

const InfoBadge = styled.span`
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

const ViewAllLink = styled.a`
  color: #ef4444;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TabContainer = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;

const TabList = styled.div`
  display: flex;
  gap: 32px;
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 12px 0;
  font-size: 16px;
  color: ${(props) => (props.active ? "#171717" : "#666")};
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#171717" : "transparent")};
  font-weight: ${(props) => (props.active ? "500" : "400")};

  &:hover {
    color: #171717;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #171717;
  max-width: 800px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

const Tag = styled.span`
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

const ViewDetailsButton: typeof Button = styled((props) => (
  <Button variant="outlined" size="small" {...props} />
))`
  margin-top: 8px;
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
`;

const ImageCard = styled.div`
  width: 230px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export function ProductCard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Shoutouts", "Reviews", "Launches"];

  return (
    <StyledLink to={"/products/productId"}>
      <Container>
        <ProductHeader>
          <ProductIcon />
          <ProductInfo>
            <ProductTitle>
              <ProductNumber>1.</ProductNumber>
              <span>Vercel</span>
              <span>—</span>
              <CompanyName>
                The frontend cloud. Creators of Next.js.
              </CompanyName>
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
            {tabs.map((tab) => (
              <Tab
                key={tab}
                active={activeTab === tab}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab);
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </TabContainer>

        <Description>
          Vercel provides the developer tools and cloud infrastructure to build,
          scale, and secure a faster, more personalized web.
        </Description>

        <ImageGrid>
          <ImageCard>
            <CardImg src={images_png.homeMain2} />
          </ImageCard>
          <ImageCard>
            <CardImg src={images_png.homeMain2} />
          </ImageCard>
          <ImageCard>
            <CardImg src={images_png.homeMain2} />
          </ImageCard>
        </ImageGrid>

        <TagContainer>
          <Tag>Static site generators</Tag>
          <Tag>Cloud Computing Platforms</Tag>
        </TagContainer>
      </Container>
    </StyledLink>
  );
}
