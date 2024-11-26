import { ReactNode } from "react";

type Header = {
  content: ReactNode; // Text, icon, or any JSX content
  align?: "left" | "center" | "right"; // Optional alignment
};

type TableProps<T> = {
  headers: Header[]; // Array of header names or JSX elements
  data: T[]; // Array of data items
  renderRow: (item: T, index: number) => ReactNode; // Custom render function for table rows
};

const TableComponent = <T,>({ headers, data, renderRow }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto scrollableCSS rounded-[12px]">
      <table className="min-w-full table-auto  tablingTable">
        <thead className="text-left ">
          <tr className="bg-purpleBlue h-[40px] text-textBlue text-sm ">
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b text-nowrap">
                {header?.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, index) => renderRow(item, index))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
