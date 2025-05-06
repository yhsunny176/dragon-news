import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../Layouts/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
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
                element: <Login></Login>
            },
            {
                path: "/*",
                element: <h1>Error</h1>,
            },
        ],
    },
]);
