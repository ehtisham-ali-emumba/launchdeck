import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const ErrorHeading = styled(Title)`
  &.ant-typography {
    color: red;
    font-size: 18px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;
