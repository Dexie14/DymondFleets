import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DriverDataItem } from "@/hooks/api/queries/drivers/useDriver";
import { Button } from "../ui/button";
import useApproveDriver from "@/hooks/api/mutation/drivers/useApproveDriver";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import useRejectDriver from "@/hooks/api/mutation/drivers/useRejectDriver";
import { v4 } from "uuid";

const NewDriverDetail = ({
  selectedRow,
  setCloseDialog,
}: {
  selectedRow: DriverDataItem;
  setCloseDialog: () => void;
}) => {
  const ApproveDriver = useApproveDriver();
  const RejectDriver = useRejectDriver();
  const queryClient = useQueryClient();

  const [rejectText, setRejectText] = useState<string>("");

  const submitApproval = () => {
    ApproveDriver.mutate(
      {
        id: selectedRow?._id,
      },
      {
        onSuccess: (response: any) => {
          toast.success(response?.data?.message);

          queryClient.invalidateQueries({
            queryKey: ["getDrivers"],
          });
          setCloseDialog();
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message ?? "An error occured");
          setCloseDialog();
        },
      }
    );
  };

  const submitRejection = () => {
    RejectDriver.mutate(
      {
        id: selectedRow?._id,
        reason: rejectText,
      },
      {
        onSuccess: (response: any) => {
          toast.success(response?.data?.message);

          queryClient.invalidateQueries({
            queryKey: ["getDrivers"],
          });
          setCloseDialog();
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message ?? "An error occured");
          setCloseDialog();
        },
      }
    );
  };

  return (
    <div>
      <h3 className="font-bold text-sm text-mediumGrey mb-1 mt-6">
        Driver’s profile photo
      </h3>
      <aside className="flex items-center gap-6">
        <Avatar className="w-36 h-36 rounded-none">
          <AvatarImage src={selectedRow?.profilePicUrl} />
          <AvatarFallback>
            {selectedRow?.firstName[0]} {selectedRow?.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <Button
            onClick={submitApproval}
            className="bg-greenBg text-textGreen h-8 rounded-[8px] hover:bg-greenBg"
          >
            {ApproveDriver.isPending ? "Approving..." : "Approve"}
          </Button>

          <Dialog>
            <DialogTrigger>
              <Button className="bg-rebBg text-textRed h-8 rounded-[8px] hover:bg-rebBg">
                Reject
              </Button>
            </DialogTrigger>
            <DialogContent
              style={{
                maxWidth: "60vw",
              }}
              className="!rounded-[30px] p-10 "
            >
              <DialogTitle className="text-2xl mb-4 font-medium text-foundationBlue">
                You are about to reject this driver
              </DialogTitle>
              <section>
                <h3 className="text-xl font-semibold text-[#555568]">
                  Add reasons for rejecting
                </h3>
                <textarea
                  onChange={(e) => setRejectText(e.target.value)}
                  rows={5}
                  className="bg-lightGrey rounded-[20px] w-full my-5 p-5  focus:ring-1 focus:ring-borderColor focus:outline-none"
                />
                <div className="flex gap-3 items-center">
                  <Button
                    onClick={setCloseDialog}
                    className="bg-rebBg w-[140px] text-textRed h-8 rounded-[8px] hover:bg-rebBg"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={submitRejection}
                    className="bg-foundationBlue w-[140px] text-white h-8 rounded-[8px] hover:bg-foundationBlue"
                  >
                    {RejectDriver.isPending ? "Sending..." : "Send"}
                  </Button>
                </div>
              </section>
            </DialogContent>
          </Dialog>
        </div>
      </aside>

      <section>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">First Name</h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.firstName}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">Last Name</h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.lastName}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">Email</h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.email}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Phone Number
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.mobileNumber}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">Address</h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.address}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle Type
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleType}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle Model
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleModel}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle registration number
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleRegNo}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle Insurance
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleInsurance}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle Color
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleColor}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle Capacity
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleCapacity}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle Year
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleYear}
          </p>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border">
          <h5 className="text-mediumGrey text-sm font-semibold">
            Vehicle Make
          </h5>
          <p className="text-foundationBlue font-medium text-sm">
            {selectedRow?.vehicleMake}
          </p>
        </div>
        <section>
          <div className="py-3 border-b border-border">
            <h5 className="text-mediumGrey text-sm font-semibold">
              Vehicle Documents
            </h5>
            <div className="my-2">
              {selectedRow?.verificationDocumentUrls?.map((item) => {
                return (
                  <div key={v4()}>
                    <img src={item} alt="car document" className="my-2" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default NewDriverDetail;
