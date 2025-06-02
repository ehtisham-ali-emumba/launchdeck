import { Flex, Layout as Layout_ } from "antd";
import { Header as Header_ } from "antd/es/layout/layout";
import styled, { css } from "styled-components";

import { sizeLg, sizeMobile } from "../utils";

export const Wrapper = styled.div`
  min-height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ContentSection = styled.div`
  flex: 1;
  display: flex;
  margin-top: 150px;
  justify-content: center;
  ${sizeMobile(css`
    margin-top: 100px;
  `)}
`;

export const Layout = styled(Layout_)`
  background-color: transparent;
`;

export const Header = styled(Header_)`
  background-color: transparent;
`;

export const Flex1 = styled(Flex)`
  flex: 1;
  margin: 0 auto;
  width: 550px;
  ${sizeLg(css`
    width: 450px;
  `)} ${sizeMobile(css`
    flex-direction: column;
    align-items: center;
    width: 100%;
  `)};
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled(Wrapper)`
  justify-content: flex-start;
  height: calc(100vh - 90px);
`;

export const ColBox = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const hideScrollBarCss = css`
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
