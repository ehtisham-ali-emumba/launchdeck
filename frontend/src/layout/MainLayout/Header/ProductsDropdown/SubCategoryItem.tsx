import { SubCategoryItemContainer, SubCategoryTitle } from "./elements";
import type { SubCategory } from "./types";

interface SubCategoryItemProps {
  subCategory: SubCategory;
}

export const SubCategoryItem: React.FC<SubCategoryItemProps> = ({
  subCategory,
}) => {
  return (
    <SubCategoryItemContainer to={`/categories/${subCategory.slug}`}>
      <SubCategoryTitle>{subCategory.name}</SubCategoryTitle>
    </SubCategoryItemContainer>
  );
};
