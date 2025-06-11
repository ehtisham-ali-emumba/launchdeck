import { lazy } from "react";

import { type RouteObject } from "react-router-dom";

import { LazyComponent } from "~/components";
import { MainLayout } from "~/layout";

import { routeConstants } from "./routeConstants";

// Lazy loaded components
const Home = lazy(() =>
  import("~/pages/Home").then(module => ({ default: module.Home }))
);
const AnalyticsPage = lazy(() =>
  import("~/pages/Product").then(module => ({ default: module.AnalyticsPage }))
);
const CategoriesPage = lazy(() =>
  import("~/pages/Product/Categories").then(module => ({
    default: module.CategoriesPage,
  }))
);
const CreateProductPage = lazy(() =>
  import("~/pages/Product/CreateProduct").then(module => ({
    default: module.CreateProductPage,
  }))
);
const ProductDetailsPage = lazy(() =>
  import("~/pages/Product/ProductDetails").then(module => ({
    default: module.ProductDetailsPage,
  }))
);
const FallbackPage = lazy(() =>
  import("~/pages/Fallback").then(module => ({ default: module.default }))
);
const LandscapePage = lazy(() =>
  import("~/pages/Product/Landscape").then(module => ({
    default: module.LandscapePage,
  }))
);

// Tour pages
const Tours = lazy(() =>
  import("~/pages/Tour").then(module => ({ default: module.Tours }))
);
const MyTours = lazy(() =>
  import("~/pages/Tour").then(module => ({ default: module.MyTours }))
);
const TourDetails = lazy(() =>
  import("~/pages/Tour").then(module => ({ default: module.TourDetails }))
);
const BookTour = lazy(() =>
  import("~/pages/Tour").then(module => ({ default: module.BookTour }))
);

// Vehicle pages
const Autos = lazy(() =>
  import("~/pages/Vehicles").then(module => ({ default: module.Autos }))
);
const Brands = lazy(() =>
  import("~/pages/Vehicles").then(module => ({ default: module.Brands }))
);
const AutoDetails = lazy(() =>
  import("~/pages/Vehicles").then(module => ({ default: module.AutoDetails }))
);

function RouteWrapper({
  children,
  showFooter,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <MainLayout showFooter={showFooter}>
      <LazyComponent>{children}</LazyComponent>
    </MainLayout>
  );
}

const routes: RouteObject[] = [
  {
    path: routeConstants.HOME,
    element: (
      <RouteWrapper showFooter>
        <Home />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.ANALYTICS,
    element: (
      <RouteWrapper>
        <AnalyticsPage />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.TOURS,
    element: (
      <RouteWrapper>
        <Tours />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.MY_TOURS,
    element: (
      <RouteWrapper>
        <MyTours />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.LANDSCAPES,
    element: (
      <RouteWrapper>
        <LandscapePage />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.CATEGORY_PAGE,
    element: (
      <RouteWrapper>
        <CategoriesPage />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.CREATE_PRODUCT,
    element: (
      <RouteWrapper showFooter>
        <CreateProductPage />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.PRODUCT_DETAILS,
    element: (
      <RouteWrapper showFooter>
        <ProductDetailsPage />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.BRANDS_AUTOS,
    element: (
      <RouteWrapper>
        <Autos />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.BRANDS,
    element: (
      <RouteWrapper>
        <Brands />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.BRANDS_AUTOS_DETAILS,
    element: (
      <RouteWrapper>
        <AutoDetails />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.TOUR_DETAILS,
    element: (
      <RouteWrapper>
        <TourDetails />
      </RouteWrapper>
    ),
  },
  {
    path: routeConstants.BOOK_TOUR,
    element: (
      <RouteWrapper>
        <BookTour />
      </RouteWrapper>
    ),
  },
  {
    path: "*",
    element: (
      <RouteWrapper>
        <FallbackPage />
      </RouteWrapper>
    ),
  },
];

export default routes;
