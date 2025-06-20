import styled, { css } from "styled-components";

import { Input } from "~/components";
import { colors } from "~/constants";
import { sizeMobile } from "~/utils";

export const SearchBarContainer = styled.div`
  border-radius: 6px;
  width: 280px;
  position: relative;
  ${sizeMobile(css`
    width: 200px;
  `)}
`;

export const SearchInput = styled(props => (
  <Input
    {...props}
    inputProps={{
      style: {
        width: "200px",
        backgroundColor: colors.lightBG,
        borderRadius: 24,
      },
      ...props?.inputProps,
    }}
  />
))``;

export const AbsoluteDiv = styled.div`
  position: absolute;
  top: 13px;
  left: 0;
  right: 0;
  cursor: pointer;
  bottom: 13px;
`;
