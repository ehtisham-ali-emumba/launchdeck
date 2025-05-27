import { Space } from "antd";
import {
  StyledHeader,
  NavMenu,
  HamburgerMenu,
  MobileMenu,
  LogoLink,
} from "./elements";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { uiStrings } from "../../constants/uiStrings";
import { LogoSvg } from "../../assets";
import { useIsActiveRoute } from "../../hooks/useIsActiveRoute";
import type { HeaderProps } from "./type";

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isRouteActive } = useIsActiveRoute();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const getActiveButtonClass = (path: string) => {
    return isRouteActive(path) ? "active-button" : "";
  };

  return (
    <StyledHeader>
      <LogoLink to="/">
        <LogoSvg />
      </LogoLink>
      <NavMenu>
        <Space size={36}>
          <Link to="/landscapes">
            <Button
              variant="secondary"
              id={getActiveButtonClass("/landscapes")}
            >
              {uiStrings.landscapes}
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="secondary" id={getActiveButtonClass("/products")}>
              {uiStrings.products}
            </Button>
          </Link>
          <Link to="/tours">
            <Button variant="secondary" id={getActiveButtonClass("/tours")}>
              {uiStrings.bookTour}
            </Button>
          </Link>
          <Link to="/my-tours">
            <Button variant="secondary" id={getActiveButtonClass("/my-tours")}>
              {uiStrings.myTours}
            </Button>
          </Link>
        </Space>
      </NavMenu>
      <div />

      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu onClick={toggleMobileMenu}>
        <span />
        <span />
        <span />
      </HamburgerMenu>

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
            to="/products"
            onClick={toggleMobileMenu}
            id={getActiveButtonClass("/products")}
          >
            {uiStrings.products}
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
        </div>
      </MobileMenu>
    </StyledHeader>
  );
};
