import { useEffect, useState } from "react";
import { ProductListRow } from "./ProductListRow";
import type { ProductListFilterType, ProductListItem } from "./type";
import { ProductListingSectionTitle } from "./elements";
import { productListDummyData, sectionTitles } from "./utils";
import { BlankSlate, Loader } from "../../components";

export const ProductList = ({ filter }: { filter: ProductListFilterType }) => {
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(productListDummyData[filter]);
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div>
      <ProductListingSectionTitle>
        {sectionTitles[filter]}
      </ProductListingSectionTitle>
      {loading && products.length === 0 ? (
        <Loader />
      ) : !loading && products.length > 0 ? (
        products.map((product) => (
          <ProductListRow key={product.index} {...product} />
        ))
      ) : (
        <BlankSlate />
      )}
    </div>
  );
};
