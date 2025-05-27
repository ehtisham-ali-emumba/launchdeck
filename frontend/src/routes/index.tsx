import { type RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { MainLayout } from "../layout/MainLayout";
import { Tours, MyTours, TourDetails, BookTour } from "../pages/Tour";
import { UserList } from "../pages/UserList";
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
      <MainLayout hideExplore>
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
    path: "/virtualization",
    element: (
      <MainLayout>
        <UserList />
      </MainLayout>
    ),
  },
  {
    path: "/brands",
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
      <MainLayout hideExplore>
        <TourDetails />
      </MainLayout>
    ),
  },
  {
    path: "/book/tour/:tourId",
    element: (
      <MainLayout hideExplore>
        <BookTour />
      </MainLayout>
    ),
  },
];

export default routes;
