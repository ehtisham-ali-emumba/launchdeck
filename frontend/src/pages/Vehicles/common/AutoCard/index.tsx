import React, { useCallback } from "react";
import { Dropdown, type MenuProps } from "antd";
import { truncate } from "../../../../utils";
import { Card } from "../../../../components";
import {
  AutoCardTitle,
  AutoCardDescription,
  AutoMetaInfoContainer,
  AutoMetaText,
  PriceText,
  AutoChip,
  DropDownIcon,
} from "./elements";
import type { AutoCardProps } from "./type";
import { actionItems, cardDimensions } from "./utils";

export const AutoCard: React.FC<AutoCardProps> = ({
  id,
  name,
  modelYear,
  price,
  engine,
  description,
  fuelType,
  color,
  imageSrc,
  onClick,
  chipText = "",
  onEditClick,
  onDeleteClick,
  brandId,
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
      imageHeight={200}
      imageSrc={imageSrc}
      url={`/brands/${brandId}/autos/${id}`}
      renderContent={() => (
        <>
          <AutoCardTitle level={4}>
            {truncate(`${name} (${modelYear})`, 26, "...")}
          </AutoCardTitle>
          <AutoCardDescription>
            {truncate(description, 60, "...")}
          </AutoCardDescription>
          <AutoMetaInfoContainer>
            <AutoMetaText>{engine}</AutoMetaText>
            <AutoMetaText>{fuelType}</AutoMetaText>
            <AutoMetaText>{color}</AutoMetaText>
          </AutoMetaInfoContainer>
        </>
      )}
      renderUpperRight={() =>
        chipText ? <AutoChip>{chipText}</AutoChip> : null
      }
      renderLowerLeft={() => <PriceText>$ {price.toLocaleString()}</PriceText>}
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
