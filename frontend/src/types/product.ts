export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  website: string;
  votesCount: number;
  launchDate: { type: string; required: true };
  createdAt: string;
  updatedAt: string;
  category: {
    _id: string;
    name: string;
    slug: string;
    parentId: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type ProductsResponse = Product[];
export type GetProductsResponse = {
  data: ProductsResponse;
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TSFixMe = any;
