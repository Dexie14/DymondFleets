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
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterPayment, setFilterPayment] = useState<string[]>([]);
  const [inputFilters, setInputFilters] = useState<{ [key: string]: string }>({
    rideId: "",
  });

  const { data: rideData, isPending } = useGetRides({
    page: currentPage,
    limit: entriesPerPage,
    search: searchQuery,
    type: filterStatus.join(","),
    paymentMethod: filterPayment.join(","),
    _id: inputFilters.rideId,
  });

  console.log(rideData?.data?.items, "rideData");

  const rideTableData = rideData?.data?.items;
  const rideTablePagination = rideData?.data?.pagedInfo;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const handleInputFilterChange = (name: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [name]: value }));
  };
  const handleApplyFilters = (selectedFilters: string[]) => {
    setFilterStatus(selectedFilters);
  };
  const handleApplyFiltersPayment = (selectedFilters: string[]) => {
    setFilterPayment(selectedFilters);
  };

  const [openRide, setOpenRide] = useState<boolean>(false);
  const [openType, setOpenType] = useState<boolean>(false);
  const [openPay, setOpenPay] = useState<boolean>(false);
  const [openAssign, setOpenAssign] = useState<boolean>(false);

  const { selectedItems } = useSelectStore();

  const selectedState = selectedItems?.length === 1;

  const [resetFilters, setResetFilters] = useState(false);

  const isFilterActive =
    filterStatus.length > 0 ||
    filterPayment.length > 0 ||
    Object.values(inputFilters).some((value) => value.trim() !== "");

  const handleGlobalReset = () => {
    setFilterStatus([]);
    setFilterPayment([]);
    setResetFilters((prev) => !prev);
    setInputFilters({ Email: "", PhoneNumber: "" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <aside className="flex items-center justify-between">
        <h3 className="text-mediumBlue font-medium text-2xl">Rides</h3>
        <Export allData={rideTableData} selectedItems={selectedItems}/>
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
                onApplyFilters={(value) =>
                  handleInputFilterChange("rideId", value)
                }
                resetFilters={resetFilters}
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
                listData={["one_way", "shared"]}
                setOpen={setOpenType}
                onApplyFilters={handleApplyFilters}
                resetFilters={resetFilters}
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
                listData={["cash", "card", "wallet"]}
                setOpen={setOpenPay}
                onApplyFilters={handleApplyFiltersPayment}
                resetFilters={resetFilters}
                title=" Filter by Payment Method"
              />
            </PopoverContent>
          </Popover>

          <ResetFilter onClick={handleGlobalReset} isActive={isFilterActive} />
        </div>
        <section className="flex items-center gap-4">
          <div>
            <SearchInputComp
              onChange={handleSearchChange}
              className="!w-[220px]"
            />
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
      {isPending ? (
        <div>
          <p className="text-center">Loading...</p>
        </div>
      ) : (
        <section className="my-3">
          <RideTable rideTableData={rideTableData ?? []} />
          <Pagination
            TablePagination={rideTablePagination}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </section>
      )}
    </div>
  );
};

export default Rides;
