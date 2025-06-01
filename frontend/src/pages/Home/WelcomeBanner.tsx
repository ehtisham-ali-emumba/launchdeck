import { CloseOutlined, HeartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Button } from "../../components";
import { colors } from "../../constants";
import { useState } from "react";

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fef7f3;
  border-radius: 24px;
  padding: 24px 32px;
  gap: 20px;
  position: relative;
  margin: 32px 0;
`;

const IconBox = styled.div`
  background: #fff;
  border: 2px solid #fff7e0;
  border-radius: 16px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerContent = styled.div`
  flex: 1;
`;

const BannerTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #232629;
`;

const BannerSubtitle = styled.div`
  color: #6f6f6f;
  font-size: 18px;
  margin-top: 2px;
`;

const TourLink = styled.span`
  color: ${colors.primary};
  font-weight: 600;
  text-decoration: none;
  margin-left: 4px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseBtn = styled(props => (
  <Button variant="icon-transparent" {...props} />
))`
  background: ${colors.white};
`;

export const WelcomeBanner = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <BannerWrapper>
      <IconBox>
        <HeartOutlined />
      </IconBox>
      <BannerContent>
        <BannerTitle>Welcome to Launch Deck!</BannerTitle>
        <BannerSubtitle>
          The place to launch and discover new tech products.
          <TourLink>Take a tour.</TourLink>
        </BannerSubtitle>
      </BannerContent>
      <CloseBtn onClick={() => setShow(false)}>
        <CloseOutlined />
      </CloseBtn>
    </BannerWrapper>
  );
};
