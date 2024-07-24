import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="">MENU</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
