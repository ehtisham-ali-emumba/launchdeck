import { type BaseTableProps } from "./types";
import { TableWrapper, StyledTable, EmptyStateMessage } from "./styles";
import { getDefaultRowKey } from "./utils";

export const Table = <T extends object = any>({
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
}: BaseTableProps<T>) => {
  // Configure pagination
  const paginationConfig =
    pagination === true
      ? { pageSize: 10, showSizeChanger: false }
      : pagination === false
        ? false
        : pagination;

  // Configure row clicking
  const onRow = onRowClick
    ? (record: T, index?: number) => ({
        onClick: () => onRowClick(record, index),
      })
    : undefined;

  return (
    <TableWrapper height={height} width={width} className={className}>
      <StyledTable
        columns={columns}
        dataSource={data}
        rowKey={rowKey}
        pagination={paginationConfig}
        size={size}
        scroll={scroll}
        loading={loading}
        onRow={onRow}
        locale={{
          emptyText: <EmptyStateMessage>No data available</EmptyStateMessage>,
        }}
        {...tableProps}
      />
    </TableWrapper>
  );
};
