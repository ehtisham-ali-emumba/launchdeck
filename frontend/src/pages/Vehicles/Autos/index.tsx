import React, { useCallback, useMemo, useState } from "react";

import { useParams } from "react-router-dom";

import { PlusOutlined } from "@ant-design/icons";

import { Button, Input, Select, Spacer } from "../../../components";
import { ConfirmationModal } from "../../../components/ConfirmationModal";
import ErrorContainer from "../../../components/ErrorContainer";
import { colors } from "../../../constants";
import { uiStrings } from "../../../constants/uiStrings";
import { useAutosAtom } from "../../../hooks/atoms/useAutosAtom";
import { useBrandsAtom } from "../../../hooks/atoms/useBrandsAtom";
import { checkBrandExists } from "../Brands/utils";

import { CarGrid } from "./CarGrid";
import { CarUpdateModal } from "./CarUpdateModal";
import { ActionWrapper, Box, Container, InputContainer } from "./elements";
import type { CarUpdateFormValues } from "./type";
import {
  colorOptions,
  colorSelectStyles,
  inputSearchStyles,
  searchAutosByFilters,
} from "./utils";

export const Autos = () => {
  const { brandId } = useParams<{ brandId: string }>();

  const [search, setSearch] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingCarId, setEditingCarId] = useState<number | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteCarId, setDeleteCarId] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState("");

  const { autos } = useAutosAtom();
  const { brands } = useBrandsAtom();
  const { addAuto, updateAuto, deleteAuto } = useAutosAtom();

  const filteredAutosBySearch = useMemo(
    () => searchAutosByFilters(autos, search, selectedColor),
    [search, autos, selectedColor]
  );

  const handleEditClick = useCallback((carId: number) => {
    setEditingCarId(carId);
    setEditModalOpen(true);
  }, []);

  const onCloseEditModal = useCallback(() => {
    setEditingCarId(null);
    setEditModalOpen(false);
  }, []);

  const handleCarUpdateSubmit = useCallback(
    (values: CarUpdateFormValues) => {
      updateAuto(values);
      onCloseEditModal();
    },
    [updateAuto, onCloseEditModal]
  );

  const handleDeleteClick = useCallback((carId: number) => {
    setDeleteCarId(carId);
    setDeleteModalOpen(true);
  }, []);

  const onCloseDeleteModal = useCallback(() => {
    setDeleteModalOpen(false);
    setDeleteCarId(null);
  }, []);

  const handleDeleteSubmit = useCallback(() => {
    deleteAuto(deleteCarId!);
    onCloseDeleteModal();
  }, [deleteAuto, deleteCarId, onCloseDeleteModal]);

  const isBrandExists = useMemo(
    () => checkBrandExists(Number(brandId), brands),
    [brands, brandId]
  );

  if (!isBrandExists)
    return <ErrorContainer message={uiStrings.brandNotExists} />;

  return (
    <Container>
      <Box>
        <Spacer marginTop="80px" />
        <InputContainer>
          <Input
            inputProps={{
              placeholder: uiStrings.carSearchPlaceholder,
              style: inputSearchStyles,
              value: search,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value),
            }}
          />
          <ActionWrapper>
            <Select
              selectProps={{
                style: colorSelectStyles,
                value: selectedColor,
                options: colorOptions,
                onChange: value => setSelectedColor(value),
                placeholder: "Color",
                allowClear: true,
              }}
            />
            <Button
              variant="icon-transparent"
              onClick={() => addAuto(Number(brandId))}
              title={uiStrings.addNewCar}
            >
              <PlusOutlined style={{ color: colors.accentOrange }} />
            </Button>
          </ActionWrapper>
        </InputContainer>
        <CarGrid
          autos={filteredAutosBySearch}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </Box>
      <CarUpdateModal
        open={editModalOpen}
        editingCarId={editingCarId}
        onOk={handleCarUpdateSubmit}
        onCancel={onCloseEditModal}
      />
      <ConfirmationModal
        open={deleteModalOpen}
        onConfirm={handleDeleteSubmit}
        onCancel={onCloseDeleteModal}
        message={uiStrings.deleteAutoConfirmation}
      />
    </Container>
  );
};
