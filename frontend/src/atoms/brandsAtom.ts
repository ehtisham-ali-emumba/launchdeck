import { atomWithStorage } from "jotai/utils";
import { brands } from "../pages/Vehicles/Brands/utils";

export type BrandType = {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
};

export const brandsAtom = atomWithStorage<BrandType[]>("brands", brands);
