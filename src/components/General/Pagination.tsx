import { ArrowLeft, ArrowRight } from "@/assets/svgComp/General";

interface PaginationProps {
  currentPage?: any;
  totalEntries?: any;
  entriesPerPage?: any;
  onPageChange?: any;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  //   const getPageNumbers = () => {
  //     const pages: (number | string)[] = [];
  //     const maxVisiblePages = 3;

  //     if (totalPages <= 6) {
  //       // Show all pages if there are 6 or fewer
  //       for (let i = 1; i <= totalPages; i++) {
  //         pages.push(i);
  //       }
  //     } else {
  //       // Always show the first 3 and last 3 pages
  //       for (let i = 1; i <= maxVisiblePages; i++) {
  //         pages.push(i);
  //       }
  //       if (
  //         currentPage > maxVisiblePages &&
  //         currentPage < totalPages - maxVisiblePages + 1
  //       ) {
  //         pages.push(currentPage, "...");
  //       } else if (currentPage >= totalPages - maxVisiblePages + 1) {
  //         pages.push("...");
  //       }
  //       for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
  //         pages.push(i);
  //       }
  //     }
  //     return pages;
  //   };

  //   const pageNumbers = getPageNumbers();

  return (
    <div className=" py-4">
      <section className="flex justify-between  items-center">
        <p className="text-sm font-normal text-[#949699]">
          Showing {entriesPerPage * (currentPage - 1) + 1} -
          {Math.min(entriesPerPage * currentPage, totalEntries)} of{" "}
          {totalEntries} entries
        </p>
        <div className="flex gap-4 border border-[#D5D5D5] px-5  bg-white items-center  rounded-[8px]">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
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
            className={`disabled:cursor-not-allowed cursor-pointer`}
            disabled={currentPage === totalPages}
          >
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pagination;
