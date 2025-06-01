import { useMemo } from "react";

import { useParams } from "react-router-dom";

import { Spacer } from "../../../components";
import ErrorContainer from "../../../components/ErrorContainer";
import { uiStrings } from "../../../constants";
import { useAutoDetailsAtom } from "../../../hooks/atoms";
import { useBrandsAtom } from "../../../hooks/atoms/useBrandsAtom";
import { ContentWrapper } from "../../../styles";
import { checkBrandExists } from "../Brands/utils";

import { CarHeader } from "./CarHeader";
import { CarSpecifications } from "./CarSpecifications";
import { Box, Container } from "./elements";

export const AutoDetails = () => {
  const { autoId, brandId } = useParams<{ autoId: string; brandId: string }>();

  const { brands } = useBrandsAtom();
  const { getAutoById } = useAutoDetailsAtom();
  const autoDetails = getAutoById(Number(autoId), Number(brandId));
  const isBrandExists = useMemo(
    () => checkBrandExists(Number(brandId), brands),
    [brands, brandId]
  );

  if (!isBrandExists)
    return <ErrorContainer message={uiStrings.brandNotExists} />;

  if (!autoDetails) return <ErrorContainer message={uiStrings.autoNotFound} />;

  return (
    <Container>
      <ContentWrapper>
        <Box>
          <Spacer marginTop="80px" />
          <CarHeader auto={autoDetails} />
          <Spacer marginTop="20px" />
          <CarSpecifications auto={autoDetails} />
          <div style={{ minHeight: "50px" }} />
        </Box>
      </ContentWrapper>
    </Container>
  );
};
