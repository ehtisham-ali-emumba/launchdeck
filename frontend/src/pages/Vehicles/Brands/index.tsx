import React, { useCallback, useMemo, useState } from "react";
import { Button, Input, Spacer } from "../../../components";
import { uiStrings } from "../../../constants/uiStrings";
import { Box, Container, InputContainer } from "./elements";
import { PlusOutlined } from "@ant-design/icons";
import { colors } from "../../../constants";
import { BrandUpdateModal } from "./BrandUpdateModal";
import { BrandsGrid } from "./BrandsGrid";
import { ConfirmationModal } from "../../../components/ConfirmationModal";
import { useBrandsAtom } from "../../../hooks/atoms/useBrandsAtom";
import { filterBrandsBySearch, inputSearchStyles } from "./utils";
import type { BrandUpdateFormValues } from "./type";

export const Brands = () => {
  const [search, setSearch] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingBrandId, setEditingBrandId] = useState<number | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteBrandId, setDeleteBrandId] = useState<number | null>(null);

  const { addBrand, removeBrand, updateBrand, brands } = useBrandsAtom();

  const filteredBrandsBySearch = useMemo(
    () => filterBrandsBySearch(search, brands),
    [search, brands]
  );

  const handleEditClick = useCallback((carId: number) => {
    setEditingBrandId(carId);
    setEditModalOpen(true);
  }, []);

  const onCloseEditModal = useCallback(() => {
    setEditingBrandId(null);
    setEditModalOpen(false);
  }, []);

  const handleCarUpdateSubmit = useCallback(
    (values: BrandUpdateFormValues) => {
      updateBrand(values);
      onCloseEditModal();
    },
    [updateBrand, onCloseEditModal]
  );

  const handleDeleteClick = useCallback((brandId: number) => {
    setDeleteBrandId(brandId);
    setDeleteModalOpen(true);
  }, []);

  const onCloseDeleteModal = useCallback(() => {
    setDeleteModalOpen(false);
    setDeleteBrandId(null);
  }, []);

  const handleDeleteSubmit = useCallback(() => {
    removeBrand(deleteBrandId!);
    onCloseDeleteModal();
  }, [removeBrand, deleteBrandId, onCloseDeleteModal]);

  return (
    <Container>
      <Box>
        <Spacer marginTop="80px" />
        <InputContainer>
          <Input
            inputProps={{
              placeholder: uiStrings.brandSearchPlaceholder,
              style: inputSearchStyles,
              value: search,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value),
            }}
          />
          <Button
            variant="icon-transparent"
            onClick={addBrand}
            title={uiStrings.addNewBrand}
          >
            <PlusOutlined style={{ color: colors.accentOrange }} />
          </Button>
        </InputContainer>
        <BrandsGrid
          brands={filteredBrandsBySearch}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </Box>
      <BrandUpdateModal
        open={editModalOpen}
        editingBrandId={editingBrandId}
        onOk={handleCarUpdateSubmit}
        onCancel={onCloseEditModal}
      />
      <ConfirmationModal
        open={deleteModalOpen}
        onConfirm={handleDeleteSubmit}
        onCancel={onCloseDeleteModal}
        message={uiStrings.deleteBrandConfirmation}
      />
    </Container>
  );
};
