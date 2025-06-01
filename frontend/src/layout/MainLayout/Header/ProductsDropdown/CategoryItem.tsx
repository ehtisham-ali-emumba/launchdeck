import type { Category } from "~/types";

import { CategoryItemContainer, CategoryTitle } from "./elements";

interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  onHover: () => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isActive,
  onHover,
}) => {
  return (
    <CategoryItemContainer onMouseEnter={onHover}>
      <CategoryTitle isActive={isActive} onMouseEnter={onHover}>
        {category.name}
      </CategoryTitle>
    </CategoryItemContainer>
  );
};
