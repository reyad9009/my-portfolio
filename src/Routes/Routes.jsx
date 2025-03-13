import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/Home/HomeLayout";
import ErrorPage from "../Shared/ErrorPage";
import FirstDetails from "../Pages/FirstDetails";
import SecondDetails from "../Pages/SecondDetails";
import ThirdDetails from "../Pages/ThirdDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/project/01",
        element: <FirstDetails></FirstDetails>,
      },
      {
        path: "/project/02",
        element: <SecondDetails></SecondDetails>,
      },
      {
        path: "/project/03",
        element: <ThirdDetails></ThirdDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
