import { SubCategoryItemContainer, SubCategoryTitle } from "./elements";
import type { SubCategory } from "./types";

interface SubCategoryItemProps {
  subCategory: SubCategory;
}

export const SubCategoryItem: React.FC<SubCategoryItemProps> = ({
  subCategory,
}) => {
  return (
    <SubCategoryItemContainer to={`/categories/${subCategory._id}`}>
      <SubCategoryTitle>{subCategory.name}</SubCategoryTitle>
    </SubCategoryItemContainer>
  );
};
