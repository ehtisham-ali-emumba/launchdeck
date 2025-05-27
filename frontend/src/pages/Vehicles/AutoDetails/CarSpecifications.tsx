import React, { useCallback, useState } from "react";
import { Button, Spacer } from "../../../components";
import { PlusOutlined } from "@ant-design/icons";
import { colors, uiStrings } from "../../../constants";
import { CarSpecsContainer, SpecsTitle, Row } from "./elements";
import { useAutoDetailsAtom } from "../../../hooks/atoms";
import { ModifyCarSpecModal } from "./ModifyCarSpecModal";
import { ConfirmationModal } from "../../../components/ConfirmationModal";
import { CarSpecsGrid } from "./CarSpecsGrid";
import type { CarSpecsType } from "./type";

export const CarSpecifications: React.FC<CarSpecsType> = ({ auto }) => {
  const { id } = auto;
  const { addOrEditAutoAttribute, deleteAutoAttribute } = useAutoDetailsAtom();

  const [modifyModalOpen, setModifyModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteSelectedAttr, setDeleteSelectedAttr] = useState<string | null>(
    null
  );
  const [editingKey, setEditingKey] = useState<string>("");
  const [editingValue, setEditingValue] = useState<string | number>("");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddEditClick = useCallback(
    (isEditMode?: boolean, key = "", value?: string | number) => {
      setEditingKey(key);
      setEditingValue(value ?? "");
      setIsEditMode(!!isEditMode);
      setModifyModalOpen(true);
    },
    []
  );

  const onCloseModifyModal = useCallback(() => {
    setModifyModalOpen(false);
    setEditingKey("");
    setEditingValue("");
  }, []);

  const handleModifyModalSubmit = useCallback(
    (key: string, value: string) => {
      addOrEditAutoAttribute(id, key, value);
      onCloseModifyModal();
    },
    [id, addOrEditAutoAttribute, onCloseModifyModal]
  );

  const handleDeleteClick = useCallback((key: string) => {
    setDeleteSelectedAttr(key);
    setDeleteModalOpen(true);
  }, []);

  const onCloseDeleteModal = useCallback(() => {
    setDeleteModalOpen(false);
    setDeleteSelectedAttr(null);
  }, []);

  const handleDeleteSubmit = useCallback(() => {
    deleteAutoAttribute(id, deleteSelectedAttr!);
    onCloseDeleteModal();
  }, [deleteAutoAttribute, id, deleteSelectedAttr, onCloseDeleteModal]);

  return (
    <CarSpecsContainer>
      <Row>
        <SpecsTitle>{uiStrings.carSpecs}</SpecsTitle>
        <Button variant="icon-transparent" onClick={() => handleAddEditClick()}>
          <PlusOutlined style={{ color: colors.black, fontSize: 20 }} />
        </Button>
      </Row>
      <Spacer marginTop="20px" />
      <CarSpecsGrid
        auto={auto}
        handleAddEditClick={handleAddEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      <ModifyCarSpecModal
        open={modifyModalOpen}
        initialKey={editingKey}
        initialValue={editingValue}
        onSubmit={handleModifyModalSubmit}
        onCancel={onCloseModifyModal}
        isEditMode={isEditMode}
      />
      <ConfirmationModal
        open={deleteModalOpen}
        onConfirm={handleDeleteSubmit}
        onCancel={onCloseDeleteModal}
        message={uiStrings.deleteSpecConfirmation}
      />
    </CarSpecsContainer>
  );
};
