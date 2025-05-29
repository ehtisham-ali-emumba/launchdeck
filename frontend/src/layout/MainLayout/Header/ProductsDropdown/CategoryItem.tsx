import { CategoryItemContainer, CategoryTitle } from "./elements";
import type { Category } from "./types";

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
    <CategoryItemContainer
      to={`/categories/${category.id}`}
      onMouseEnter={onHover}
    >
      <CategoryTitle isActive={isActive} onMouseEnter={onHover}>
        {category.name}
      </CategoryTitle>
    </CategoryItemContainer>
  );
};
