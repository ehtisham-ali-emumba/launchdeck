import styled, { css } from "styled-components";

import { Wrapper } from "~/styles";
import { sizeMobile } from "~/utils";

export const Container = styled(Wrapper)`
  justify-content: flex-start;
  height: calc(100vh - 90px);
`;

export const Box = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const GridWrapper = styled.div<{ width?: number }>`
  margin: 0 auto;
  width: ${props => props.width || "100%"};
`;

export const ListContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
`;

export const LandscapeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const LandscapeTitle = styled.h1`
  font-size: 26px;
  font-weight: 400;
  color: #1a202c; /* Dark gray */
  margin-bottom: 0px;
  text-align: left;
  padding: 0px 16px;
  ${sizeMobile(css`
    font-size: 24px;
  `)}
`;

export const ContentBox = styled.div`
  margin-top: -10px;
`;
