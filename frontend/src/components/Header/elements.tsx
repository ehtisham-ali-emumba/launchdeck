import { Layout } from "antd";
import styled, { css } from "styled-components";
import { colors } from "../../constants";
import { sizeTablet, zIndex } from "../../utils";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  height: 80px;
  position: absolute;
  left: 0;
  right: 0;
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

export const ExploreButton = styled((props) => (
  <Button variant="primary" {...props} />
))`
  padding: 0 16px;
  border-radius: 8px;
  cursor: pointer;

  ${sizeTablet(css`
    display: none; /* Hide desktop menu on mobile */
  `)}
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
