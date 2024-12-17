import InfoCard from "@/components/Dashboard.tsx/InfoCard";
import Statistics from "@/components/Dashboard.tsx/Statistics";
import useGetOverview from "@/hooks/api/queries/dashboard/getOverview";
export type InfoType = {
  title: string;
  type: string;
  percentage: string;
  count: number;
}[];
const Dashboard = () => {
  const infoData: InfoType = [
    {
      title: "Income",
      type: "income",
      count: 13675,
      percentage: "+2.51%",
    },
    {
      title: "User",
      type: "customer",
      count: 97499,
      percentage: "+2.51%",
    },
    {
      title: "Rides",
      type: "rides",
      count: 42530,
      percentage: "-3.56%",
    },
    {
      title: "Riders",
      type: "riders",
      count: 54961,
      percentage: "+0.94%",
    },
    {
      title: "Cancellations",
      type: "cancel",
      count: 370,
      percentage: "+1.2%",
    },
    // {
    //   title: "Refunds",
    //   type: "refund",
    //   count: 5232,
    //   percentage: "+1.2%",
    // },
    // {
    //   title: "Complaints",
    //   type: "complain",
    //   count: 5232,
    //   percentage: "+1.2%",
    // },
    {
      title: "Feedbacks",
      type: "feed",
      count: 5232,
      percentage: "+1.2%",
    },
  ];

  const { data } = useGetOverview();
  console.log(data, "dd");

  return (
    <div>
      <h3 className="text-mediumBlue font-medium text-2xl">Dashboard</h3>
      <div className="">
        <InfoCard infoData={infoData} />
      </div>
      <div className="my-5">
        <Statistics />
      </div>
    </div>
  );
};

export default Dashboard;
