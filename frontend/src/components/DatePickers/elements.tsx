import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const iconStyles = { style: { fontSize: "12px", color: "#bfbfbf" } };
export const datePickerStyles = {
  width: "0px",
  height: "0px",
  marginLeft: "-100px",
};

export const CustomText = styled(Text)<{ dateText?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => (props.dateText ? "black" : "#bfbfbf")};
`;
