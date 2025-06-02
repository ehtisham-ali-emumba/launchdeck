import { Link } from "react-router-dom";

import styled from "styled-components";

import { colors } from "~/constants";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 440px;
  min-height: 550px;
  min-height: 250px;
  overflow: auto;
`;

export const CategoryList = styled.div`
  min-width: 200px;
  border-right: 1px solid #f0f0f0;
  padding: 4px 8px;
`;

export const SubCategoryList = styled.div`
  min-width: 210px;
  max-height: 400px;
  overflow-y: auto;
  padding: 4px 8px;
`;

export const CategoryItemContainer = styled.div`
  margin-top: 1px;
  & {
    line-height: 38px;
  }
`;
export const CategoryTitle = styled.span<{ isActive: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isActive ? "black" : colors.text.secondary)};
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

export const SubCategoryItemContainer = styled(Link)`
  & {
    line-height: 38px;
  }
`;

export const SubCategoryTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.text.secondary};
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

export const SubCategoryDescription = styled.div`
  font-size: 12px;
  color: #8c8c8c;
`;

export const SubCategoryIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #f0f5ff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-size: 16px;
`;
