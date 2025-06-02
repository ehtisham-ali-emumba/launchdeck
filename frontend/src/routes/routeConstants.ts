export const routeConstants = {
  HOME: "/",
  CATEGORIES: "/categories",
  CATEGORY: (categoryId: string) => `/categories/${categoryId}`,
  PRODUCTS_CREATE: "/products/create",
  BRANDS_AUTOS: (brandId: string) => `/brands/${brandId}/autos`,
  AUTO_DETAILS: (brandId: string, autoId: string) =>
    `/brands/${brandId}/autos/${autoId}`,
  TOUR_DETAILS: (tourId: string) => `/tour/${tourId}`,
  TOURS: "/tours",
  MY_TOURS: "/my-tours",
  LANDSCAPES: "/landscapes",
  CATEGORY_PAGE: "/categories/:categoryId",
  CREATE_PRODUCT: "/products/create",
  PRODUCT_DETAILS: "/products/:productId",
  PRODUCTS: "/products",
  ANALYTICS: "/analytics",
};
