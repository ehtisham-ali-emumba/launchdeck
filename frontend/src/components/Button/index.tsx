import { Button as AntdButton } from "antd";
import styled, { css } from "styled-components";
import { colors } from "../../constants";
import type { StyledButtonProps } from "./type";

const getSizeStyles = (size = "medium") => {
  switch (size) {
    case "small":
      return css`
        height: 32px;
        padding: 0 16px;
        font-size: 14px;
      `;
    case "large":
      return css`
        height: 56px;
        padding: 0 32px;
        font-size: 18px;
      `;
    case "medium":
    default:
      return css`
        height: 48px;
        padding: 0 24px;
        font-size: 16px;
      `;
  }
};

const primaryStyles = css`
  &&.ant-btn {
    background-color: ${colors.accentOrange};
    color: ${colors.white};
    border: none;
    &:hover,
    &:focus {
      background-color: #e56e50;
      border-color: #e56e50;
      color: white;
    }
  }
`;

const secondaryStyles = css`
  &&.ant-btn {
    background-color: transparent;
    color: ${colors.btnSecondary};
    border: none;
    box-shadow: none;

    &:hover {
      background-color: transparent;
      color: ${colors.btnHover.secondary};
      border-color: transparent;
    }
  }
`;

const outlinedStyles = css`
  &&.ant-btn {
    background-color: transparent;
    color: ${colors.outline};
    border: 1px solid ${colors.outline};
    font-weight: 600;
    &:hover,
    &:focus {
      background-color: ${colors.btnHover.outlined};
      color: ${colors.outline};
      border-color: ${colors.outline};
    }
  }
`;

const iconStyles = css`
  &&.ant-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 24px;
    color: ${colors.accentOrange};
    border: none;

    &:hover,
    &:focus {
      background-color: rgb(235, 234, 234);
      border-color: #e56e50;
      color: ${colors.accentOrange};
    }
  }
`;

const iconTransparentStyles = css`
  ${iconStyles}
  background-color: transparent;
  border: none;
  box-shadow: none;
`;

export const Button = styled(AntdButton)<StyledButtonProps>`
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ size = "medium", variant }) =>
    ["icon", "icon-transparent"].includes(variant!)
      ? null
      : getSizeStyles(size)}

  ${({ variant = "primary" }) => {
    switch (variant) {
      case "secondary":
        return secondaryStyles;
      case "outlined":
        return outlinedStyles;
      case "icon":
        return iconStyles;
      case "icon-transparent":
        return iconTransparentStyles;
      case "primary":
      default:
        return primaryStyles;
    }
  }}
 
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
    
    &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${colors.disabledColor};
  }
`;
