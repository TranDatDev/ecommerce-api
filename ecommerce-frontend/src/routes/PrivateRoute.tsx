import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useToast } from "@/hooks/use-toast";

const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem("authToken");
  const isAuthenticated = !!token;
  const { toast } = useToast();
  const getCurrentDate = (): string => {
    const now = new Date();
    return now.toLocaleString();
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast({
        title: "Chào mừng bạn quay trở lại!",
        description: `Thời gian hiện tại: ${getCurrentDate()}, chúc bạn mua sắm vui vẻ`,
      });
    }
  }, [isAuthenticated, toast]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
