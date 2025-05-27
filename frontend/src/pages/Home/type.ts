export interface ProductListRowProps {
  index: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  comments: number;
  upvotes: number;
}

export type ProductListFilterType =
  | "today"
  | "lastWeek"
  | "nextWeek"
  | "lastMonth"
  | "nextMonth";

export interface ProductListItem {
  index: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  comments: number;
  upvotes: number;
}
