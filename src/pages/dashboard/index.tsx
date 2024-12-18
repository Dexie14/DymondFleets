import {
  IncomeIcon,
  CustomerIcon,
  RideIcon,
  RiderIcon,
} from "@/assets/svgComp/AdminDashboard";

import StatCard from "@/components/Dashboard.tsx/StatCard";
import Statistics from "@/components/Dashboard.tsx/Statistics";
import useGetOverview from "@/hooks/api/queries/dashboard/getOverview";
export type InfoType = {
  title: string;
  type: string;
  percentage: string;
  count: number;
}[];
const Dashboard = () => {
  // const infoData: InfoType = [
  //   {
  //     title: "Income",
  //     type: "income",
  //     count: 13675,
  //     percentage: "+2.51%",
  //   },
  //   {
  //     title: "User",
  //     type: "customer",
  //     count: 97499,
  //     percentage: "+2.51%",
  //   },
  //   {
  //     title: "Rides",
  //     type: "rides",
  //     count: 42530,
  //     percentage: "-3.56%",
  //   },
  //   {
  //     title: "Riders",
  //     type: "riders",
  //     count: 54961,
  //     percentage: "+0.94%",
  //   },
  //   {
  //     title: "Cancellations",
  //     type: "cancel",
  //     count: 370,
  //     percentage: "+1.2%",
  //   },
  //   // {
  //   //   title: "Refunds",
  //   //   type: "refund",
  //   //   count: 5232,
  //   //   percentage: "+1.2%",
  //   // },
  //   // {
  //   //   title: "Complaints",
  //   //   type: "complain",
  //   //   count: 5232,
  //   //   percentage: "+1.2%",
  //   // },
  //   {
  //     title: "Feedbacks",
  //     type: "feed",
  //     count: 5232,
  //     percentage: "+1.2%",
  //   },
  // ];

  const { data, isPending } = useGetOverview();

  const overviewData = data?.data;
  const GraphData = data?.data?.monthlySummary;
  console.log(overviewData, "dd");

  return (
    <div>
      <h3 className="text-mediumBlue font-medium text-2xl">Dashboard</h3>
      {/* <div className="">
        <InfoCard infoData={infoData} />
      </div> */}
      {isPending ? (
        <p className="text-sm my-5 text-center">Loading...</p>
      ) : (
        <section>
          <div className="grid lg:grid-cols-3 w-full items-center gap-x-4 ">
            <StatCard
              count={`₦${overviewData?.summary?.totalIncome}`}
              title="income"
              image={<IncomeIcon />}
            />
            <StatCard
              title="User"
              count={overviewData?.allTime?.users}
              image={<CustomerIcon />}
            />
            <StatCard
              title="Trips"
              count={overviewData?.allTime?.trips}
              image={<RideIcon />}
            />
            <StatCard
              title="Riders"
              count={overviewData?.allTime?.riders}
              image={<RiderIcon />}
            />
          </div>
          <div className="my-5">
            <Statistics GraphData={GraphData} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
