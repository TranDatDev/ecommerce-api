import { RouteObject } from "react-router";
import PrivateRoute from "../PrivateRoute";
import DashboardPage from "@/pages/DashboardPage";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard/:uuid",
        element: <DashboardPage />,
      },
    ],
  },
];
