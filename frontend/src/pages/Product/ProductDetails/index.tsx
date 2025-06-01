import { useParams } from "react-router-dom";

import { BlankSlate, Loader, Spacer } from "~/components";
import ErrorContainer from "~/components/ErrorContainer";
import { useProductDetailsQuery } from "~/hooks/queries/useProductDetailsQuery";
import { Container, ContentWrapper } from "~/styles";

import { Box } from "./elements";
import { ProductDetailsCard } from "./ProductDetailsCard";



export const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading, isError, error } = useProductDetailsQuery({
    productId: productId || "",
  });

  const hasData = !!data && !isLoading && !isError;
  const isEmptyState = !isLoading && !hasData;
  const showError = !hasData && isError && !isLoading;
  const showLoading = isLoading && !hasData;

  return (
    <Container style={{ height: "auto" }}>
      <ContentWrapper>
        <Box>
          {showLoading ? (
            <Loader />
          ) : showError ? (
            <ErrorContainer message={`Error: ${(error as Error).message}`} />
          ) : hasData ? (
            <>
              <ProductDetailsCard product={data} />
              <Spacer marginTop="50px" />
            </>
          ) : isEmptyState ? (
            <BlankSlate />
          ) : null}
        </Box>
      </ContentWrapper>
    </Container>
  );
};
