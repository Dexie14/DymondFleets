import Assign from "@/components/General/Assign";
import CheckBoxFilter from "@/components/General/CheckBoxFilter";
import Export from "@/components/General/Export";
import FilterSelect from "@/components/General/FilterSelect";
import InputFilter from "@/components/General/InputFilter";
import Pagination from "@/components/General/Pagination";
import ResetFilter from "@/components/General/ResetFilter";
import SearchInputComp from "@/components/input/SearchInputComp";
import RideTable from "@/components/Rides/RideTable";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const Rides = () => {
  const [openRide, setOpenRide] = useState<boolean>(false);
  const [openType, setOpenType] = useState<boolean>(false);
  const [openPay, setOpenPay] = useState<boolean>(false);
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
            <Assign />
          </div>
        </section>
      </section>
      <section className="my-3">
        <RideTable />
        <Pagination />
      </section>
    </div>
  );
};

export default Rides;
