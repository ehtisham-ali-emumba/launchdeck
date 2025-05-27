import { useAtom } from "jotai";
import { useCallback } from "react";
import { autosAtom, type Auto } from "../../atoms/autosAtom";
import { autosMoreData } from "../../pages/Vehicles/Autos/utils";

export const useAutosAtom = () => {
  const [autos, setAutos] = useAtom(autosAtom);

  const deleteAuto = useCallback(
    (id: number) => {
      const updatedAutos = autos.filter((auto) => auto.id !== id);
      setAutos(updatedAutos);
    },
    [autos]
  );

  const deleteAutosByBrandId = useCallback(
    (brandId: number) => {
      const updatedAutos = autos.filter((auto) => auto.brandId !== brandId);
      setAutos(updatedAutos);
    },
    [autos]
  );

  const addAuto = useCallback(
    (brandId: number) => {
      if (isNaN(brandId)) {
        console.error("Invalid brandId:", brandId);
        return;
      }
      setAutos((prevAutos) => [
        ...prevAutos,
        { ...autosMoreData[0], id: prevAutos.length + 1, brandId },
      ]);
    },
    [setAutos]
  );

  const updateAuto = useCallback(
    (updatedAuto: Partial<Auto>) => {
      setAutos((prevAutos) =>
        prevAutos.map((auto) =>
          auto.id === updatedAuto.id ? { ...auto, ...updatedAuto } : auto
        )
      );
    },
    [setAutos]
  );

  return {
    autos,
    deleteAuto,
    addAuto,
    updateAuto,
    deleteAutosByBrandId,
  };
};
