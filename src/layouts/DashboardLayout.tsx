import DashboardSidebar from "@/appcomponents/DashboardSidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <DashboardSidebar />
      <Outlet />
    </div>
  );
}
