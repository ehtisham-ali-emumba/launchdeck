import { Link } from "react-router-dom";

import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const FieldLabel = styled(Text)`
  display: block;
  font-size: 16px;
  color: #a1a1b5;
  margin-bottom: 6px;
  margin-top: 24px;
  text-transform: capitalize;
`;

export const BaseLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export const RequiredInputStar = styled.span`
  color: red;
  margin-left: 1px;
`;
