import { type RouteObject } from "react-router-dom";

import { AnalyticsPage } from "~/pages/Product";
import { CategoriesPage } from "~/pages/Product/Categories";
import { CreateProductPage } from "~/pages/Product/CreateProduct";
import { ProductDetailsPage } from "~/pages/Product/ProductDetails";

import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { LandscapePage } from "../pages/Product/Landscape";
import { Tours, MyTours, TourDetails, BookTour } from "../pages/Tour";
import { AutoDetails, Autos } from "../pages/Vehicles";

import { routeConstants } from "./routeConstants";

const routes: RouteObject[] = [
  {
    path: routeConstants.HOME,
    element: (
      <MainLayout showFooter>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.ANALYTICS,
    element: (
      <MainLayout>
        <AnalyticsPage />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.TOURS,
    element: (
      <MainLayout>
        <Tours />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.MY_TOURS,
    element: (
      <MainLayout>
        <MyTours />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.LANDSCAPES,
    element: (
      <MainLayout>
        <LandscapePage />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.CATEGORY_PAGE,
    element: (
      <MainLayout>
        <CategoriesPage />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.CREATE_PRODUCT,
    element: (
      <MainLayout showFooter>
        <CreateProductPage />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.PRODUCT_DETAILS,
    element: (
      <MainLayout showFooter>
        <ProductDetailsPage />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.BRANDS_AUTOS,
    element: (
      <MainLayout>
        <Autos />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.BRANDS_AUTOS_DETAILS,
    element: (
      <MainLayout>
        <AutoDetails />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.TOUR_DETAILS,
    element: (
      <MainLayout>
        <TourDetails />
      </MainLayout>
    ),
  },
  {
    path: routeConstants.BOOK_TOUR,
    element: (
      <MainLayout>
        <BookTour />
      </MainLayout>
    ),
  },
];

export default routes;
