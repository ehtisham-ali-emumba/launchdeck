import { useState } from "react";

import { Link } from "react-router-dom";

import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";

import { ContentWrapper } from "~/styles";

import { LogoSvg } from "../../../assets";
import { Button } from "../../../components";
import { uiStrings } from "../../../constants/uiStrings";
import { useIsActiveRoute } from "../../../hooks/useIsActiveRoute";

import {
  StyledHeader,
  NavMenu,
  HamburgerMenu,
  MobileMenu,
  LogoLink,
  SubmitButton,
  Row,
  SubmitButtonLink,
} from "./elements";
import { ProductsDropdown } from "./ProductsDropdown";
import { SearchBar } from "./SearchBar";
import type { HeaderProps } from "./type";

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isRouteActive } = useIsActiveRoute();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const getActiveButtonClass = (path: string) => {
    return isRouteActive(path) ? "active-button" : "";
  };

  return (
    <StyledHeader>
      <ContentWrapper
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Row>
          <LogoLink to="/">
            <LogoSvg />
          </LogoLink>
          <SearchBar />
          {/* Hamburger Menu for Mobile */}
          <HamburgerMenu onClick={toggleMobileMenu}>
            <span />
            <span />
            <span />
          </HamburgerMenu>
        </Row>
        <NavMenu>
          <Link to="/analytics">
            <Button variant="secondary" id={getActiveButtonClass("/analytics")}>
              {uiStrings.analytics}
            </Button>
          </Link>
          <Link to="/landscapes">
            <Button
              variant="secondary"
              id={getActiveButtonClass("/landscapes")}
            >
              {uiStrings.landscapes}
            </Button>
          </Link>
          <ProductsDropdown />
        </NavMenu>
        <SubmitButtonLink to="/products/create">
          <SubmitButton variant="outlined">
            <PlusCircleOutlined /> {uiStrings.submit}
          </SubmitButton>
        </SubmitButtonLink>

        {/* Mobile Menu Modal */}
        <MobileMenu isOpen={isMobileMenuOpen}>
          <div className="menu-header">
            <LogoLink to="/">
              <LogoSvg />
            </LogoLink>
            <Button variant="icon-transparent" onClick={toggleMobileMenu}>
              <CloseOutlined />
            </Button>
          </div>
          <div className="menu-links">
            <Link
              to="/landscapes"
              onClick={toggleMobileMenu}
              id={getActiveButtonClass("/landscapes")}
            >
              {uiStrings.landscapes}
            </Link>
            <Link
              to="/tours"
              onClick={toggleMobileMenu}
              id={getActiveButtonClass("/tours")}
            >
              {uiStrings.bookTour}
            </Link>
            <Link
              to="/my-tours"
              onClick={toggleMobileMenu}
              id={getActiveButtonClass("/my-tours")}
            >
              {uiStrings.myTours}
            </Link>
            <Link
              to="/products/create"
              onClick={toggleMobileMenu}
              id={getActiveButtonClass("/my-tours")}
            >
              {uiStrings.submitProduct}
            </Link>
          </div>
        </MobileMenu>
      </ContentWrapper>
    </StyledHeader>
  );
};
