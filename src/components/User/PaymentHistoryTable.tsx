import TableComponent from "../General/TableComp";

// Sample data type
export type RideDataItem = {
  id: number;
  paymentId: string;
  date: string;
  time: string;
  amount: string;
  status: string;
};

const sampleData: RideDataItem[] = [
  {
    id: 1,
    paymentId: "012400003456",
    date: "10 October, 2024",
    time: "21:15",
    amount: "#3000",
    status: "Completed",
  },
  {
    id: 2,
    paymentId: "012400003456",
    date: "10 October, 2024",
    time: "21:15",
    amount: "#3000",
    status: "Failed",
  },
];

const PaymentHistoryTable = () => {
  const headers = [
    { content: <>PAYMENT ID</> },
    { content: <>DATE</> },
    { content: <>TIME</> },
    { content: <>AMOUNT</> },
    { content: <>PAYMENT STATUS</> },
  ];

  const renderRow = (item: RideDataItem, index: number) => {
    return (
      <tr
        key={index}
        className="bg-foundationWhite w-full text-textShade text-[13px] h-[60px] text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">{item.paymentId}</td>
        <td className="py-1 px-4">{item?.date}</td>
        <td className="py-1 px-4">{item?.time}</td>
        <td className="py-1 px-4">{item?.amount}</td>

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

export default PaymentHistoryTable;
