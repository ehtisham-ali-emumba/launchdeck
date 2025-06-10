import { SubCategoryItemContainer, SubCategoryTitle } from "./elements";
import type { SubCategory } from "./types";

interface SubCategoryItemProps {
  subCategory: SubCategory;
  isActive?: boolean;
}

export const SubCategoryItem: React.FC<SubCategoryItemProps> = ({
  subCategory,
  isActive,
}) => {
  return (
    <SubCategoryItemContainer to={`/categories/${subCategory._id}`}>
      <SubCategoryTitle isActive={isActive}>
        {subCategory.name}
      </SubCategoryTitle>
    </SubCategoryItemContainer>
  );
};
