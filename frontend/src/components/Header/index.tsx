import { Space } from "antd";
import {
  StyledHeader,
  NavMenu,
  ExploreButton,
  HamburgerMenu,
  MobileMenu,
  LogoLink,
} from "./elements";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { uiStrings } from "../../constants/uiStrings";
import { TourLogoSvg } from "../../assets";
import { useIsActiveRoute } from "../../hooks/useIsActiveRoute";
import type { HeaderProps } from "./type";

export const Header: React.FC<HeaderProps> = ({ hideExplore }) => {
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
        <TourLogoSvg />
      </LogoLink>
      <NavMenu>
        <Space size={36}>
          <Link to="/brands">
            <Button variant="secondary" id={getActiveButtonClass("/brands")}>
              {uiStrings.brands}
            </Button>
          </Link>
          <Link to="/virtualization">
            <Button
              variant="secondary"
              id={getActiveButtonClass("/virtualization")}
            >
              {uiStrings.virtualization}
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

      {/* Explore Button */}
      {hideExplore ? (
        <div />
      ) : (
        <Link to="/explore">
          <ExploreButton type="primary">{uiStrings.exploreNews}</ExploreButton>
        </Link>
      )}

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
            <TourLogoSvg />
          </LogoLink>
          <Button variant="icon-transparent" onClick={toggleMobileMenu}>
            <CloseOutlined />
          </Button>
        </div>
        <div className="menu-links">
          <Link
            to="/brands"
            onClick={toggleMobileMenu}
            id={getActiveButtonClass("/brands")}
          >
            {uiStrings.brands}
          </Link>
          <Link
            to="/virtualization"
            onClick={toggleMobileMenu}
            id={getActiveButtonClass("/virtualization")}
          >
            {uiStrings.virtualization}
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
          {!hideExplore && (
            <Link
              to="/explore"
              onClick={toggleMobileMenu}
              id={getActiveButtonClass("/explore")}
            >
              {uiStrings.exploreNews}
            </Link>
          )}
        </div>
      </MobileMenu>
    </StyledHeader>
  );
};
