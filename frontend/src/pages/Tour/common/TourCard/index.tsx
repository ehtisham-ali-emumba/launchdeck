import React from "react";
import {
  DollarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button } from "../../../../components";
import { getPriceLabel } from "../../../../utils/priceUtils";
import { ConfirmationModal } from "../../../../components";
import { uiStrings } from "../../../../constants";
import { truncate } from "../../../../utils";
import {
  CardTitle,
  CardDescription,
  MetaInfoContainer,
  MetaInfo,
  MetaText,
  HoverButton,
  BookingActionsContainer,
} from "./elements";
import type { TourCardProps } from "./type";
import { Link } from "react-router-dom";
import { Card } from "../../../../components/Card";
import { buttonIconStyles, cardDimensions, metaInfoIconStyles } from "./utils";

const TourCard: React.FC<TourCardProps> = ({
  imageSrc,
  id,
  title,
  description,
  price,
  duration,
  onClick = () => {},
  hasBooking,
  onDeleteBooking = () => {},
  onUpdateBooking = () => {},
}) => {
  const onUpdateBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onUpdateBooking?.();
  };
  const durationNumber = parseInt(duration || "0", 10);
  const canDelete = durationNumber > 3;
  const conditionalText = canDelete
    ? uiStrings.wantToDeleteBooking
    : uiStrings.deleteLimitText({ title });

  const deleteHandler = (e: React.MouseEvent, onOpen: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    onOpen();
  };

  return (
    <Card
      dimensions={cardDimensions}
      imageHeight={180}
      onClick={onClick}
      imageSrc={imageSrc}
      url={`/tour/${id}`}
      renderContent={() => (
        <>
          <CardTitle level={4}>{title}</CardTitle>
          <CardDescription>{truncate(description, 50, "...")}</CardDescription>
          {hasBooking ? (
            <BookingActionsContainer>
              <ConfirmationModal
                onConfirm={onDeleteBooking}
                message={conditionalText}
                hideConfirmButton={!canDelete}
              >
                {(onOpen) => (
                  <Button
                    variant="icon-transparent"
                    onClick={(e) => deleteHandler(e, onOpen)}
                    icon={<DeleteOutlined style={buttonIconStyles} />}
                  />
                )}
              </ConfirmationModal>
              <Link to={`/tour/${id}`}>
                <Button
                  variant="icon-transparent"
                  icon={<EyeOutlined style={buttonIconStyles} />}
                />
              </Link>
              <Button
                variant="icon-transparent"
                onClick={onUpdateBookingClick}
                icon={<EditOutlined style={buttonIconStyles} />}
              />
            </BookingActionsContainer>
          ) : (
            <>
              <MetaInfoContainer>
                {price && (
                  <MetaInfo>
                    <DollarOutlined style={metaInfoIconStyles} />
                    <MetaText>{getPriceLabel(price)}</MetaText>
                  </MetaInfo>
                )}
                {duration && (
                  <MetaInfo>
                    <ClockCircleOutlined style={metaInfoIconStyles} />
                    <MetaText>
                      {duration} {uiStrings.days}
                    </MetaText>
                  </MetaInfo>
                )}
              </MetaInfoContainer>
              <Link to={`/tour/${id}`}>
                <HoverButton>{uiStrings.viewDetails}</HoverButton>
              </Link>
            </>
          )}
        </>
      )}
    />
  );
};

export { TourCard };
