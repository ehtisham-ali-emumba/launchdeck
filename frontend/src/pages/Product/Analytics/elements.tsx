import { Typography, Alert, Divider } from "antd";
import styled, { css } from "styled-components";

import { sizeMobile } from "~/utils/styles";

export const RootWrapper = styled.div`
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
`;
export const TryTheseText = styled.span`
  margin-right: 8px;
  color: #666;
  font-size: 12px;
`;

export const ContentWrapper = styled.div`
  min-height: 100vh;
  padding: 32px;

  ${sizeMobile(css`
    padding: 16px;
  `)}
`;

export const HeadingWrapper = styled.div`
  margin-bottom: 32px;
  text-align: center;

  ${sizeMobile(css`
    margin-bottom: 24px;
  `)}
`;

export const DescText = styled(Typography.Text)`
  font-size: 16px;

  ${sizeMobile(css`
    font-size: 14px;
  `)}
`;

export const StyledAlert = styled(Alert)`
  margin-bottom: 24px;
`;

export const ChartSection = styled.div`
  margin-bottom: 24px;

  ${sizeMobile(css`
    margin-bottom: 16px;
  `)}
`;

export const TableSection = styled.div`
  margin-bottom: 24px;

  ${sizeMobile(css`
    margin-bottom: 16px;
    .table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      .ant-table {
        min-width: 600px; // Ensures table doesn't get too squeezed

        .ant-table-cell {
          white-space: nowrap;
          padding: 8px !important;
          font-size: 14px;
        }
      }

      .ant-table-container {
        border: 0;
      }

      .ant-table-pagination {
        /* Remove horizontal scroll from pagination */
        overflow-x: visible !important;
        flex-wrap: wrap !important;
        display: flex;
        gap: 4px;
        padding: 0 8px;
        margin: 8px 0 !important;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .ant-table-pagination::-webkit-scrollbar {
        display: none;
      }
    }
  `)}
`;

export const StyledDivider = styled(Divider)`
  margin: 24px 0;

  ${sizeMobile(css`
    margin: 16px 0;
  `)}
`;

export const PaddDiv = styled.div`
  padding: 32px 0;
  text-align: center;

  ${sizeMobile(css`
    padding: 24px 0;
  `)}
`;

export const LoadingText = styled(Typography.Text)`
  font-size: 16px;
`;
