export type ProductSubmitFormType = {
  name: string;
  slug: string;
  description: string;
  image: string;
  categoryId: number;
  tags: string[] | [];
  website: string;
};

export type ProductSubmitFormComponent = {
  productId?: number | string;
  onSubmit: (data: ProductSubmitFormType) => void;
};
