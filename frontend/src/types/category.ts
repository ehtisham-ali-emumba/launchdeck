export interface Category {
  _id: string;
  name: string;
  slug: string;
  parentId: null;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  subCategories: {
    _id: string;
    name: string;
    slug: string;
    parentId: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export type CategoryResponse = Category[];
