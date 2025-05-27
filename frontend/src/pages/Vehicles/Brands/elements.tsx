import { Modal, Form, Typography } from "antd";
import styled, { css } from "styled-components";
import { Wrapper } from "../../../styles";
import { sizeMobile } from "../../../utils";

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

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px 25px 0px;
  width: 100%;
  gap: 10px;
  ${sizeMobile(css`
    gap: 0px;
    margin: 20px auto;
  `)}
`;

export const GridWrapper = styled.div<{ width?: number }>`
  margin: 0 auto;
  width: ${(props) => props.width || "100%"};
  height: 100%;
`;

export const ListContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
`;

export const CarUpdateStyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
    padding: 24px;
  }
`;

export const CarUpdateStyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 18px;
  }
`;
