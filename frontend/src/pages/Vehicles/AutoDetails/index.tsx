import { Spacer } from "../../../components";
import { ContentWrapper } from "../../../styles";
import { uiStrings } from "../../../constants";
import { Box, Container } from "./elements";
import { useParams } from "react-router-dom";
import ErrorContainer from "../../../components/ErrorContainer";
import { useAutoDetailsAtom } from "../../../hooks/atoms";
import { CarSpecifications } from "./CarSpecifications";
import { useMemo } from "react";
import { useBrandsAtom } from "../../../hooks/atoms/useBrandsAtom";
import { checkBrandExists } from "../Brands/utils";
import { CarHeader } from "./CarHeader";

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
