export interface Landscape {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  user: {
    name: string;
    designation: string;
  };
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
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
type LandscapesResponse = Landscape[];
export type GetLandscapesResponse = {
  data: LandscapesResponse;
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};
