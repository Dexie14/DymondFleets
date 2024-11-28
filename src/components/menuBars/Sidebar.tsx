import { Link, useLocation } from "react-router-dom";

import logoColored from "@/assets/logoColored.png";

import { ReactNode } from "react";
import {
  CustomerIcon,
  DashboardIcon,
  DriverIcon,
  RideIcon,
  TransactionIcon,
} from "@/assets/svgComp/SidebarIcon";

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

  return (
    <div className="">
      <Link to={"/"} >
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
    </div>
  );
};

export default Sidebar;
