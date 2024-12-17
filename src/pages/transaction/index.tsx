import CheckBoxFilter from "@/components/General/CheckBoxFilter";
import Export from "@/components/General/Export";
import FilterSelect from "@/components/General/FilterSelect";
import InputFilter from "@/components/General/InputFilter";
import Pagination from "@/components/General/Pagination";
import ResetFilter from "@/components/General/ResetFilter";
import SearchInputComp from "@/components/input/SearchInputComp";
import TransTable from "@/components/Transactions/TransTable";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGetTrans, {
  TransDataItem,
} from "@/hooks/api/queries/transaction/useGetTrans";
import { useEffect, useState } from "react";

const Transaction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<TransDataItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);

  const { data: TransData, isPending } = useGetTrans({
    page: currentPage,
    limit: entriesPerPage,
    status: filterStatus,
  });

  console.log(TransData, "TransData");

  const transTransData = TransData?.data?.items;

  const TransTablePagination = TransData?.data?.pagedInfo;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const [openEmail, setOpenEmail] = useState<boolean>(false);
  const [openPhone, setOpenPhone] = useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);

  const handleApplyFilters = (selectedFilters: string[]) => {
    setFilterStatus(selectedFilters);
  };

  const [resetFilters, setResetFilters] = useState(false);

  const isFilterActive = filterStatus?.length > 0;

  const handleGlobalReset = () => {
    setFilterStatus([]);
    setResetFilters((prev) => !prev);
  };

  useEffect(() => {
    if (transTransData) {
      // Filter by any keyword in the transaction data
      const filtered = transTransData.filter((item) => {
        return Object.values(item).some((val) =>
          String(val).toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredData(filtered);
    }
  }, [searchQuery, transTransData]);

  // useEffect(() => {
  //   // Filter data on searchQuery change
  //   if (transData?.data?.items) {
  //     const filtered = transData.data.items.filter((item) =>
  //       item.name.toLowerCase().includes(searchQuery.toLowerCase()) // Modify this according to your filter logic
  //     );
  //     setFilteredData(filtered);
  //   }
  // }, [searchQuery, transData]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <aside className="flex items-center justify-between">
        <h3 className="text-mediumBlue font-medium text-2xl">Transactions</h3>
        <Export />
      </aside>
      <section className="bg-white rounded-[8px] px-3 py-2 my-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
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
                listData={["new", "pending", "completed"]}
                setOpen={setOpenStatus}
                title=" Filter Status"
                onApplyFilters={handleApplyFilters}
                resetFilters={resetFilters}
              />
            </PopoverContent>
          </Popover>

          <ResetFilter onClick={handleGlobalReset} isActive={isFilterActive} />
        </div>
        <section className="flex items-center gap-4">
          <div>
            <SearchInputComp
              className="!w-[220px]"
              onChange={handleSearchChange}
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
          <TransTable transTransData={filteredData ?? []} />
          <Pagination
            TablePagination={TransTablePagination}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </section>
      )}
    </div>
  );
};

export default Transaction;
