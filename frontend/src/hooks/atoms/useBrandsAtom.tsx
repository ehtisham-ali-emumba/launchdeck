import { useAtom } from "jotai";
import { useCallback } from "react";
import { brandsAtom, type BrandType } from "../../atoms/brandsAtom";
import { useAutosAtom } from "./useAutosAtom";

const brandSample = {
  name: "Suzuki",
  logoUrl: "https://img.icons8.com/?size=100&id=18808&format=png&color=000000",
  description:
    "Suzuki, colloquially referred to as suzuki, is a Japanese automobile division of the American manufacturer General Motors.",
};

export const useBrandsAtom = () => {
  const [brands, setBrands] = useAtom(brandsAtom);
  const { deleteAutosByBrandId } = useAutosAtom();

  const addBrand = useCallback(() => {
    setBrands((prevBrands) => [
      ...prevBrands,
      { id: prevBrands.length + 1, ...brandSample },
    ]);
  }, [setBrands]);

  const getBrandById = useCallback(
    (brandId: number) => {
      return brands.find((brand) => brand.id === brandId);
    },
    [brands]
  );

  const removeBrand = useCallback(
    (brandId: number) => {
      setBrands((prevBrands) =>
        prevBrands.filter((brand) => brand.id !== brandId)
      );
      deleteAutosByBrandId(brandId); // Delete all autos of this brand
    },
    [setBrands]
  );

  const updateBrand = useCallback(
    (updatedBrand: Partial<BrandType>) => {
      setBrands((prevBrands) =>
        prevBrands.map((brand) =>
          brand.id === updatedBrand?.id ? { ...brand, ...updatedBrand } : brand
        )
      );
    },
    [setBrands]
  );

  return { brands, addBrand, removeBrand, updateBrand, getBrandById };
};
