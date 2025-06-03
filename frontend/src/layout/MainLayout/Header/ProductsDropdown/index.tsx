import { memo, useEffect, useState } from "react";

import { Button } from "~/components";
import { Loader } from "~/components";
import ErrorContainer from "~/components/ErrorContainer";
import { uiStrings } from "~/constants";
import { useCategoryQuery } from "~/hooks/queries/useCategoryQuery";
import { useIsActiveRoute } from "~/hooks/useIsActiveRoute";
import type { Category } from "~/types";

import { CategoryItem } from "./CategoryItem";
import {
  DropdownContainer,
  DropdownMenu,
  CategoryList,
  SubCategoryList,
} from "./elements";
import { SubCategoryItem } from "./SubCategoryItem";

export const ProductsDropdown = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | undefined>(
    undefined
  );
  const { isRouteActive } = useIsActiveRoute();
  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useCategoryQuery();

  const getActiveButtonClass = (path: string) => {
    return isRouteActive(path) ? "active-button" : "";
  };

  useEffect(() => {
    setActiveCategory(categories?.[0]);
  }, [categories]);

  return (
    <DropdownContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button variant="secondary" id={getActiveButtonClass("/categories")}>
        {uiStrings.products}
      </Button>

      {isOpen && (
        <DropdownMenu>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <ErrorContainer
              message={error?.message || uiStrings.failedToLoadCategories}
            />
          ) : (
            <>
              <CategoryList>
                {categories.map(category => (
                  <CategoryItem
                    key={category._id}
                    category={category}
                    isActive={activeCategory?._id === category._id}
                    onHover={() => setActiveCategory(category)}
                  />
                ))}
              </CategoryList>

              {activeCategory && (
                <SubCategoryList>
                  {activeCategory.subCategories?.map?.(subCategory => (
                    <SubCategoryItem
                      key={subCategory._id}
                      subCategory={subCategory}
                    />
                  ))}
                </SubCategoryList>
              )}
            </>
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
});
