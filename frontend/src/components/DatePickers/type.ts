import type { RangePickerProps } from "antd/es/date-picker";

export type DateType = {
  dateProps?: RangePickerProps;
  customText?: string;
};

export type DatePickerOnChangeType = RangePickerProps["onChange"];
