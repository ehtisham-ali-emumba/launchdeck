import { Link } from "react-router-dom";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import styled, { css } from "styled-components";

import { Button } from "~/components";

import { colors, uiStrings } from "../../../constants";
import { sizeTablet, zIndex } from "../../../utils";

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  background-color: transparent;
  height: 80px;
  position: absolute;
  left: 0;
  right: 0;
  border-bottom: 2px solid ${colors.lightborder};
  z-index: ${zIndex.navBar};
  &&.ant-layout-header {
    padding: 0 16px;
  }
`;

export const LogoLink = styled(Link)`
  margin-top: 15px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

   ${sizeTablet(css`
     display: none; /* Hide desktop menu on mobile */
   `)} 
  }
  #active-button {
    color: ${colors.accentOrange};
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    background-color: ${colors.accentOrange};
    border-radius: 2px;
  }

  ${sizeTablet(css`
    display: flex; /* Hide desktop menu on mobile */
  `)}
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 300px;
  height: 100%;
  background-color: white;
  flex-direction: column;
  padding: 12px;
  transition: left 0.3s ease-in-out;

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
    align-items: center;

    #active-button {
      color: ${colors.accentOrange};
      text-decoration: underline;
    }

    a {
      font-size: 18px;
      color: ${colors.btnSecondary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const SubmitButtonLink = styled(Link)`
  ${sizeTablet(css`
    display: none;
  `)}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  ${sizeTablet(css`
    gap: 0px 8px;
    flex: 1;
    justify-content: space-between;
  `)}
`;

export const SubmitButton_ = styled(Button)`
  border-radius: 24px;
  height: 42px;
  margin: 2px 4px;
  &&.ant-btn {
    background-color: ${colors.btnHover.primary};
  }
`;

const ShadowContainer = styled.div`
  position: relative;
  border-radius: 24px;

  &:hover {
    filter: drop-shadow(0 2px 6px red) /* Red */ drop-shadow(0 2px 6px white)
      /* White */ drop-shadow(0 2px 6px rgba(255, 165, 0, 0.4)) /* Orange */
      drop-shadow(0 2px 6px rgba(0, 255, 0, 0.3)) /* Green */
      drop-shadow(0 2px 6px rgba(0, 0, 255, 0.3)) /* Blue */
      drop-shadow(0 2px 6px rgba(75, 0, 130, 0.2)) /* Indigo */
      drop-shadow(0 2px 6px rgba(238, 130, 238, 0.2)); /* Violet */
  }
  transition: filter 0.3s ease;
`;

const SubmitButtonWrapper = styled.div.attrs({
  className: "SubmitButtonWrapper",
})`
  position: relative;
  overflow: hidden;
  height: 50px;
  line-height: 54px;
  border-radius: 24px;
  &:hover .button-gradient {
    animation: rotate 3s linear infinite;
    opacity: 0.8;
  }
`;

const ButtonGradient = styled.div.attrs({ className: "button-gradient" })`
  position: absolute;
  width: 100%;
  height: 200px;
  top: -80px;
  background: conic-gradient(red, orange, green, blue, indigo, violet, red);
  z-index: 0;
  pointer-events: none;
  transition:
    opacity 0.3s,
    box-shadow 0.3s;
  opacity: 0.5;
  animation: none;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SubmitButton = () => {
  return (
    <ShadowContainer>
      <SubmitButtonWrapper>
        <ButtonGradient />
        <SubmitButton_ variant="primary">
          <PlusCircleOutlined /> {uiStrings.submit}
        </SubmitButton_>
      </SubmitButtonWrapper>
    </ShadowContainer>
  );
};
