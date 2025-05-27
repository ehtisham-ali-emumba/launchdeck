export function truncate(str: string, maxLength: number, appendStr = "") {
  if (typeof str !== "string" || str.length <= maxLength) return str;
  const result = str.slice(0, maxLength);
  return result + appendStr;
}
