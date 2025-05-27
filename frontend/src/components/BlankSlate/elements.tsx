import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const BlankSlateTitle = styled((props) => (
  <Title level={3} {...props} />
))`
  &.ant-typography {
    font-weight: 400;
    color: #797c9a;
    margin-top: 20px;
  }
`;
export const BlankSlateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: 0px 16px;
`;
