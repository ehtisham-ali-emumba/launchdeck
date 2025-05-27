import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import type { InputProps } from "antd";

export type InputType = {
  inputProps?: InputProps;
};

export interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  inputProps?: InputType["inputProps"];
  label?: string;
}
