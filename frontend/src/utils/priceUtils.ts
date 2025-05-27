import { uiStrings } from "../constants";

const priceRanges = [
  { min: 50, max: 200, label: "$50 - $200" },
  { min: 200, max: 400, label: "$200 - $400" },
  { min: 400, max: 500, label: "$400 - $500" },
  { min: 500, max: 750, label: "$500 - $750" },
  { min: 750, max: 1000, label: "$750 - $1000" },
  { min: 1000, max: Infinity, label: "$1000 Above" },
];

export const getPriceLabel = (price: number | string): string => {
  const range = priceRanges.find(({ min, max }) => {
    const priceValue = typeof price === "string" ? parseFloat(price) : price;
    return priceValue >= min && priceValue <= max;
  });
  return range ? range.label : uiStrings.priceNotAvailable;
};
