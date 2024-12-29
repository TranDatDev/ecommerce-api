import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem("authToken");
  const isAuthenticated = !!token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
