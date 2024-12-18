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
import useGetTrans from "@/hooks/api/queries/transaction/useGetTrans";
import { useTransSelectStore } from "@/store/genericSelectStore";
import { useState } from "react";

const Transaction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [inputFilters, setInputFilters] = useState<{ [key: string]: string }>({
    Reference: "",
    Type: "",
  });

  const { data: TransData, isPending } = useGetTrans({
    page: currentPage,
    limit: entriesPerPage,
    status: filterStatus.join(","),
    search: searchQuery,
    reference: inputFilters.Reference,
    type: inputFilters.Type,
  });

  const transTransData = TransData?.data?.items;

  const TransTablePagination = TransData?.data?.pagedInfo;

  const { selectedItems } = useTransSelectStore();

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const [openReference, setOpenReference] = useState<boolean>(false);
  const [openType, setOpenType] = useState<boolean>(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);

  const handleApplyFilters = (selectedFilters: string[]) => {
    setFilterStatus(selectedFilters);
  };
  const handleInputFilterChange = (name: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [name]: value }));
  };

  const [resetFilters, setResetFilters] = useState(false);

  const isFilterActive =
    filterStatus.length > 0 ||
    Object.values(inputFilters).some((value) => value.trim() !== "");

  const handleGlobalReset = () => {
    setFilterStatus([]);
    setResetFilters((prev) => !prev);
    setInputFilters({ Reference: "", Type: "" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <aside className="flex items-center justify-between">
        <h3 className="text-mediumBlue font-medium text-2xl">
          Transactions ({TransTablePagination?.total})
        </h3>
        <Export allData={transTransData} selectedItems={selectedItems} />
      </aside>
      <section className="bg-white rounded-[8px] px-3 py-2 my-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Popover open={openReference} onOpenChange={setOpenReference}>
            <PopoverTrigger>
              <FilterSelect title=" Reference" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <InputFilter
                setOpen={setOpenReference}
                title="Filter by Reference"
                placeholder="Enter Reference"
                nameTag="Reference"
                onApplyFilters={(value) =>
                  handleInputFilterChange("Reference", value)
                }
                resetFilters={resetFilters}
              />
            </PopoverContent>
          </Popover>
          <Popover open={openType} onOpenChange={setOpenType}>
            <PopoverTrigger>
              <FilterSelect title="Transaction Type" />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="py-6 px-6 rounded-[12px] w-[350px]"
            >
              <InputFilter
                setOpen={setOpenType}
                title="Filter by Type"
                placeholder="Enter Type"
                nameTag="Type"
                onApplyFilters={(value) =>
                  handleInputFilterChange("Type", value)
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
      ) : transTransData && transTransData?.length > 0 ? (
        <section className="my-3">
          <TransTable transTransData={transTransData ?? []} />
          <Pagination
            TablePagination={TransTablePagination}
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

export default Transaction;
