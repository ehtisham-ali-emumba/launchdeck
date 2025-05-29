export interface SubCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subCategories: SubCategory[];
}
