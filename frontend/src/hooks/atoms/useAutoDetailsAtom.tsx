import { useAtom } from "jotai";
import { useCallback } from "react";
import { autosAtom, type Auto } from "../../atoms/autosAtom";

export const useAutoDetailsAtom = () => {
  const [autos, setAutos] = useAtom(autosAtom);

  const getAutoById = useCallback(
    (autoId: number, brandId: number) => {
      return autos.find(
        (auto) => auto.id === autoId && auto.brandId === brandId
      );
    },
    [autos]
  );

  const deleteAutoAttribute = useCallback(
    (autoId: number, key: string) => {
      setAutos((prevAutos) =>
        prevAutos.map((auto) => {
          if (auto.id !== autoId) return auto;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [key as keyof Auto]: _, ...rest } = auto;
          return rest as Auto;
        })
      );
    },
    [setAutos]
  );

  const addOrEditAutoAttribute = useCallback(
    (
      autoId: number,
      key: keyof Auto | (string & {}),
      value: Auto[keyof Auto]
    ) => {
      setAutos((prevAutos) =>
        prevAutos.map((auto) => {
          if (auto.id !== autoId) return auto;
          return { ...auto, [key]: value };
        })
      );
    },
    [setAutos]
  );

  return {
    getAutoById,
    deleteAutoAttribute,
    addOrEditAutoAttribute,
  };
};
