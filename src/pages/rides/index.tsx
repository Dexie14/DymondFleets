import Assign from "@/components/General/Assign";
import CheckBoxFilter from "@/components/General/CheckBoxFilter";
import Export from "@/components/General/Export";
import FilterSelect from "@/components/General/FilterSelect";
import InputFilter from "@/components/General/InputFilter";
import Pagination from "@/components/General/Pagination";
import ResetFilter from "@/components/General/ResetFilter";
import SearchInputComp from "@/components/input/SearchInputComp";
import AssignTable from "@/components/Rides/AssignTable";
import RideTable from "@/components/Rides/RideTable";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGetRides from "@/hooks/api/queries/rides/useGetRides";
import { useSelectStore } from "@/store/selectStore";
import { useState } from "react";

const Rides = () => {
  const { data: rideData } = useGetRides();

  console.log(rideData?.data?.items, "rideData");

  const rideTableData = rideData?.data?.items;

  const [openRide, setOpenRide] = useState<boolean>(false);
  const [openType, setOpenType] = useState<boolean>(false);
  const [openPay, setOpenPay] = useState<boolean>(false);
  const [openAssign, setOpenAssign] = useState<boolean>(false);

  const { selectedItems } = useSelectStore();

  const selectedState = selectedItems?.length === 1;
  return (
    <div>
      <aside className="flex items-center justify-between">
        <h3 className="text-mediumBlue font-medium text-2xl">Rides</h3>
        <Export />
      </aside>
      <section className="bg-white rounded-[8px] px-3 py-2 my-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Popover open={openRide} onOpenChange={setOpenRide}>
            <PopoverTrigger>
              <FilterSelect title=" Ride ID" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <InputFilter
                setOpen={setOpenRide}
                title="Filter by Ride ID"
                placeholder="Enter Ride ID"
                nameTag="rideId"
              />
            </PopoverContent>
          </Popover>
          <Popover open={openType} onOpenChange={setOpenType}>
            <PopoverTrigger>
              <FilterSelect title=" Ride Type" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <CheckBoxFilter
                listData={["Car", "Bike", "Bus", "Truck"]}
                setOpen={setOpenType}
                title=" Filter by Ride Type"
              />
            </PopoverContent>
          </Popover>
          <Popover open={openPay} onOpenChange={setOpenPay}>
            <PopoverTrigger>
              <FilterSelect title=" Payment Method" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <CheckBoxFilter
                listData={["Cash", "Card", "Wallet"]}
                setOpen={setOpenPay}
                title=" Filter by Payment Method"
              />
            </PopoverContent>
          </Popover>

          <ResetFilter />
        </div>
        <section className="flex items-center gap-4">
          <div>
            <SearchInputComp className="!w-[220px]" />
          </div>
          <div>
            <Assign
              onClick={() => setOpenAssign(selectedState ? true : false)}
              className={`${selectedState ? "bg-blueShade text-white" : ""}`}
            />
            {openAssign && (
              <Dialog onOpenChange={setOpenAssign} open={openAssign}>
                <DialogContent
                  className="!rounded-[20px] "
                  style={{
                    maxWidth: "70vw",
                  }}
                >
                  <DialogTitle className="text-2xl font-medium text-mediumBlue">
                    Available Drivers
                  </DialogTitle>
                  <div className="my-5 bg-[#E6E6E6] rounded-[12px] max-h-[60vh] overflow-y-scroll scrollbar-hidden">
                    <AssignTable />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </section>
      </section>
      <section className="my-3">
        <RideTable rideTableData={rideTableData ?? []} />
        <Pagination />
      </section>
    </div>
  );
};

export default Rides;

