import {
  Controller,
  useFormContext,
  useWatch,
  type Path,
} from "react-hook-form";
import { FieldLabel } from "../elements";
import { ErrorText } from "./elements";
import type { FormPhoneInputProps, FormPhoneInputValues } from "./type";
import PhoneInput from "./PhoneInput";

export const FormPhoneInput = <T extends FormPhoneInputValues>({
  name,
  control,
  label = name,
}: FormPhoneInputProps<T>) => {
  const { setValue } = useFormContext();
  const countryCode = useWatch({
    control,
    name: "countryCode" as Path<T>,
  });

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FieldLabel>{label}</FieldLabel>
            <PhoneInput
              inputProps={{ ...field }}
              selectProps={{
                value: countryCode,
                onChange: (value) => setValue("countryCode", value),
              }}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </div>
  );
};
