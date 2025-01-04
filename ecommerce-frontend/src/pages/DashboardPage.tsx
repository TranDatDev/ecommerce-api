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
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <DashboardSideBar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Trang Quản Lý
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition duration-200">
              Đăng xuất
            </button>
          </header>

          <main className="flex-1 p-6">
            <Helmet>
              <title>Trang Quản Lý - Ecommerce</title>
              <meta name="description" content="Trang quản lý" />
              <meta property="og:title" content="Trang quản lý - Ecommerce" />
            </Helmet>

            {/* Nội dung chính */}
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700 text-lg">
                <span className="font-medium text-gray-900">UUID:</span> {uuid}
              </p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
