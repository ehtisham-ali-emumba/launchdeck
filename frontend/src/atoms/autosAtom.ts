import { atomWithStorage } from "jotai/utils";
import { autosArray } from "../pages/Vehicles/Autos/utils";

export type Auto = {
  id: number;
  brandId: number;
  name: string;
  modelYear: number;
  price: number;
  engine: string;
  transmission: string;
  fuelType: string;
  color: string;
  chipText?: string;
  imageSrc: string;
  description: string;
  mileage?: string;
  fuelCapacity?: string;
  seatingCapacity?: number;
  bodyType?: string;
};

export const autosAtom = atomWithStorage<Auto[]>("autos", autosArray);
