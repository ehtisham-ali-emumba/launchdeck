export const cityNames = [
  "Miami",
  "Seattle",
  "Denver",
  "Boston",
  "Berlin",
  "Los Angeles",
  "San Francisco",
  "Washington D.C.",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Mexico City",
  "Rio de Janeiro",
  "Buenos Aires",
  "Sao Paulo",
  "Lima",
];

export const priceRanges = [
  { value: "50-200", label: "$50 - $200" },
  { value: "200-400", label: "$200 - $400" },
  { value: "400-500", label: "$400 - $500" },
  { value: "500-750", label: "$500 - $750" },
  { value: "750-1000", label: "$750 - $1000" },
  { value: "1000+", label: "$1000 Above" },
];

export const generateParams = (params: Record<string, unknown>): string => {
  return Object.entries(params)
    .filter(
      ([, value]) => value !== null && value !== undefined && value !== ""
    )
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
