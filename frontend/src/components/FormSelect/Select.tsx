import { Select as Select_ } from "antd";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { SelectType } from "./type";

export const Select = (props: SelectType) => {
  const { selectProps } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Select_
      style={{ flex: 1 }}
      open={isOpen}
      onDropdownVisibleChange={(open) => setIsOpen(open)}
      suffixIcon={isOpen ? <UpOutlined /> : <DownOutlined />}
      {...selectProps}
    />
  );
};
