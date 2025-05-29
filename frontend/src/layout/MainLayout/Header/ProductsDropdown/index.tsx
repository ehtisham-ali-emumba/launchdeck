import { useState } from "react";
import { Button } from "~/components";
import { uiStrings } from "~/constants";
import { useIsActiveRoute } from "~/hooks/useIsActiveRoute";
import {
  DropdownContainer,
  DropdownMenu,
  CategoryList,
  SubCategoryList,
} from "./elements";
import { CategoryItem } from "./CategoryItem";
import { SubCategoryItem } from "./SubCategoryItem";
import { categoriesData } from "./utils";
import type { Category } from "./types";

export const ProductsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const { isRouteActive } = useIsActiveRoute();

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
          <CategoryList>
            {categoriesData.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
                isActive={activeCategory?.id === category.id}
                onHover={() => handleCategoryHover(category)}
              />
            ))}
          </CategoryList>

          {activeCategory && (
            <SubCategoryList>
              {activeCategory.subCategories.map((subCategory) => (
                <SubCategoryItem
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              ))}
            </SubCategoryList>
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};
