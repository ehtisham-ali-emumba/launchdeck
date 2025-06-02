import { useState } from "react";

import { CloseOutlined, HeartOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";

import { sizeMobile } from "~/utils";

import { Button } from "../../components";
import { colors } from "../../constants";

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fef7f3;
  border-radius: 24px;
  padding: 24px 32px;
  gap: 20px;
  position: relative;
  margin: 32px 12px;
  ${sizeMobile(css`
    align-items: flex-start;
    padding: 24px 16px;
  `)}
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
  ${sizeMobile(css`
    display: none;
  `)}
`;

const BannerContent = styled.div`
  flex: 1;
  justify-content: space-between;
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
  ${sizeMobile(css`
    margin-top: 12px;
  `)}
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
  ${sizeMobile(css`
    display: block;
    margin-top: 8px;
  `)}
`;

const CloseBtn = styled(props => (
  <Button variant="icon-transparent" {...props} />
))`
  background: ${colors.white};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;

  ${sizeMobile(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

export const WelcomeBanner = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <BannerWrapper>
      <BannerContent>
        <TextBox>
          <IconBox>
            <HeartOutlined />
          </IconBox>
          <div>
            <BannerTitle>Welcome to Launch Deck!</BannerTitle>
            <BannerSubtitle>
              The place to launch and discover new tech products.
              <TourLink>Take a tour.</TourLink>
            </BannerSubtitle>
          </div>
        </TextBox>
      </BannerContent>
      <CloseBtn onClick={() => setShow(false)}>
        <CloseOutlined />
      </CloseBtn>
    </BannerWrapper>
  );
};
