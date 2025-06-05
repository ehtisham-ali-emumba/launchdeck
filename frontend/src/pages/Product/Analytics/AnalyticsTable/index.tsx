import React from "react";
import { Table } from "~/components";
import { TableContainer } from "~/components/Table/TableContainer";
import type { AnalyticsTableProps } from "./types";
import { getColumnsByType } from "./utils";

export const AnalyticsTable: React.FC<AnalyticsTableProps> = ({
  data,
  type,
  title,
  ...tableProps
}) => {
  const columns = React.useMemo(() => getColumnsByType(type), [type]);

  return (
    <TableContainer title={title}>
      <Table
        data={data}
        columns={columns}
        rowKey={(record, index) => record.id || record._id || index}
        pagination={{ pageSize: 10, showSizeChanger: false }}
        scroll={{ x: true }}
        size="small"
        {...tableProps}
      />
    </TableContainer>
  );
};
