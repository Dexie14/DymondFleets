import { Link, useLocation, useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import logoColored from "@/assets/logoColored.png";

import { ReactNode } from "react";
import {
  CustomerIcon,
  DashboardIcon,
  DriverIcon,
  RideIcon,
  TransactionIcon,
} from "@/assets/svgComp/SidebarIcon";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";

type SidebarItem = {
  name: string;
  link: string;
  icon?: ReactNode;
};

const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    link: "/admin",
    icon: <DashboardIcon />,
  },
  {
    name: "Rides",
    link: "/admin/rides",
    icon: <RideIcon />,
  },
  {
    name: "Transaction",
    link: "/admin/transaction",
    icon: <TransactionIcon />,
  },
  {
    name: "Users",
    link: "/admin/users",
    icon: <CustomerIcon />,
  },
  {
    name: "Drivers",
    link: "/admin/driver",
    icon: <DriverIcon />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    //  currentUser,
    logout,
  } = useAuthStore();

  const handleLogout = () => {
    logout();
    Cookies.remove("accessToken");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="relative h-[80vh]">
      <Link to={"/"}>
        <div className="p-10 flex justify-center items-center">
          <img src={logoColored} alt="logo" className="w-[100px] " />
        </div>
      </Link>

      <main className="">
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <div key={index}>
              <Link
                to={item.link}
                className={`flex items-center justify-between relative h-[60px]  ${
                  isActive
                    ? " text-adminBlue"
                    : "hover:text-adminBlue text-mediumGrey "
                }`}
              >
                {isActive && (
                  <div className="h-[60px] w-2 bg-adminBlue rounded-r-[10px] absolute left-0" />
                )}
                <div className="flex gap-3 ml-10 items-center">
                  {item.icon}
                  <p
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-adminBlue"
                        : "text-mediumGrey hover:text-adminBlue"
                    } `}
                  >
                    {item.name}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </main>
      <div className="ml-10 absolute bottom-0">
        <button
          onClick={handleLogout}
          className="w-full flex items-center p-2 space-x-1 rounded-lg text-foundationRed hover:text-adminBlue "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
