import { memo, useMemo, useState } from "react";

import { useParams } from "react-router-dom";

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
  const [activeCategoryHoverState, setActiveCategoryHoverState] = useState<
    Category | undefined
  >(undefined);
  const { isRouteActive } = useIsActiveRoute();
  const { categoryId } = useParams<{ categoryId: string }>();
  const {
    data: categories_ = [],
    isLoading,
    isError,
    error,
  } = useCategoryQuery();

  // Filter out categories without subCategories
  const categories = useMemo(
    () => categories_.filter(category => category.subCategories?.length),
    [categories_]
  );

  const getActiveButtonClass = (path: string) => {
    return isRouteActive(path) ? "active-button" : "";
  };

  // Find the active category based on subcategoryId in the URL
  const activeSubCategoryId = categoryId;
  const activeCategoryId =
    categories.find(cat =>
      cat.subCategories?.some(sub => sub._id === activeSubCategoryId)
    ) || categories[0];

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
                    isActive={
                      category._id === activeCategoryHoverState?._id ||
                      category._id === activeCategoryId._id
                    }
                    onHover={() => setActiveCategoryHoverState(category)}
                  />
                ))}
              </CategoryList>

              {activeCategoryHoverState && (
                <SubCategoryList>
                  {activeCategoryHoverState.subCategories?.map?.(
                    subCategory => (
                      <SubCategoryItem
                        key={subCategory._id}
                        subCategory={subCategory}
                        isActive={subCategory._id === activeSubCategoryId}
                      />
                    )
                  )}
                </SubCategoryList>
              )}
            </>
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
});
