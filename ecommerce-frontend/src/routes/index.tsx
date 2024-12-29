import { createBrowserRouter } from "react-router";
import { authRoutes } from "./modules/authRoutes";
import { dashboardRoutes } from "./modules/dashboardRoutes";
import LandingPage from "../pages/LandingPage";
export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  ...authRoutes,
  ...dashboardRoutes,
];

export const router = createBrowserRouter(routes);
