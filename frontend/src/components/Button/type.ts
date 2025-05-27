import type { ButtonProps } from "antd";

// Define the button variants
type ButtonVariant =
  | "primary"
  | "outlined"
  | "secondary"
  | "icon"
  | "icon-transparent";

export type StyledButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: ButtonVariant;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
};
