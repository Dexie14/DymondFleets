import {
  DecreaseIcon,
  IncreaseIcon,
  IncomeIcon,
  CustomerIcon,
  RideIcon,
  RiderIcon,
  CancelIcon,
  RefundIcon,
  ComplainIcon,
  FeedbackIcon,
} from "@/assets/svgComp/AdminDashboard";

import { InfoType } from "@/pages/dashboard";
import { v4 } from "uuid";

type props = {
  infoData: InfoType;
};
const InfoCard = ({ infoData }: props) => {
  type iconInfoType =
    | "income"
    | "customer"
    | "rides"
    | "riders"
    | "cancel"
    | "refund"
    | "complain"
    | "feed";

  const infoImages: Record<iconInfoType, JSX.Element> = {
    income: <IncomeIcon />,
    customer: <CustomerIcon />,
    rides: <RideIcon />,
    riders: <RiderIcon />,
    cancel: <CancelIcon />,
    refund: <RefundIcon />,
    complain: <ComplainIcon />,
    feed: <FeedbackIcon />,
  };

  return (
    <div className="grid lg:grid-cols-4 items-center gap-2 ">
      {infoData?.map((item) => {
        return (
          <main
            key={v4()}
            className="flex gap-2 mt-4 flex-col bg-white py-6 px-8 rounded-[12px] shadow-adminshadow w-[260px]"
          >
            <div className="flex items-center gap-4">
              <div className="text-blueGray">
                {infoImages[item?.type as iconInfoType]}
              </div>
              <div>
                <p className="text-sm font-medium text-adminGrey">
                  {item?.title}
                </p>
                <p className="text-xl font-bold">
                  ${item?.count?.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="">
              <p
                className={`text-sm flex items-center gap-2 font-semibold ${
                  item?.percentage.includes("-")
                    ? "text-adminRed"
                    : "text-adminGreen"
                }`}
              >
                {item?.percentage.includes("-") ? (
                  <DecreaseIcon />
                ) : (
                  <IncreaseIcon />
                )}
                {item?.percentage}
              </p>
              <p className="text-sm font-medium text-textShade">
                Up from yesterday
              </p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default InfoCard;
