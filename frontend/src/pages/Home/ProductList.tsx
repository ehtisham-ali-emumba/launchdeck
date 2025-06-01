import { useProductQuery } from "~/hooks/queries/useProductQuery";

import { BlankSlate, Loader } from "../../components";

import { ProductListingSectionTitle } from "./elements";
import { ProductListRow } from "./ProductListRow";
import type { ProductListFilterType } from "./type";
import { sectionTitles } from "./utils";

export const ProductList = ({ filter }: { filter: ProductListFilterType }) => {
  const pageSize = getPageSize(filter);

  const { data, isLoading } = useProductQuery({
    page: pageSize,
    limit: 5,
  });

  const products = data?.data ?? [];
  return (
    <div>
      <ProductListingSectionTitle>
        {sectionTitles[filter].asdf}
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
    </div>
  );
};

const getPageSize = (filter: ProductListFilterType) => {
  switch (filter) {
    case "today":
      return 1;
    case "lastWeek":
      return 2;
    case "nextWeek":
      return 3;
    case "lastMonth":
      return 4;
    case "nextMonth":
      return 5;
    default:
      return 1;
  }
};
