import SuccessModal from "../Auth/SuccessModal";
import TableComponent from "../General/TableComp";
import { Button } from "../ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample data type
export type RideDataItem = {
  id: number;
  name: string;
  phone: string;
  orderStatus: string;
  status: string;
};

const sampleData: RideDataItem[] = [
  {
    id: 1,
    name: "Kayode Bayo",
    phone: "08067624207",
    orderStatus: "No assigned Order",
    status: "Online",
  },
  {
    id: 1,
    name: "Kayode Bayo",
    phone: "08067624207",
    orderStatus: "No assigned Order",
    status: "Offline",
  },
  {
    id: 1,
    name: "Kayode Bayo",
    phone: "08067624207",
    orderStatus: "No assigned Order",
    status: "Online",
  },
];

const AssignTable = () => {
  const headers = [
    { content: <>NAME</> },
    { content: <>PHONE NUMBER</> },
    { content: <>ORDER ASSIGN STATUS</> },
    { content: <>STATUS</> },
    { content: <>ASSIGN ORDER</> },
  ];

  const renderRow = (item: RideDataItem, index: number) => {
    return (
      <tr
        key={index}
        className="bg-foundationWhite w-full text-textShade text-[13px] h-[60px] text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">{item.name}</td>
        <td className="py-1 px-4">{item?.phone}</td>
        <td className="py-1 px-4">
          <span
            className={`${
              item?.orderStatus === "Online"
                ? "bg-[#EAFFEF] text-[#02B022] "
                : "text-[#B5983B] bg-[#FFFBEE]"
            } flex items-center justify-center gap-2   rounded-[8px] w-fit px-2 py-1`}
          >
            <div
              className={`h-3 w-3 ${
                item?.orderStatus === "Online"
                  ? "bg-[#02B022]"
                  : " bg-[#B5983B]"
              } rounded-full `}
            />
            {item?.orderStatus}
          </span>
        </td>
        <td className="py-1 px-4">
          <span
            className={`${
              item?.status === "Online"
                ? "bg-[#EAFFEF] text-[#02B022] "
                : "text-red-500 bg-red-200"
            } flex items-center justify-center gap-2 rounded-[8px] w-fit px-2 py-1`}
          >
            <div
              className={`h-3 w-3 ${
                item?.status === "Online" ? "bg-[#02B022]" : " bg-red-500"
              } rounded-full `}
            />
            {item?.status}
          </span>
        </td>
        <td className="py-1 px-4">
          <span>
            <Dialog>
              <DialogTrigger className="flex justify-center w-full">
                <Button className="bg-blueShade text-white rounded-[8px] text-xs py-2 px-7">
                  Assign
                </Button>
              </DialogTrigger>
              <DialogContent className="!rounded-[16px] w-[372px]">
                <SuccessModal message="Ride assigned successfully" text="You have assigned 3 rides to Kayode Bayo"/>
              </DialogContent>
            </Dialog>
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

export default AssignTable;
