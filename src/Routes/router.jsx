import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../Layouts/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import CatNews from "../pages/Category news/CatNews";
import Register from "../pages/Register/Register";
import AuthenticationLayout from "../Layouts/Authentication/AuthenticationLayout";
import News from "../pages/news/News";
import PrivateRoute from "../provider/PrivateRoute";
import HomeNews from "../Layouts/HomeNews";

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
                        loader: () => fetch("/news.json").then((res) => res.json())
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
                path: "/auth",
                element: <AuthenticationLayout></AuthenticationLayout>,
                children: [
                  {
                    path: "/auth/login",
                    element: <Login></Login>
                  },
                  {
                    path: "/auth/register",
                    element: <Register></Register>
                  }
                ]
            },
            {
              path: "/news/:id",
              element: 
              <PrivateRoute>
                <News></News>
              </PrivateRoute>,
              loader: () => fetch("/news.json").then((res)=>res.json())
            },
            {
                path: "/*",
                element: <h1>Error</h1>,
            },
        ],
    },
]);
