import { TransDataItem } from "@/hooks/api/queries/transaction/useGetTrans";
import { format, parseISO } from "date-fns";
const TransDetail = ({ selectedRow }: { selectedRow: TransDataItem }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">
          Transaction ID
        </h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?._id}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">
          Amount Paid (NGN)
        </h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.amount}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">
          Payment Method
        </h5>
        <p className="text-foundationBlue font-medium text-sm">
          expected payment
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Date Created</h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow.createdAt
            ? format(parseISO(selectedRow.createdAt), "d MMMM, yyyy")
            : "N/A"}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">
          Transaction Type
        </h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.type}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Status</h5>
        <p
          className={`${
            selectedRow?.status === "completed"
              ? "bg-[#EAFFEF] text-[#079D23]"
              : selectedRow?.status === "pending"
              ? "bg-[#FFECEC] text-[#9D0707]"
              : "text-[#B5983B] bg-[#FFFBEE]"
          } text-foundationBlue font-medium text-sm   rounded-[8px] w-fit px-2 py-1`}
        >
          {selectedRow?.status}
        </p>
      </div>
    </div>
  );
};

export default TransDetail;
