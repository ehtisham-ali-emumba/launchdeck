import styled from "styled-components";
import { Wrapper } from "../../../styles";
import { Typography } from "antd";

export const Container = styled(Wrapper)`
  justify-content: flex-start;
  height: 100vh;
`;

export const Box = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const Heading = styled(Typography.Title)({
  textAlign: "center",
  marginBottom: "40px",
});

export const InputContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "20px 0px 25px 0px",
  width: "100%",
  gap: "10px",
});

export const GridWrapper = styled.div<{ width?: number }>`
  margin: 0 auto;
  width: ${(props) => props.width || "100%"};
`;

export const ListContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
`;

export const UserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const UserDetailsContainer = styled.div`
  padding: 24px;
  min-width: 320px;
  text-align: center;
`;

// landscape

export const LandscapeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0;
`;

export const LandscapeTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #1a202c; /* Dark gray */
  margin-bottom: 8px;
  text-align: left;
`;

export const LandscapeDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #e2e8f0; /* Light gray */
  margin: 8px 0 16px 0;
`;

export const LandscapeSubtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #4a5568; /* Medium gray */
  margin: 0;
`;
export const ContentBox = styled.div`
  margin-top: -10px;
`;
