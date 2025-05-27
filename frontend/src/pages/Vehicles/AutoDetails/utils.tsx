import type { Auto } from "../../../atoms/autosAtom";

export const getAutoSpecs = (auto: Auto) => {
  const specs: { label: keyof Auto; value: Auto[keyof Auto] }[] = [];
  Object.entries(auto).map(([key, value]) => {
    if (
      [
        "id",
        "brandId",
        "name",
        "price",
        "modelYear",
        "desc",
        "imageSrc",
        "chipText",
        "engine",
        "fuelType",
        "color",
        "description",
      ].includes(key)
    )
      return; // Hide these keys in specifications
    specs.push({
      label: key as keyof Auto,
      value: value,
    });
  });

  return specs;
};

export const deleteIconStyle = {
  fontSize: 20,
  color: "red",
};

export const editIconStyle = {
  fontSize: 20,
};
