import TableComponent from "../General/TableComp";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useDriverSelectStore } from "@/store/genericSelectStore";
import DriverDetail from "./DriverDetail";
// import UserDetail from "./UserDetail";

// Sample data type
export type DriverDataItem = {
  id: number;
  name?: string;
  email?: string;
  number: string;
  assignStatus: string;
  status: string;
};

const sampleData: DriverDataItem[] = [
  {
    id: 1,
    name: "Kayode Bayo",
    email: "KayodeBayo@gmail.com",
    number: "08067624207",
    assignStatus: "In-transit",
    status: "Online",
  },
  {
    id: 2,
    name: "Kayode Bayo",
    email: "KayodeBayo@gmail.com",
    number: "08067624207",
    assignStatus: "No assigned Order",
    status: "Offline",
  },
];

const DriverTable = () => {
  const { selectedItems, addItem, removeItem, selectAll, clearAll } =
    useDriverSelectStore();
  console.log(selectedItems, "selectedItemsUser");

  const [selectedRow, setSelectedRow] = useState<DriverDataItem | null>(null);

  const headers = [
    {
      content: (
        <input
          type="checkbox"
          checked={selectedItems.length === sampleData.length}
          onChange={(e) => {
            if (e.target.checked) {
              selectAll(sampleData);
            } else {
              clearAll();
            }
          }}
        />
      ),
    },
    { content: <>NAME</> },
    { content: <>EMAIL</> },
    { content: <>PHONE NUMBER</> },
    { content: <>ORDER ASSIGN STATUS</> },
    { content: <> STATUS</> },
  ];

  const renderRow = (item: DriverDataItem, index: number) => {
    const handleRowClick = (row: DriverDataItem) => {
      setSelectedRow(row);
    };

    return (
      <tr
        key={index}
        onClick={() => handleRowClick(item)}
        className="bg-white w-full text-textShade text-[13px] h-[60px] text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">
          <span>
            <input
              type="checkbox"
              onClick={(e) => e.stopPropagation()}
              checked={selectedItems.some((i) => i.id === item.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  addItem(item);
                } else {
                  removeItem(item.id);
                }
              }}
            />
          </span>
        </td>
        <td className="py-1 px-4">{item.name}</td>
        <td className="py-1 px-4">{item?.email}</td>
        <td className="py-1 px-4">{item?.number}</td>
        <td className="py-1 px-4">
          {" "}
          <span
            className={`${
              item?.assignStatus === "In-transit"
                ? "bg-[#E6E8F3] text-blueShade"
                : "text-[#B5983B] bg-[#FFFBEE]"
            }  flex items-center justify-center gap-2 rounded-[8px] w-fit px-2 py-1`}
          >
            <div
              className={`h-3 w-3 ${
                item?.assignStatus === "In-transit"
                  ? "bg-blueShade"
                  : " bg-[#B5983B]"
              } rounded-full `}
            />
            {item?.assignStatus}
          </span>
        </td>
        <td className="py-1 px-4">
          <span
            className={`${
              item?.status === "Online"
                ? "bg-[#EAFFEF] text-[#079D23]"
                : item?.status === "Offline"
                ? "bg-[#FFECEC] text-[#9D0707]"
                : "text-[#B5983B] bg-[#FFFBEE]"
            } flex items-center justify-center gap-2  rounded-[8px] w-fit px-2 py-1`}
          >
            <div
              className={`h-3 w-3 ${
                item?.status === "Online" ? "bg-[#079D23]" : " bg-[#9D0707]"
              } rounded-full `}
            />
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
      {selectedRow && (
        <Dialog
          open={selectedRow !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedRow(null);
          }}
        >
          <DialogContent
            style={{
              maxWidth: "60vw",
            }}
            className="!rounded-[20px] px-9 overflow-y-scroll scrollbar-hidden max-h-[80vh]"
          >
            <DialogTitle className="text-2xl font-medium text-foundationBlue">
              Driver’s Detail
            </DialogTitle>
            <DriverDetail selectedRow={selectedRow} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default DriverTable;
