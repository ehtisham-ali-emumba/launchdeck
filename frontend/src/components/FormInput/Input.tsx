import { Input as InputField } from "antd";
import type { InputType } from "./type";

export const Input: React.FC<InputType> = ({ inputProps }) => {
  return (
    <InputField
      {...inputProps}
      style={{
        fontSize: "16px",
        ...inputProps?.style,
      }}
    />
  );
};
