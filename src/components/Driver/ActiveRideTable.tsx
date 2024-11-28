import TableComponent from "../General/TableComp";

// Sample data type
export type ActiveRideDataItem = {
  id: number;
  pickup: string;
  drop: string;
  rideId: string;
  status: string;
};

const sampleData: ActiveRideDataItem[] = [
  {
    id: 1,
    rideId: "12437598",
    drop: "089 Kutch Green Apt. 448",
    pickup: "089 Kutch Green Apt. 448",
    status: "Completed",
  },
  {
    id: 1,
    rideId: "12437598",
    drop: "089 Kutch Green Apt. 448",
    pickup: "089 Kutch Green Apt. 448",
    status: "Failed",
  },
];

const ActiveRideTable = () => {
  const headers = [
    { content: <>RIDE ID</> },
    { content: <>PICKUP LOCATION</> },
    { content: <>DROP OFF LOCATION</> },
    { content: <>RIDE STATUS</> },
  ];

  const renderRow = (item: ActiveRideDataItem, index: number) => {
    return (
      <tr
        key={index}
        className="bg-foundationWhite w-full text-textShade text-[13px] h-[60px] text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">{item.rideId}</td>
        <td className="py-1 px-4">{item?.pickup}</td>
        <td className="py-1 px-4">{item?.drop}</td>

        <td className="py-1 px-4">
          <span
            className={`${
              item?.status === "Completed" ? " text-[#02B022] " : "text-red-500"
            }  rounded-[8px] w-fit px-2 py-1`}
          >
            {item?.status}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <TableComponent
        headers={headers}
        data={sampleData}
        renderRow={renderRow}
      />
    </div>
  );
};

export default ActiveRideTable;
