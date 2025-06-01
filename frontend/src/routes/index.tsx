import { type RouteObject } from "react-router-dom";

import { CategoriesPage } from "~/pages/Product/Categories";
import { CreateProductPage } from "~/pages/Product/CreateProduct";
import { ProductDetailsPage } from "~/pages/Product/ProductDetails";

import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { LandscapePage } from "../pages/Product/Landscape";
import { Tours, MyTours, TourDetails, BookTour } from "../pages/Tour";
import { AutoDetails, Autos } from "../pages/Vehicles";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout showFooter>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/tours",
    element: (
      <MainLayout>
        <Tours />
      </MainLayout>
    ),
  },
  {
    path: "/my-tours",
    element: (
      <MainLayout>
        <MyTours />
      </MainLayout>
    ),
  },
  {
    path: "/landscapes",
    element: (
      <MainLayout>
        <LandscapePage />
      </MainLayout>
    ),
  },
  {
    path: "/categories/:categoryId",
    element: (
      <MainLayout>
        <CategoriesPage />
      </MainLayout>
    ),
  },
  {
    path: "/products/create",
    element: (
      <MainLayout showFooter>
        <CreateProductPage />
      </MainLayout>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <MainLayout showFooter>
        <ProductDetailsPage />
      </MainLayout>
    ),
  },
  {
    path: "/brands/:brandId/autos",
    element: (
      <MainLayout>
        <Autos />
      </MainLayout>
    ),
  },
  {
    path: "/brands/:brandId/autos/:autoId",
    element: (
      <MainLayout>
        <AutoDetails />
      </MainLayout>
    ),
  },
  {
    path: "/tour/:tourId",
    element: (
      <MainLayout>
        <TourDetails />
      </MainLayout>
    ),
  },
  {
    path: "/book/tour/:tourId",
    element: (
      <MainLayout>
        <BookTour />
      </MainLayout>
    ),
  },
];

export default routes;
