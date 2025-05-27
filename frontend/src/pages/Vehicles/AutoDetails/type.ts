import type { Auto } from "../../../atoms/autosAtom";

export type CarHeaderType = { auto: Auto };

export type CarSpecsType = {
  auto: Auto;
};

export type CarSpecsGridType = {
  auto: Auto;
  handleAddEditClick: (
    isEditMode?: boolean,
    key?: string,
    value?: string | number
  ) => void;
  handleDeleteClick: (key: string) => void;
};
