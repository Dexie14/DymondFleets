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
import { useState } from "react";

const Users = () => {
  const { data: usersData } = useGetUsers();
  console.log(usersData, "usersData");

  const userTableData = usersData?.data?.items;

  const [openEmail, setOpenEmail] = useState<boolean>(false);
  const [openPhone, setOpenPhone] = useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);
  return (
    <div>
      <aside className="flex items-center justify-between">
        <h3 className="text-mediumBlue font-medium text-2xl">Users</h3>
        <Export />
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

          <ResetFilter />
        </div>
        <section className="flex items-center gap-4">
          <div>
            <SearchInputComp className="!w-[220px]" />
          </div>
        </section>
      </section>
      <section className="my-3">
        <UserTable userTableData={userTableData ?? []}/>
        <Pagination />
      </section>
    </div>
  );
};

export default Users;
