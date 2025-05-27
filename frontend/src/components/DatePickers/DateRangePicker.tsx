import { DatePicker } from "antd";
import { useState } from "react";
import { Button } from "../Button";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { InlineSpacer } from "../Spacer";
import { uiStrings } from "../../constants";
import { CustomText, datePickerStyles, iconStyles } from "./elements";
import type { DatePickerOnChangeType, DateType } from "./type";

export const CustomRangePicker: React.FC<DateType> = ({
  dateProps = {},
  customText = uiStrings.chooseHere,
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [dateText, setDateText] = useState("");
  const { onChange = () => {} } = dateProps;

  const handleToggle = () => {
    setIsPickerOpen((prev) => !prev);
  };

  const onChangeHandler: DatePickerOnChangeType = (dates, dateStrings) => {
    if (!dates) {
      setIsPickerOpen(false);
      setDateText("");
    } else {
      setIsPickerOpen(true);
      setDateText(`${dateStrings[0]} - ${dateStrings[1]}`);
    }
    onChange(dates, dateStrings);
  };
  return (
    <>
      <Button size="small" variant="secondary" onClick={handleToggle}>
        <CustomText dateText={!!dateText}>
          {dateText || customText}
          <InlineSpacer marginLeft="5px" />
          {isPickerOpen ? (
            <UpOutlined {...iconStyles} />
          ) : (
            <DownOutlined {...iconStyles} />
          )}
        </CustomText>
      </Button>
      <DatePicker.RangePicker
        {...dateProps}
        open={isPickerOpen}
        onOpenChange={handleToggle}
        onChange={onChangeHandler}
        allowClear
        variant="borderless"
        suffixIcon={null}
        placeholder={["", ""]}
        components={{}}
        format="YYYY-MM-DD"
        style={datePickerStyles}
        size="small"
        separator={null}
      />
    </>
  );
};
