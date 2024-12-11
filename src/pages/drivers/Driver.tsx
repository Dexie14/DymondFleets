import Export from "@/components/General/Export";
import CheckBoxFilter from "@/components/General/CheckBoxFilter";

import FilterSelect from "@/components/General/FilterSelect";
import InputFilter from "@/components/General/InputFilter";
import Pagination from "@/components/General/Pagination";
import ResetFilter from "@/components/General/ResetFilter";
import SearchInputComp from "@/components/input/SearchInputComp";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import Assign from "@/components/General/Assign";
import { useDriverSelectStore } from "@/store/genericSelectStore";
import DriverTable from "@/components/Driver/DriverTable";
import RideAssignTable from "@/components/Driver/RideAssignTable";
import useGetDriver from "@/hooks/api/queries/drivers/useDriver";

const Driver = () => {
  const { data: DriverData, isPending } = useGetDriver();

  console.log(DriverData?.data?.items, "rideData");

  const DriverTableData = DriverData?.data?.items;

  const [openPhone, setOpenPhone] = useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);
  const [openOrderStatus, setOpenOrderStatus] = useState<boolean>(false);

  const [openAssign, setOpenAssign] = useState<boolean>(false);

  const { selectedItems } = useDriverSelectStore();

  const selectedState = selectedItems?.length === 1;

  return (
    <div>
      <aside className="flex items-center justify-between">
        <h3 className="text-mediumBlue font-medium text-2xl">Drivers</h3>
        <Export selectedItems={selectedItems} />
      </aside>
      <section className="bg-white rounded-[8px] px-3 py-2 my-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Popover open={openPhone} onOpenChange={setOpenPhone}>
            <PopoverTrigger>
              <FilterSelect title="Phone Number" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <InputFilter
                setOpen={setOpenPhone}
                title="Filter by Phone Number"
                placeholder="Enter Phone Number"
                nameTag="PhoneNumber"
              />
            </PopoverContent>
          </Popover>
          <Popover open={openStatus} onOpenChange={setOpenStatus}>
            <PopoverTrigger>
              <FilterSelect title=" Status" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <CheckBoxFilter
                listData={["Online", "Offline"]}
                setOpen={setOpenStatus}
                title=" Filter Status"
              />
            </PopoverContent>
          </Popover>
          <Popover open={openOrderStatus} onOpenChange={setOpenOrderStatus}>
            <PopoverTrigger>
              <FilterSelect title=" Order Assign Status" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <CheckBoxFilter
                listData={["In-transit", "No assigned Order"]}
                setOpen={setOpenOrderStatus}
                title=" Filter by Order Assign Status"
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
                    maxWidth: "90vw",
                  }}
                >
                  <DialogTitle className="text-2xl font-medium text-mediumBlue">
                    Available Rides
                  </DialogTitle>
                  <div className="my-5 bg-[#E6E6E6] rounded-[12px] max-h-[60vh] overflow-y-scroll scrollbar-hidden">
                    <RideAssignTable />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </section>
      </section>
      {isPending ? (
        <div>
          <p className="text-center">Loading...</p>
        </div>
      ) : DriverTableData && DriverTableData?.length > 0 ? (
        <section className="my-3">
          <DriverTable DriverTableData={DriverTableData ?? []} />
          <Pagination />
        </section>
      ) : (
        <p className="text-center">no data available</p>
      )}
    </div>
  );
};

export default Driver;
