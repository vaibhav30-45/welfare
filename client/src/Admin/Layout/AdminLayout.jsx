import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";

import "./AdminLayout.css";

const AdminLayout = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (

    <div className="admin-layout">

      <Sidebar />

      <div
        className={
          showSidebar
            ? "mobile-sidebar show"
            : "mobile-sidebar"
        }
      >
        <Sidebar />
      </div>

      <div className="admin-content">

        <Topbar
          toggleSidebar={() =>
            setShowSidebar(!showSidebar)
          }
        />

        <main className="dashboard-body">

          <Outlet />

        </main>

      </div>

    </div>

  );

};

export default AdminLayout;