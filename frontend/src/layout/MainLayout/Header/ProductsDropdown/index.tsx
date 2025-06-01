import { memo, useState } from "react";

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
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
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

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  const handleCategoryHover = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <DropdownContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
                    onHover={() => handleCategoryHover(category)}
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
