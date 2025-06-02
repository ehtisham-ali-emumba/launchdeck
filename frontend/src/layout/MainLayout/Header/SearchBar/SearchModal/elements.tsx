import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

import { Input } from "~/components";
import { sizeMobile } from "~/utils";

export const ModalSearchInput = styled(Input)`
  .ant-input {
    font-size: 16px;
    padding: 12px 16px;
  }
`;

export const NoResults = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: #8c8c8c;
  font-size: 16px;
`;

export const ResultsList = styled.div`
  margin-top: 22px;
  max-height: 400px;
  overflow-y: auto;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  padding: 12px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ResultImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 12px;
`;

export const ResultContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${sizeMobile(css`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `)}
`;

export const ResultTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 4px;
`;

export const ResultDescription = styled.div`
  font-size: 14px;
  color: #8c8c8c;
`;

export const ResultCategory = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #1677ff;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
  text-align: right;
  width: auto;
  ${sizeMobile(css`
    margin-top: 8px;
    text-align: left;
    padding: 4px 0;
  `)}
`;
