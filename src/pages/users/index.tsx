import { FilterIcon } from "@/assets/svgComp/General";
import CheckBoxFilter from "@/components/General/CheckBoxFilter";
import Export from "@/components/General/Export";

import FilterSelect from "@/components/General/FilterSelect";
import InputFilter from "@/components/General/InputFilter";
import Pagination from "@/components/General/Pagination";
import ResetFilter from "@/components/General/ResetFilter";
import SearchInputComp from "@/components/input/SearchInputComp";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserTable from "@/components/User/UserTable";
import useGetUsers from "@/hooks/api/queries/user/useGetUsers";
import { useUsersSelectStore } from "@/store/genericSelectStore";
import { useState } from "react";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [inputFilters, setInputFilters] = useState<{ [key: string]: string }>({
    Email: "",
    PhoneNumber: "",
  });

  const { data: usersData, isPending } = useGetUsers({
    page: currentPage,
    limit: entriesPerPage,
    search: searchQuery,
    isVerified: filterStatus.join(","),
    email: inputFilters.Email,
    phoneNumber: inputFilters.PhoneNumber,
  });
  console.log(usersData, "usersData");

  const userTableData = usersData?.data?.items;

  const UserTablePagination = usersData?.data?.pagedInfo;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const handleInputFilterChange = (name: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [name]: value }));
  };
  const handleApplyFilters = (selectedFilters: string[]) => {
    setFilterStatus(selectedFilters);
  };

  const [openEmail, setOpenEmail] = useState<boolean>(false);
  const [openPhone, setOpenPhone] = useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);

  const { selectedItems } = useUsersSelectStore();

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
          Users ({UserTablePagination?.total})
        </h3>
        <Export allData={userTableData} selectedItems={selectedItems} />
      </aside>
      <section className="bg-white rounded-[8px] px-3 py-2 my-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button className="flex items-center hover:text-white bg-transparent gap-3 px-3 py-2 rounded-[4px] border text-textShade text-sm font-medium border-border">
            <div className="mr-1">
              <FilterIcon />
            </div>
            Filter
          </Button>
          <Popover open={openEmail} onOpenChange={setOpenEmail}>
            <PopoverTrigger>
              <FilterSelect title=" Email" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <InputFilter
                setOpen={setOpenEmail}
                title="Filter by Email"
                placeholder="Enter Email"
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
              <FilterSelect title=" Status" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <CheckBoxFilter
                listData={["True", "False"]}
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
        </section>
      </section>
      {isPending ? (
        <div>
          <p className="text-center">Loading...</p>
        </div>
      ) : (
        <section className="my-3">
          <UserTable userTableData={userTableData ?? []} />
          <Pagination
            TablePagination={UserTablePagination}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </section>
      )}
    </div>
  );
};

export default Users;
