import type { BrandType } from "../../../atoms/brandsAtom";

export const checkBrandExists = (
  brandId: number,
  brandsArray: BrandType[]
): boolean => {
  return brandsArray.some((brand) => brand.id === brandId);
};

export const filterBrandsBySearch = (
  search: string,
  brandsArray: BrandType[]
): BrandType[] => {
  if (!search) return brandsArray;
  return brandsArray.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );
};

export const brands: BrandType[] = [
  {
    id: 1,
    name: "Honda",
    logoUrl:
      "https://img.icons8.com/?size=100&id=18806&format=png&color=000000",
    description:
      "Honda Motor Company, Ltd. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment.",
  },
  {
    id: 2,
    name: "Toyota",
    logoUrl:
      "https://img.icons8.com/?size=100&id=mEccIkjwF5gZ&format=png&color=000000",
    description:
      "Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan.",
  },
  {
    id: 3,
    name: "Ford",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    description:
      "Ford Motor Company is an American multinational automaker headquartered in Dearborn, Michigan.",
  },
  {
    id: 4,
    name: "BMW",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    description:
      "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational company which produces luxury vehicles and motorcycles.",
  },
  {
    id: 5,
    name: "Mercedes-Benz",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    description:
      "Mercedes-Benz is a German automotive brand known for luxury vehicles, buses, coaches, and trucks.",
  },
  {
    id: 6,
    name: "Audi",
    logoUrl:
      "https://img.icons8.com/?size=100&id=58310&format=png&color=000000",
    description:
      "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.",
  },
  {
    id: 7,
    name: "Hyundai",
    logoUrl:
      "https://img.icons8.com/?size=100&id=58881&format=png&color=000000",
    description:
      "Hyundai Motor Company is a South Korean multinational automotive manufacturer headquartered in Seoul, South Korea.",
  },
  {
    id: 8,
    name: "Kia",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    description:
      "Kia Corporation, commonly known as Kia, is a South Korean multinational automotive manufacturer headquartered in Seoul.",
  },
  {
    id: 9,
    name: "Nissan",
    logoUrl:
      "https://img.icons8.com/?size=100&id=57662&format=png&color=000000",
    description:
      "Nissan Motor Co., Ltd. is a Japanese multinational automobile manufacturer headquartered in Yokohama, Kanagawa, Japan.",
  },
  {
    id: 10,
    name: "Chevrolet",
    logoUrl:
      "https://img.icons8.com/?size=100&id=57661&format=png&color=000000",
    description:
      "Chevrolet, colloquially referred to as Chevy, is an American automobile division of the American manufacturer General Motors.",
  },
];

export const inputSearchStyles = { maxWidth: "280px" };

export const COLUMN_WIDTH = 325;
export const ROW_HEIGHT = 390;
export const gridStyles = {
  margin: "0px auto",
  overflowX: "hidden",
} as const;
