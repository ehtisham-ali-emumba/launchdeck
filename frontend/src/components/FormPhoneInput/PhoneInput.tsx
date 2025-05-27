import React from "react";
import { Space, Select, Input } from "antd";
import { countryCodeArray } from "./utils";
import type { PhoneInputProps } from "./type";

const PhoneInput: React.FC<PhoneInputProps> = ({ inputProps, selectProps }) => {
  return (
    <Space.Compact style={{ width: "100%" }}>
      <Select defaultValue="+1" options={countryCodeArray} {...selectProps} />
      <Input type="number" {...inputProps} />
    </Space.Compact>
  );
};

export default PhoneInput;
