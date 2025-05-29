import styled from "styled-components";
import { Input } from "~/components";

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
  margin-top: 16px;
  max-height: 400px;
  overflow-y: auto;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

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
  align-items: center;
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

export const ResultCategory = styled.div`
  font-size: 12px;
  color: #1677ff;
  background: #f0f5ff;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
`;
