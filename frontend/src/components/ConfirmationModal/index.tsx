import React, { useState } from "react";
import { Modal, Typography } from "antd";
import { Button } from "../Button";
import { uiStrings } from "../../constants";
import type { ConfirmationModalProps } from "./type";
import { ButtonContainer, ErrorHeading } from "./elements";

const { Text } = Typography;

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  children,
  onCancel = () => {},
  onConfirm = () => {},
  hideConfirmButton = false,
  heading = uiStrings.deleteConfirmation,
  message = uiStrings.deleteConfirmationMessage,
  open,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClose();
    onCancel();
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    onConfirm();
  };

  const modalVisible = typeof children === "function" ? isVisible : !!open;

  return (
    <>
      {typeof children === "function" && children(handleOpen)}

      <Modal
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        closable={false}
      >
        <ErrorHeading>{heading}</ErrorHeading>
        <Text>{message}</Text>
        <ButtonContainer>
          <Button variant="secondary" onClick={handleCancel}>
            {uiStrings.cancel}
          </Button>
          {!hideConfirmButton && (
            <Button variant="primary" onClick={handleConfirm}>
              {uiStrings.confirm}
            </Button>
          )}
        </ButtonContainer>
      </Modal>
    </>
  );
};
