import { Flex, Image } from "antd";
import styled, { css } from "styled-components";
import { sizeTablet } from "../../../utils";
import { Flex1 } from "../../../styles";

export const Box = styled.div`
  margin-top: 100px;
`;

export const ImageWrapper = styled(Flex)`
  flex: 1;
  ${sizeTablet(css`
    display: none;
  `)}
`;
export const ImageUI = styled(Image)`
  &.ant-image-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-height: 600px;
  }
`;
export const FormWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
`;

export const ContentWrapper = styled(Flex1)`
  min-height: 80vh;
`;
