import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSideBar from "./DashboardPage/DashboardSideBar";
const DashboardPage: React.FC = () => {
  return (
    <SidebarProvider>
      <DashboardSideBar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
};

export default DashboardPage;
