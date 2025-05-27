import { type RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { MainLayout } from "../layout/MainLayout";
import { Tours, MyTours, TourDetails, BookTour } from "../pages/Tour";
import { LandscapePage } from "../pages/Landscape";
import { Brands, AutoDetails, Autos } from "../pages/Vehicles";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/explore",
    element: (
      <MainLayout>
        <Explore />
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
    path: "/products",
    element: (
      <MainLayout>
        <Brands />
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
