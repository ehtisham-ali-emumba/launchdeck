import { uiStrings } from "../../../constants";
import { useBrandsAtom } from "../../../hooks/atoms/useBrandsAtom";
import {
  CarContainer,
  CarImage,
  CarImageContainer,
  CarInfo,
  CarTitle,
  Manufacturer,
  ManufacturerName,
  RatingContainer,
  StarRating,
  ReviewCount,
  CurrencySymbol,
  AutoMetaInfoContainer,
  AutoMetaText,
} from "./elements";
import type { CarHeaderType } from "./type";

export const CarHeader: React.FC<CarHeaderType> = ({ auto }) => {
  const { brandId, name, modelYear, price, imageSrc, engine, fuelType, color } =
    auto;
  const { getBrandById } = useBrandsAtom();
  const brand = getBrandById(brandId);
  const brandName = brand?.name || uiStrings.unknownBrand;

  return (
    <CarContainer>
      <CarImageContainer>
        <CarImage src={imageSrc} alt={`${name} - ${modelYear}`} />
      </CarImageContainer>

      <CarInfo>
        <CarTitle>
          {name} - {modelYear}
        </CarTitle>
        <Manufacturer>
          {uiStrings.by}:{" "}
          <ManufacturerName to={`/brands/${brandId}/autos`}>
            {brandName}
          </ManufacturerName>
        </Manufacturer>

        <RatingContainer>
          <StarRating>★★★★★</StarRating>
          <ReviewCount>(5)</ReviewCount>
        </RatingContainer>
        <AutoMetaInfoContainer>
          <AutoMetaText>{engine}</AutoMetaText>
          <AutoMetaText>{fuelType}</AutoMetaText>
          <AutoMetaText>{color}</AutoMetaText>
        </AutoMetaInfoContainer>

        <CurrencySymbol>$ {price}</CurrencySymbol>
      </CarInfo>
    </CarContainer>
  );
};
