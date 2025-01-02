import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSideBar from "./DashboardPage/DashboardSideBar";
import authService from "@/services/modules/authService";
import { showToast, ToastType } from "../utils/toast";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await authService.logout();
      console.log("Logout successful:", response);
      showToast(ToastType.SUCCESS, "Đăng xuất thành công!");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      showToast(ToastType.ERROR, "Đăng xuất thất bại!");
    }
  };
  const { uuid } = useParams();
  return (
    <SidebarProvider>
      <DashboardSideBar />
      <main>
        <SidebarTrigger />
        {/* Nút bấm Logout */}
        <Helmet>
          <title>Trang Quản Lý - Ecommerce</title>
          <meta name="description" content="Trang quản lý" />
          <meta property="og:title" content="Trang quản lý - Ecommerce" />
        </Helmet>
        <p>UUID: {uuid}</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">
          Đăng xuất
        </button>
      </main>
    </SidebarProvider>
  );
};

export default DashboardPage;
