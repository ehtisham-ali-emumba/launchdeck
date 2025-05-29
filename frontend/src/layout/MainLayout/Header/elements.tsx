import { Layout } from "antd";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "../../../constants";
import { sizeTablet, zIndex } from "../../../utils";
import { Button } from "~/components";

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  background-color: transparent;
  height: 80px;
  position: absolute;
  left: 0;
  right: 0;
  border-bottom: 2px solid ${colors.lightborder};
  z-index: ${zIndex.navBar};
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

export const SubmitButton = styled(Button)`
  border-radius: 24px;
  height: 42px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
