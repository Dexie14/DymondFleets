import { useSelectStore } from "@/store/selectStore";
import TableComponent from "../General/TableComp";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import RideDetail from "./RideDetail";

// Sample data type
export type RideDataItem = {
  id: number;
  rideId?: string;
  PICKUP?: string;
  TYPE?: string;
  DROP?: string;
  PASSENGERS?: string;
  PAYMENT?: string;
};

const sampleData: RideDataItem[] = [
  {
    id: 1,
    rideId: "12436589",
    PICKUP: "089 Kutch Green Apt. 448",
    DROP: "089 Kutch Green Apt. 448",
    TYPE: "Car",
    PASSENGERS: "5",
    PAYMENT: "Cash",
  },
  {
    id: 2,
    rideId: "12436589",
    PICKUP: "089 Kutch Green Apt. 448",
    DROP: "089 Kutch Green Apt. 448",
    TYPE: "Bike",
    PASSENGERS: "5",
    PAYMENT: "Card",
  },
  {
    id: 3,
    rideId: "12436589",
    PICKUP: "089 Kutch Green Apt. 448",
    DROP: "089 Kutch Green Apt. 448",
    TYPE: "Truck",
    PASSENGERS: "5",
    PAYMENT: "Wallet",
  },
  {
    id: 4,
    rideId: "12436589",
    PICKUP: "089 Kutch Green Apt. 448",
    DROP: "089 Kutch Green Apt. 448",
    TYPE: "Bus",
    PASSENGERS: "5",
    PAYMENT: "Wallet",
  },
];

const RideTable = () => {
  const { selectedItems, addItem, removeItem, selectAll, clearAll } =
    useSelectStore();

  console.log(selectedItems, "selectedItems");

  const [selectedRow, setSelectedRow] = useState<RideDataItem | null>(null);

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
    { content: <>RIDE ID</> },
    { content: <>PICKUP LOCATION</> },
    { content: <>DROP OFF LOCATION</> },
    { content: <>RIDE TYPE</> },
    { content: <> NO OF PASSENGERS</> },
    { content: <> PAYMENT METHOD</> },
  ];

  const renderRow = (item: RideDataItem, index: number) => {
    const handleRowClick = (row: RideDataItem) => {
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
        <td className="py-1 px-4">{item.rideId}</td>
        <td className="py-1 px-4">{item?.PICKUP}</td>
        <td className="py-1 px-4">{item?.DROP}</td>
        <td className="py-1 px-4">{item?.TYPE}</td>
        <td className="py-1 px-4">{item?.PASSENGERS}</td>
        <td className="py-1 px-4">{item?.PAYMENT}</td>
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
          <DialogContent className="!rounded-[20px] px-9 overflow-y-scroll scrollbar-hidden h-[80vh]">
            <DialogTitle className="text-2xl font-medium text-foundationBlue">
              Rides Detail
            </DialogTitle>
            <RideDetail selectedRow={selectedRow} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RideTable;
