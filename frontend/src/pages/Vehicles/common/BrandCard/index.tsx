import React, { useCallback } from "react";
import { Dropdown, type MenuProps } from "antd";
import { actionItems, cardDimensions, imageStyles } from "./utils";
import { truncate } from "../../../../utils";
import { Card } from "../../../../components";
import {
  BrandCardTitle,
  BrandCardDescription,
  DropDownIcon,
  RatingContainer,
  ReviewCount,
  StarRating,
} from "./elements";
import type { BrandCardProps } from "./type";

export const BrandCard: React.FC<BrandCardProps> = ({
  id,
  name,
  description,
  imageSrc,
  onClick,
  onEditClick,
  onDeleteClick,
}) => {
  const handleMenuClick: MenuProps["onClick"] = (info) => {
    info.domEvent.preventDefault();
    info.domEvent.stopPropagation();
    if (info.key === "edit") onEditClick?.(id);
    else if (info.key === "delete") onDeleteClick?.(id);
  };

  const dropdownClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <Card
      onClick={onClick}
      dimensions={cardDimensions}
      imageHeight={170}
      imageSrc={imageSrc}
      imageStyles={imageStyles}
      url={`/brands/${id}/autos`}
      renderContent={() => (
        <>
          <BrandCardTitle level={4}>{truncate(name, 26, "...")}</BrandCardTitle>
          <BrandCardDescription>
            {truncate(description, 110, "...")}
          </BrandCardDescription>
        </>
      )}
      renderLowerLeft={() => (
        <RatingContainer>
          <StarRating>★★★★★</StarRating>
          <ReviewCount>(5)</ReviewCount>
        </RatingContainer>
      )}
      renderLowerRight={() => (
        <Dropdown
          menu={{ items: actionItems, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <span onClick={dropdownClick}>
            <DropDownIcon />
          </span>
        </Dropdown>
      )}
    />
  );
};
