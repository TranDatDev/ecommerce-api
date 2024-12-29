import { RouteObject } from "react-router";
import PublicRoute from "../PublicRoute";
import Login from "../../components/Login";
import Register from "../../components/Register";

export const authRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];
