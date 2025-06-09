import { Table as AntTable } from "antd";
import styled from "styled-components";

import { sizeMobile } from "../../utils/styles";

export const TableWrapper = styled.div<{
  height?: string | number;
  width?: string | number;
}>`
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "auto"};
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "100%"};
  overflow: auto;

  .ant-table-wrapper {
    height: 100%;
  }

  ${sizeMobile`
    .ant-table {
      font-size: 12px;
      
      .ant-table-thead > tr > th {
        padding: 8px;
      }
      
      .ant-table-tbody > tr > td {
        padding: 8px;
      }
    }
  `}
`;

export const TableContainerDiv = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;

  ${sizeMobile`
    padding: 12px;
    border-radius: 6px;
  `}
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  ${sizeMobile`
    margin-bottom: 12px;
    flex-direction: column;
    align-items: flex-start;
    
    > *:not(:first-child) {
      margin-top: 8px;
    }
  `}
`;

export const TableTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;

  ${sizeMobile`
    font-size: 14px;
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledTable = styled(AntTable)`
  .ant-table-thead > tr > th {
    background-color: #f5f5f5;
    font-weight: 600;
  }

  .ant-table-tbody > tr:hover > td {
    background-color: rgba(0, 0, 0, 0.02);
  }

  .ant-table-row {
    cursor: pointer;
  }
`;

export const EmptyStateMessage = styled.div`
  padding: 24px;
  text-align: center;
  color: #666;
  font-size: 14px;
`;
