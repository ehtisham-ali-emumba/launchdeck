import { useProductQuery } from "~/hooks/queries/useProductQuery";

import { BlankSlate, Loader } from "../../components";

import { BoxListing, ProductListingSectionTitle } from "./elements";
import { ProductListRow } from "./ProductListRow";
import type { ProductListFilterType } from "./type";
import { getProductListPageSize, sectionTitles } from "./utils";

export const ProductList = ({ filter }: { filter: ProductListFilterType }) => {
  const pageSize = getProductListPageSize(filter);

  const { data, isLoading } = useProductQuery({
    page: pageSize,
    limit: 5,
  });

  const products = data?.data ?? [];
  return (
    <BoxListing>
      <ProductListingSectionTitle>
        {sectionTitles[filter]}
      </ProductListingSectionTitle>
      {isLoading && products.length === 0 ? (
        <Loader />
      ) : !isLoading && products.length > 0 ? (
        products.map((product, key) => (
          <ProductListRow index={key + 1} key={key} product={product} />
        ))
      ) : (
        <BlankSlate />
      )}
    </BoxListing>
  );
};
