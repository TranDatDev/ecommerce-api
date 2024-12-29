import { RouteObject } from "react-router";
import PrivateRoute from "../PrivateRoute";
import Dashboard from "../../components/Dashboard";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
