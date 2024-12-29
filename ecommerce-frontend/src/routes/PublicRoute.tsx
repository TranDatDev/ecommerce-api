import React from "react";
import { Navigate, Outlet } from "react-router";

const PublicRoute: React.FC = () => {
  const token = localStorage.getItem("authToken");
  const isAuthenticated = !!token;

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
