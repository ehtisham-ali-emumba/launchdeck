import { uiStrings } from "~/constants";
import type { TSFixMe } from "~/types";

import { TableWrapper, StyledTable, EmptyStateMessage } from "./elements";
import { type BaseTableProps } from "./types";
import { getDefaultRowKey } from "./utils";

export const Table = <T extends object = TSFixMe>(props: BaseTableProps<T>) => {
  const {
    data,
    columns,
    rowKey = getDefaultRowKey,
    height,
    width,
    pagination = true,
    size,
    scroll,
    loading = false,
    className,
    onRowClick,
    tableProps,
  } = props;
  const paginationConfig =
    pagination === true
      ? { pageSize: 10, showSizeChanger: false }
      : pagination === false
        ? false
        : pagination;
  const onRow = onRowClick
    ? (record: T, index?: number) => ({
        onClick: () => onRowClick(record, index),
      })
    : undefined;

  return (
    <TableWrapper
      height={height}
      width={width}
      className={`table-wrapper ${className || ""}`}
    >
      <StyledTable<T>
        dataSource={data}
        columns={columns}
        rowKey={rowKey}
        pagination={paginationConfig}
        size={size}
        scroll={scroll}
        loading={loading}
        onRow={onRow}
        locale={{
          emptyText: (
            <EmptyStateMessage>{uiStrings.noDataAvailable}</EmptyStateMessage>
          ),
        }}
        {...tableProps}
      />
    </TableWrapper>
  );
};
