import React from "react";
import {
  StyledBaseCard,
  BaseCardImageWrapper,
  BaseCardImage,
  BaseCardContent,
  BaseCardUpperLeft,
  BaseCardUpperRight,
  FooterWrapper,
} from "./elements";
import { BaseLink } from "../elements";
import { cardDimensions } from "./utils";
import type { CardProps } from "./type";

export const Card: React.FC<CardProps> = ({
  imageSrc,
  onClick,
  imageHeight = 200,
  dimensions = cardDimensions,
  imageStyles = {},
  footerStyles = {},
  renderLowerLeft = () => null,
  renderLowerRight = () => null,
  renderUpperLeft = () => null,
  renderUpperRight = () => null,
  renderContent = () => null,
  url,
}) => {
  return (
    <BaseLink to={url} onClick={onClick}>
      <StyledBaseCard
        dimensions={dimensions}
        imageHeight={imageHeight}
        hoverable={false}
        cover={
          <BaseCardImageWrapper imageHeight={imageHeight}>
            <BaseCardImage src={imageSrc} style={imageStyles} />
          </BaseCardImageWrapper>
        }
      >
        <BaseCardContent>{renderContent()}</BaseCardContent>
        <BaseCardUpperLeft>{renderUpperLeft()}</BaseCardUpperLeft>
        <BaseCardUpperRight>{renderUpperRight()}</BaseCardUpperRight>
        <FooterWrapper style={footerStyles}>
          {renderLowerLeft()}
          {renderLowerRight()}
        </FooterWrapper>
      </StyledBaseCard>
    </BaseLink>
  );
};
