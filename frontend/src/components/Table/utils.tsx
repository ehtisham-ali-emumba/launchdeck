export const createPagination = (pageSize = 10, showSizeChanger = false) => {
  return {
    pageSize,
    showSizeChanger,
    showTotal: (total: number, range: [number, number]) =>
      `${range[0]}-${range[1]} of ${total} items`,
  };
};

export const getDateSorter = (dateField: string) => {
  return (a: Record<string, any>, b: Record<string, any>) => {
    const dateA = a[dateField] ? new Date(a[dateField]).getTime() : 0;
    const dateB = b[dateField] ? new Date(b[dateField]).getTime() : 0;
    return dateA - dateB;
  };
};

export const getNumberSorter = (numField: string) => {
  return (a: Record<string, any>, b: Record<string, any>) => {
    const numA = a[numField] || 0;
    const numB = b[numField] || 0;
    return numA - numB;
  };
};

export const getStringSorter = (strField: string) => {
  return (a: Record<string, any>, b: Record<string, any>) => {
    const strA = a[strField] || "";
    const strB = b[strField] || "";
    return strA.localeCompare(strB);
  };
};

export const formatDate = (
  date: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, options);
};

export const renderNumericValue = (value: number, highlight = false) => (
  <span style={{ fontWeight: highlight ? "600" : "normal" }}>{value}</span>
);

export const getDefaultRowKey = (record: any, index?: number) =>
  record.id || record._id || index;
