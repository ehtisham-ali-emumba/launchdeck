import { css, type CSSProp } from "styled-components";

export const sizeMobile = (content: CSSProp) => css`
  @media (max-width: 768px) {
    ${content};
  }
`;

export const sizeTablet = (content: CSSProp) => css`
  @media (max-width: 1024px) {
    ${content};
  }
`;

export const sizeLg = (content: CSSProp) => css`
  @media (max-width: 1200px) {
    ${content};
  }
`;
