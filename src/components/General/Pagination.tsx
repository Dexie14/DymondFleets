import { ArrowLeft, ArrowRight } from "@/assets/svgComp/General";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  TablePagination?: PaginationType;
}

export type PaginationType = {
  hasNext: boolean;
  hasPrevious: boolean;
  limit: number;
  page: number;
  total: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  TablePagination,
}) => {
  // const totalPages = Math.ceil(TablePagination?.total / TablePagination?.limit);
  const handlePrevPage = () => {
    if (TablePagination?.hasPrevious) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (TablePagination?.hasNext) {
      onPageChange(currentPage + 1);
    }
  };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     onPageChange(currentPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     onPageChange(currentPage + 1);
  //   }
  // };

  return (
    <div className=" py-4">
      <section className="flex justify-between  items-center">
        {TablePagination && (
          <p className="text-sm font-normal text-[#949699]">
            Showing {TablePagination.limit * (currentPage - 1) + 1} -{" "}
            {Math.min(
              TablePagination.limit * currentPage,
              TablePagination.total
            )}{" "}
            of {TablePagination.total} entries
          </p>
        )}
        <div className="flex gap-4 border border-[#D5D5D5] px-5  bg-white items-center  rounded-[8px]">
          <button
            onClick={handlePrevPage}
            disabled={!TablePagination?.hasPrevious}
            className={`disabled:cursor-not-allowed cursor-pointer`}
          >
            <ArrowLeft />
          </button>
          <hr className="h-[30px] border border-[#D5D5D5]" />
          {/* <div className="flex items-center justify-between gap-1 rounded-[29px] bg-[#F3F2F7] h-[29px]">
            {pageNumbers?.map((page, index) => (
              <p
                key={index}
                className={`rounded-[29px] h-[29px] w-[29px] flex items-center justify-center ${
                  currentPage === page ? "text-white bg-[#001F56]" : ""
                } ${page === "..." ? "cursor-default text-gray-500" : ""}`}
                onClick={() => typeof page === "number" && onPageChange(page)}
              >
                {page}
              </p>
            ))}
          </div> */}
          <button
            onClick={handleNextPage}
            disabled={!TablePagination?.hasNext}
            className={`disabled:cursor-not-allowed cursor-pointer`}
          >
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pagination;
