import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import type { SelectProps } from "antd";

export type FormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  selectProps?: SelectType["selectProps"];
  label?: string;
};

export type SelectType = {
  selectProps?: SelectProps;
};
