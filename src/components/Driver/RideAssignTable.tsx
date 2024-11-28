import SuccessModal from "../Auth/SuccessModal";
import TableComponent from "../General/TableComp";
import { Button } from "../ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample data type
export type RideAssignDataItem = {
  id: number;
  rideId?: string;
  PICKUP?: string;
  TYPE?: string;
  DROP?: string;
  PASSENGERS?: string;
  PAYMENT?: string;
};

const sampleData: RideAssignDataItem[] = [
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
];

const RideAssignTable = () => {
  const headers = [
    { content: <>RIDE ID</> },
    { content: <>PICKUP LOCATION</> },
    { content: <>DROP OFF LOCATION</> },
    { content: <>RIDE TYPE</> },
    { content: <>NO OF PASSENGERS</> },
    { content: <>PAYMENT METHOD</> },
    { content: <>ASSIGN ORDER</> },
  ];

  const renderRow = (item: RideAssignDataItem, index: number) => {
    return (
      <tr
        key={index}
        className="bg-foundationWhite w-full text-textShade text-[13px] h-[60px] text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">{item?.rideId}</td>
        <td className="py-1 px-4">{item?.PICKUP}</td>
        <td className="py-1 px-4">{item?.DROP}</td>
        <td className="py-1 px-4">{item?.TYPE}</td>
        <td className="py-1 px-4">{item?.PASSENGERS}</td>
        <td className="py-1 px-4">{item?.PAYMENT}</td>

        <td className="py-1 px-4">
          <span>
            <Dialog>
              <DialogTrigger className="flex justify-center w-full">
                <Button className="bg-blueShade text-white rounded-[8px] text-xs py-2 px-7">
                  Assign
                </Button>
              </DialogTrigger>
              <DialogContent className="!rounded-[16px] w-[372px]">
                <SuccessModal
                  message="Driver assigned successfully"
                  text="You have assigned a driver to this ride"
                />
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

export default RideAssignTable;
