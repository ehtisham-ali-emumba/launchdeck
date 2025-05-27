import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import type { InputProps, SelectProps } from "antd";

export type PhoneInputProps = {
  inputProps?: InputProps;
  selectProps?: SelectProps;
};

export type FormPhoneInputValues = FieldValues & { countryCode: string };

export type FormPhoneInputProps<T extends FormPhoneInputValues> = {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  label?: string;
};
