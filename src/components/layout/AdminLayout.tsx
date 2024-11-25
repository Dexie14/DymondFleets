import { Outlet } from "react-router-dom";

import Sidebar from "../menuBars/Sidebar";
import AdminHeader from "../menuBars/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[18%] bg-foundationWhite">
        <Sidebar />
      </div>
      <div className="w-[82%]">
        <AdminHeader />
        <div className="h-[calc(100vh-104px)] bg-adminbg overflow-y-auto scrollbar-hidden p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
