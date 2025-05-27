import type { Auto } from "../../../atoms/autosAtom";

export const filterAutosByBrandId = (
  hondaAutos: Auto[],
  brandId: number
): Auto[] => {
  return hondaAutos.filter((auto) => auto.brandId === brandId);
};

export const searchAutosByFilters = (
  hondaAutos: Auto[],
  search: string,
  selectedColor: string
): Auto[] => {
  if (!search && !selectedColor) return hondaAutos;
  const lowerCaseSearch = search?.toLowerCase?.();
  return hondaAutos.filter(
    (auto) =>
      (auto.name.toLowerCase().includes(lowerCaseSearch) ||
        auto.bodyType?.toLowerCase?.().includes?.(lowerCaseSearch) ||
        auto.modelYear?.toString?.().includes?.(lowerCaseSearch)) &&
      auto.color?.toLowerCase?.().includes?.(selectedColor?.toLowerCase?.())
  );
};

export const colorSelectStyles = { width: 140, height: "100%" };
export const inputSearchStyles = { maxWidth: "280px" };
export const colorOptions = [
  { label: "All Colors", value: "" },
  { label: "White", value: "White" },
  { label: "Black", value: "Black" },
  { label: "Silver", value: "Silver" },
  { label: "Blue", value: "Blue" },
  { label: "Red", value: "Red" },
  { label: "Yellow", value: "Yellow" },
  { label: "Gray", value: "Gray" },
  { label: "Green", value: "Green" },
];
export const autosArray: Auto[] = [
  {
    id: 1,
    brandId: 1,
    name: "Civic",
    modelYear: 2022,
    price: 25000,
    engine: "1.5L Turbo",
    transmission: "CVT",
    fuelType: "Petrol",
    color: "White",
    chipText: "Hot Deal",
    imageSrc:
      "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg",
    description:
      "A sporty sedan with a blend of style, comfort, and efficiency.",
    mileage: "15 km/l",
    fuelCapacity: "47 L",
    seatingCapacity: 5,
    bodyType: "Sedan",
  },
  {
    id: 2,
    brandId: 1,
    name: "Accord",
    modelYear: 2023,
    price: 32000,
    engine: "2.0L Turbo",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Black",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/04/21/02/20/jdm-2247450_1280.jpg",
    description: "Premium sedan offering comfort and powerful performance.",
    mileage: "14 km/l",
    fuelCapacity: "56 L",
    seatingCapacity: 5,
    bodyType: "Sedan",
  },
  // Toyota
  {
    id: 3,
    brandId: 2,
    name: "Corolla",
    modelYear: 2022,
    price: 24000,
    engine: "1.8L",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Silver",
    chipText: "Best Seller",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/toyota-1868726_1280.jpg",
    description: "Reliable sedan known for efficiency and comfort.",
    mileage: "16 km/l",
    fuelCapacity: "50 L",
    seatingCapacity: 5,
    bodyType: "Sedan",
  },
  {
    id: 4,
    brandId: 2,
    name: "Camry",
    modelYear: 2023,
    price: 33000,
    engine: "2.5L",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Blue",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/toyota-1868726_1280.jpg",
    description: "Spacious sedan with advanced safety and technology.",
    mileage: "14 km/l",
    fuelCapacity: "60 L",
    seatingCapacity: 5,
    bodyType: "Sedan",
  },
  // Ford
  {
    id: 5,
    brandId: 3,
    name: "Focus",
    modelYear: 2021,
    price: 21000,
    engine: "1.0L EcoBoost",
    transmission: "Manual",
    fuelType: "Petrol",
    color: "Red",
    chipText: "Popular",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/toyota-1868726_1280.jpg",
    description: "Compact hatchback with agile handling and modern features.",
    mileage: "18 km/l",
    fuelCapacity: "52 L",
    seatingCapacity: 5,
    bodyType: "Hatchback",
  },
  {
    id: 6,
    brandId: 3,
    name: "Mustang",
    modelYear: 2022,
    price: 40000,
    engine: "5.0L V8",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Yellow",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/ford-1868726_1280.jpg",
    description: "Iconic sports coupe with powerful performance.",
    mileage: "8 km/l",
    fuelCapacity: "61 L",
    seatingCapacity: 4,
    bodyType: "Coupe",
  },
  // Honda
  {
    id: 7,
    brandId: 1,
    name: "HR-V",
    modelYear: 2023,
    price: 27000,
    engine: "1.8L",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Gray",
    chipText: "New Arrival",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/toyota-1868726_1280.jpg",
    description: "Compact crossover with flexible space and modern features.",
    mileage: "16 km/l",
    fuelCapacity: "40 L",
    seatingCapacity: 5,
    bodyType: "Crossover",
  },
  // Toyota
  {
    id: 8,
    brandId: 2,
    name: "Prius",
    modelYear: 2022,
    price: 28000,
    engine: "1.8L Hybrid",
    transmission: "Automatic",
    fuelType: "Hybrid",
    color: "White",
    chipText: "Eco",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/toyota-1868726_1280.jpg",
    description: "Hybrid hatchback with excellent fuel efficiency.",
    mileage: "22 km/l",
    fuelCapacity: "43 L",
    seatingCapacity: 5,
    bodyType: "Hatchback",
  },
  // Ford
  {
    id: 9,
    brandId: 3,
    name: "Edge",
    modelYear: 2023,
    price: 35000,
    engine: "2.0L",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Blue",
    chipText: "Family",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/toyota-1868726_1280.jpg",
    description: "Mid-size SUV with advanced safety and comfort.",
    mileage: "12 km/l",
    fuelCapacity: "68 L",
    seatingCapacity: 5,
    bodyType: "SUV",
  },
  // Honda
  {
    id: 10,
    brandId: 1,
    name: "Jazz",
    modelYear: 2021,
    price: 18000,
    engine: "1.2L",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Silver",
    chipText: "Compact",
    imageSrc:
      "https://cdn.pixabay.com/photo/2022/03/28/09/52/car-7097077_1280.png",
    description: "Compact hatchback with spacious interior and agile handling.",
    mileage: "18 km/l",
    fuelCapacity: "40 L",
    seatingCapacity: 5,
    bodyType: "Hatchback",
  },
];

