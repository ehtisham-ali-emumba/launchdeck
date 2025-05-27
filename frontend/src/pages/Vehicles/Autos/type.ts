import type { Auto } from "../../../atoms/autosAtom";

export type CarGridProps = {
  handleEditClick: (carId: number) => void;
  handleDeleteClick: (carId: number) => void;
  autos: Auto[];
};

export type CarUpdateFormValues = {
  id: number;
  name: string;
  description: string;
  price: number;
};
export interface CarUpdateModalProps {
  open: boolean;
  editingCarId: number | null;
  onOk: (values: CarUpdateFormValues) => void;
  onCancel: () => void;
  confirmLoading?: boolean;
}
