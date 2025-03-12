import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/Home/HomeLayout";
import ErrorPage from "../Shared/ErrorPage";
import FAQ from "../Layout/Home/FAQ";
import ContactUs from "../Pages/ContactUs";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: '/faq',
                element: <FAQ></FAQ> ,
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs> ,
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);
