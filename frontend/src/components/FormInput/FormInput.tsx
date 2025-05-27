import { Controller, type FieldValues } from "react-hook-form";
import { FieldLabel } from "../elements";
import { ErrorText } from "./elements";
import type { FormInputProps } from "./type";
import { Input } from "./Input";

export const FormInput = <T extends FieldValues>({
  name,
  control,
  inputProps,
  label = name,
}: FormInputProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FieldLabel>{label}</FieldLabel>
            <Input
              inputProps={{
                ...field,
                ...inputProps,
              }}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </div>
  );
};
