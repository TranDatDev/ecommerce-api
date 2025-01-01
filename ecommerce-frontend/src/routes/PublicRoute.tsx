import React from "react";
import { Navigate, Outlet } from "react-router";

const PublicRoute: React.FC = () => {
  const token = localStorage.getItem("authToken");
  const isAuthenticated = !!token;
  const uuid = localStorage.getItem("authUuid");
  return isAuthenticated ? <Navigate to={`/dashboard/${uuid}`} /> : <Outlet />;
};

export default PublicRoute;
