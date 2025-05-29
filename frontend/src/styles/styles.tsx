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
  width: 550px;
  margin: 0 auto;
  ${sizeLg(css`
    margin-top: 20px;
    width: 450px;
  `)} ${sizeMobile(css`
    flex-direction: column;
    width: 300px;
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
