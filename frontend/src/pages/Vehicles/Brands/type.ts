import type { BrandType } from "../../../atoms/brandsAtom";

export type BrandUpdateFormValues = {
  id: number;
  name: string;
  description: string;
};
export interface CarUpdateModalProps {
  open: boolean;
  editingBrandId: number | null;
  onOk: (values: BrandUpdateFormValues) => void;
  onCancel: () => void;
  confirmLoading?: boolean;
}

export type BrandGridProps = {
  handleEditClick: (brandId: number) => void;
  handleDeleteClick: (brandId: number) => void;
  brands: BrandType[];
};
