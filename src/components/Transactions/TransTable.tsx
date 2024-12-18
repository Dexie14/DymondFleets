import TableComponent from "../General/TableComp";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useTransSelectStore } from "@/store/genericSelectStore";
import TransDetail from "./TransDetail";
import { TransDataItem } from "@/hooks/api/queries/transaction/useGetTrans";

import { format, parseISO } from "date-fns";
import { truncateText } from "@/lib/fns";

// Sample data type
// export type TransDataItem = {
//   _id: string;
//   transId?: string;
//   amount?: string;
//   date: string;
//   TYPE: string;
//   status: string;
//   PAYMENT: string;
// };

// const sampleData: TransDataItem[] = [
//   {
//     _id: "1",
//     transId: "#3456740009",
//     amount: "#2000",
//     date: "8 November, 2024",
//     TYPE: "Ride Payment",
//     status: "Approved",
//     PAYMENT: "Cash",
//   },
//   {
//     _id: "2",
//     transId: "#3456740009",
//     amount: "#2000",
//     date: "8 November, 2024",
//     TYPE: "Ride Payment",
//     status: "Pending",
//     PAYMENT: "Card",
//   },
//   {
//     _id: "3",
//     transId: "#3456740009",
//     amount: "#2000",
//     date: "8 November, 2024",
//     TYPE: "Ride Payment",
//     status: "Cancelled",
//     PAYMENT: "Card",
//   },
// ];

type TransTableProps = {
  transTransData: TransDataItem[];
};

const TransTable = ({ transTransData }: TransTableProps) => {
  const { selectedItems, addItem, removeItem, selectAll, clearAll } =
    useTransSelectStore();
  console.log(selectedItems, "selectedItemsTrans");

  const [selectedRow, setSelectedRow] = useState<TransDataItem | null>(null);

  const headers = [
    {
      content: (
        <input
          type="checkbox"
          checked={selectedItems.length === transTransData.length}
          onChange={(e) => {
            if (e.target.checked) {
              selectAll(transTransData);
            } else {
              clearAll();
            }
          }}
        />
      ),
    },
    { content: <>REFERENCE ID</> },
    { content: <>AMOUNT PAID (NGN)</> },
    { content: <>PAYMENT METHOD</> },
    { content: <>DATE CREATED</> },
    { content: <> TRANSACTION TYPE</> },
    { content: <> STATUS</> },
  ];

  const renderRow = (item: TransDataItem, index: number) => {
    const handleRowClick = (row: TransDataItem) => {
      setSelectedRow(row);
    };

    return (
      <tr
        key={index}
        onClick={() => handleRowClick(item)}
        className="bg-white w-full text-textShade text-[13px] h-[60px] text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">
          <span>
            <input
              type="checkbox"
              onClick={(e) => e.stopPropagation()}
              checked={selectedItems.some((i) => i._id === item._id)}
              onChange={(e) => {
                if (e.target.checked) {
                  addItem(item);
                } else {
                  removeItem(item._id);
                }
              }}
            />
          </span>
        </td>
        <td className="py-1 px-4">{truncateText(item?.reference, 10)}</td>
        <td className="py-1 px-4">{item?.amount}</td>
        <td className="py-1 px-4">expected cash</td>
        <td className="py-1 px-4">
          {item.createdAt
            ? format(parseISO(item.createdAt), "d MMMM, yyyy")
            : "N/A"}
        </td>
        <td className="py-1 px-4">{item?.type}</td>
        <td className="py-1 px-4">
          <span
            className={`${
              item?.status === "completed"
                ? "bg-[#EAFFEF] text-[#079D23]"
                : item?.status === "pending"
                ? "bg-[#FFECEC] text-[#9D0707]"
                : "text-[#B5983B] bg-[#FFFBEE]"
            }  rounded-[8px] w-fit px-2 py-1`}
          >
            {item?.status}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <TableComponent
        headers={headers}
        data={transTransData}
        renderRow={renderRow}
      />
      {selectedRow && (
        <Dialog
          open={selectedRow !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedRow(null);
          }}
        >
          <DialogContent className="!rounded-[20px] px-9 overflow-y-scroll scrollbar-hidden max-h-[80vh]">
            <DialogTitle className="text-2xl font-medium text-foundationBlue">
              Transactions
            </DialogTitle>
            <TransDetail selectedRow={selectedRow} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TransTable;
