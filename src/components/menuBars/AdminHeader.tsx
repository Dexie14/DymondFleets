import { NotificationIcon } from "@/assets/svgComp/SidebarIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "@/assets/avatar.png";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const AdminHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = format(currentTime, "eeee, dd, yyyy");

  const formattedTime = format(currentTime, "hh:mm:ss a");
  return (
    <div className="bg-white py-8 px-10 flex items-center justify-between">
      <h3 className="text-xl font-semibold text-blueShade">
        Good morning, Abayomi!
      </h3>
      <div className="flex gap-5 items-center">
        <h6 className="text-lg font-semibold text-textShade">
          {formattedDate}
        </h6>
        <h6 className="text-lg font-semibold text-blueShade">
          {formattedTime}
        </h6>
      </div>
      <div className="flex gap-14 items-center">
        <NotificationIcon />
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default AdminHeader;