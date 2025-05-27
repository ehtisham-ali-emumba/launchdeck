import styled from "styled-components";
import { Wrapper } from "../../../styles";

export const MyTourContainer = styled(Wrapper)`
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Box = styled.div({
  marginTop: "150px",
  width: "100%",
  paddingBottom: "82px",
});

export const Heading = styled(Title)({
  textAlign: "left",
  marginBottom: "40px",
  marginLeft: "12px",
});
