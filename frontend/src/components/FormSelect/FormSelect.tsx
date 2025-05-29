import { Controller, type FieldValues } from "react-hook-form";
import { FieldLabel, RequiredInputStar } from "../elements";
import { ErrorText } from "./elements";
import type { FormSelectProps } from "./type";
import { Select } from "./Select";

export const FormSelect = <T extends FieldValues>({
  name,
  control,
  selectProps,
  label = name,
  required,
}: FormSelectProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FieldLabel>
              {label}
              {required && <RequiredInputStar>*</RequiredInputStar>}
            </FieldLabel>
            <Select
              {...field}
              selectProps={{
                ...selectProps,
                onChange: (value) => {
                  field.onChange(value);
                },
                value: field.value,
              }}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </div>
  );
};
