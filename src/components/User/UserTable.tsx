import TableComponent from "../General/TableComp";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useUsersSelectStore } from "@/store/genericSelectStore";
import UserDetail from "./UserDetail";
import { UserDataItem } from "@/hooks/api/queries/user/useGetUsers";

// Sample data type
// export type UserDataItem = {
//   id: number;
//   name?: string;
//   email?: string;
//   number: string;
//   address: string;
//   status: string;
// };

// const sampleData: UserDataItem[] = [
//   {
//     id: 1,
//     name: "Femi Adebayo",
//     email: "FemiAdebayo@gmail.com",
//     number: "08067624207",
//     address: "089 Kutch Green Apt. 448",
//     status: "Approved",
//   },
//   {
//     id: 2,
//     name: "Femi Adebayo",
//     email: "FemiAdebayo@gmail.com",
//     number: "08067624207",
//     address: "089 Kutch Green Apt. 448",
//     status: "Pending",
//   },
// ];

type UserTableProps = {
  userTableData: UserDataItem[];
};

const UserTable = ({ userTableData }: UserTableProps) => {
  const { selectedItems, addItem, removeItem, selectAll, clearAll } =
    useUsersSelectStore();
  console.log(selectedItems, "selectedItemsUser");

  const [selectedRow, setSelectedRow] = useState<UserDataItem | null>(null);

  const headers = [
    {
      content: (
        <input
          type="checkbox"
          checked={selectedItems.length === userTableData.length}
          onChange={(e) => {
            if (e.target.checked) {
              selectAll(userTableData);
            } else {
              clearAll();
            }
          }}
        />
      ),
    },
    { content: <>NAME</> },
    { content: <>EMAIL</> },
    { content: <>PHONE NUMBER</> },
    { content: <>ADDRESS</> },
    { content: <> STATUS</> },
  ];

  const renderRow = (item: UserDataItem, index: number) => {
    const handleRowClick = (row: UserDataItem) => {
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
        <td className="py-1 px-4"> {item?.firstName} {item?.lastName}</td>
        <td className="py-1 px-4"> {item?.email}</td>
        <td className="py-1 px-4">{item?.phoneNumber}</td>
        <td className="py-1 px-4">expected address</td>
        <td className="py-1 px-4">
          <span
            className={`${
              item?.userRegistrationCompleted === true
                ? "bg-[#EAFFEF] text-[#079D23]"
                : item?.userRegistrationCompleted === false
                ? "bg-[#FFECEC] text-[#9D0707]"
                : "text-[#B5983B] bg-[#FFFBEE]"
            }  rounded-[8px] w-fit px-2 py-1`}
          >
            {item?.userRegistrationCompleted ? "True": "False"}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <TableComponent
        headers={headers}
        data={userTableData}
        renderRow={renderRow}
      />
      {selectedRow && (
        <Dialog
          open={selectedRow !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedRow(null);
          }}
        >
          <DialogContent
            style={{
              maxWidth: "60vw",
            }}
            className="!rounded-[20px] px-9 overflow-y-scroll scrollbar-hidden max-h-[80vh]"
          >
            <DialogTitle className="text-2xl font-medium text-foundationBlue">
              User Details
            </DialogTitle>
            <UserDetail selectedRow={selectedRow} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default UserTable;
