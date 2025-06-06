import { useEffect, useMemo } from "react";

import { useParams } from "react-router-dom";

import { Loader } from "~/components";
import { Spacer } from "~/components";
import { BlankSlate } from "~/components/BlankSlate";
import ErrorContainer from "~/components/ErrorContainer";
import { uiStrings } from "~/constants";
import { useInfiniteProductQuery } from "~/hooks/queries/useInfiniteProductQuery";
import { Container, ContentWrapper } from "~/styles";

import { Box, HeaderTitle } from "./elements";
import { ProductCard } from "./ProductCard";

export const CategoriesPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteProductQuery({
    limit: 16,
    categoryId,
  });

  const products = useMemo(
    () => data?.pages.flatMap(page => page.data) || [],
    [data]
  );
  const totalCount = data?.pages[0]?.total || 0;

  // Handle scroll to load more
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 1000 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const isInitialLoading = isLoading && !products.length;
  const hasData = products.length > 0;
  const isEmptyState = !isLoading && !isFetchingNextPage && !hasData;
  const showEndMessage = !hasNextPage && hasData;
  const showLoadingMore = isFetchingNextPage && hasData;

  return (
    <Container>
      <ContentWrapper>
        <Box>
          <HeaderTitle>{uiStrings.theBestToTryIn2024}</HeaderTitle>

          {isInitialLoading ? (
            <Loader />
          ) : isError ? (
            <ErrorContainer message={`Error: ${(error as Error).message}`} />
          ) : hasData ? (
            <div>
              {products.map((product, index) => (
                <>
                  <Spacer top="40px" />
                  <ProductCard
                    product={product}
                    index={index + 1}
                    key={`${product._id}-${index}`}
                  />
                </>
              ))}
            </div>
          ) : (
            isEmptyState && <BlankSlate />
          )}

          {showEndMessage && (
            <div
              style={{
                padding: "20px",
                textAlign: "center",
                color: "#8c8c8c",
                fontSize: "14px",
              }}
            >
              {uiStrings.allProductsLoaded(totalCount)}
            </div>
          )}

          {showLoadingMore && <Loader paddingTop={"10px"} />}
        </Box>
      </ContentWrapper>
    </Container>
  );
};