export const autosMoreData: Auto[] = [
  {
    id: 11,
    brandId: 1,
    name: "CR-V",
    modelYear: 2022,
    price: 31000,
    engine: "1.5L Turbo",
    transmission: "CVT",
    fuelType: "Petrol",
    color: "Silver",
    imageSrc:
      "https://cdn.pixabay.com/photo/2021/03/10/17/40/car-6085109_1280.jpg",
    description:
      "Versatile SUV with spacious interior and advanced safety features.",
    mileage: "13 km/l",
    fuelCapacity: "57 L",
    seatingCapacity: 5,
    bodyType: "SUV",
  },
  {
    id: 12,
    brandId: 1,
    name: "City",
    modelYear: 2021,
    price: 20000,
    engine: "1.5L",
    transmission: "Manual",
    fuelType: "Petrol",
    color: "Blue",
    imageSrc:
      "https://cdn.pixabay.com/photo/2022/03/28/09/52/car-7097077_1280.png",
    description: "Popular sedan with sleek looks and smart features.",
    mileage: "17 km/l",
    fuelCapacity: "40 L",
    seatingCapacity: 5,
    bodyType: "Sedan",
  },
  // Toyota
  {
    id: 13,
    brandId: 2,
    name: "Yaris",
    modelYear: 2021,
    price: 18000,
    engine: "1.3L",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "White",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/01/06/19/15/toyota-1957037_1280.jpg",
    description: "Compact hatchback with efficient performance.",
    mileage: "19 km/l",
    fuelCapacity: "42 L",
    seatingCapacity: 5,
    bodyType: "Hatchback",
  },
  {
    id: 14,
    brandId: 2,
    name: "RAV4",
    modelYear: 2023,
    price: 35000,
    engine: "2.5L Hybrid",
    transmission: "Automatic",
    fuelType: "Hybrid",
    color: "Green",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/toyota-1868726_1280.jpg",
    description: "Hybrid SUV with advanced features and spacious interior.",
    mileage: "20 km/l",
    fuelCapacity: "55 L",
    seatingCapacity: 5,
    bodyType: "SUV",
  },
  // Ford
  {
    id: 15,
    brandId: 3,
    name: "Explorer",
    modelYear: 2022,
    price: 37000,
    engine: "2.3L EcoBoost",
    transmission: "Automatic",
    fuelType: "Petrol",
    color: "Black",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/03/27/13/28/ford-2173952_1280.jpg",
    description: "Spacious SUV designed for family adventures.",
    mileage: "11 km/l",
    fuelCapacity: "70 L",
    seatingCapacity: 7,
    bodyType: "SUV",
  },
  {
    id: 16,
    brandId: 3,
    name: "Fiesta",
    modelYear: 2020,
    price: 15000,
    engine: "1.1L",
    transmission: "Manual",
    fuelType: "Petrol",
    color: "Blue",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/ford-1868726_1280.jpg",
    description: "Compact car with agile handling and modern design.",
    mileage: "20 km/l",
    fuelCapacity: "42 L",
    seatingCapacity: 5,
    bodyType: "Hatchback",
  },
];

export const COLUMN_WIDTH = 325;
export const ROW_HEIGHT = 440;
export const gridStyles = {
  margin: "0px auto",
  overflowX: "hidden",
} as const;
