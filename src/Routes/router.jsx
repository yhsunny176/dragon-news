import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../Layouts/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import HomeNews from "../Components/Home News/HomeNews";
import CatNews from "../pages/Category news/CatNews";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home,
                children: [
                    {
                        path: "",
                        element: <HomeNews></HomeNews>,
                    },
                    {
                        path: "/category/:id",
                        element: <CatNews></CatNews>,
                    },
                ],
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/career",
                Component: Career,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/*",
                element: <h1>Error</h1>,
            },
        ],
    },
]);
