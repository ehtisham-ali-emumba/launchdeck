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
  ${sizeLg(css`
    margin-top: 20px;
  `)}
  ${sizeMobile(css`
    flex-direction: column;
  `)}
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
