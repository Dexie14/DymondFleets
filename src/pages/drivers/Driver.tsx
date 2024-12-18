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
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [inputFilters, setInputFilters] = useState<{ [key: string]: string }>({
    Email: "",
    PhoneNumber: "",
  });

  const { data: DriverData, isPending } = useGetDriver({
    page: currentPage,
    limit: entriesPerPage,
    isAvailable: filterStatus.join(","),
    search: searchQuery,
    email: inputFilters.Email,
    mobileNumber: inputFilters.PhoneNumber,
  });
  // console.log(DriverData?.data?.items, "rideData");

  const DriverTableData = DriverData?.data?.items;
  const DriverTablePagination = DriverData?.data?.pagedInfo;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleApplyFilters = (selectedFilters: string[]) => {
    setFilterStatus(selectedFilters);
  };
  const handleInputFilterChange = (name: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [name]: value }));
  };

  const [openPhone, setOpenPhone] = useState<boolean>(false);
  const [openEmail, setOpenEmail] = useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);

  const [openAssign, setOpenAssign] = useState<boolean>(false);

  const { selectedItems } = useDriverSelectStore();

  const selectedState = selectedItems?.length === 1;

  const [resetFilters, setResetFilters] = useState(false);

  const isFilterActive =
    filterStatus.length > 0 ||
    Object.values(inputFilters).some((value) => value.trim() !== "");

  const handleGlobalReset = () => {
    setFilterStatus([]);
    setResetFilters((prev) => !prev);
    setInputFilters({ Email: "", PhoneNumber: "" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <aside className="flex items-center justify-between">
        <h3 className="text-mediumBlue font-medium text-2xl">
          Drivers ({DriverTablePagination?.total})
        </h3>
        <Export allData={DriverTableData} selectedItems={selectedItems} />
      </aside>
      <section className="bg-white rounded-[8px] px-3 py-2 my-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Popover open={openEmail} onOpenChange={setOpenEmail}>
            <PopoverTrigger>
              <FilterSelect title="Email" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <InputFilter
                setOpen={setOpenEmail}
                title="Filter by Email "
                placeholder="Enter Email Address"
                nameTag="Email"
                onApplyFilters={(value) =>
                  handleInputFilterChange("Email", value)
                }
                resetFilters={resetFilters}
              />
            </PopoverContent>
          </Popover>
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
                onApplyFilters={(value) =>
                  handleInputFilterChange("PhoneNumber", value)
                }
                resetFilters={resetFilters}
              />
            </PopoverContent>
          </Popover>
          <Popover open={openStatus} onOpenChange={setOpenStatus}>
            <PopoverTrigger>
              <FilterSelect title=" Availability Status" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <CheckBoxFilter
                listData={["Online", "Offline"]}
                setOpen={setOpenStatus}
                onApplyFilters={handleApplyFilters}
                resetFilters={resetFilters}
                title=" Filter Status"
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
          <Pagination
            TablePagination={DriverTablePagination}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </section>
      ) : (
        <p className="text-center">no data available</p>
      )}
    </div>
  );
};

export default Driver;
