import user from "@/assets/user.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RidesHistoryTable from "./RidesHistoryTable";
import PaymentHistoryTable from "./PaymentHistoryTable";
import { UserDataItem } from "@/hooks/api/queries/user/useGetUsers";

const UserDetail = ({ selectedRow }: { selectedRow: UserDataItem }) => {
  return (
    <div>
      <aside className="flex items-center gap-6">
        <Avatar className="w-36 h-36 rounded-none">
          <AvatarImage src={user} />
          <AvatarFallback> {selectedRow?.firstName[0]} {selectedRow?.lastName[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h5 className="text-textShade text-lg font-semibold mb-4">
            {selectedRow?.firstName} {selectedRow?.lastName}
          </h5>
          <p
            className={`${
              selectedRow?.userRegistrationCompleted === true
                ? "bg-[#EAFFEF] text-[#079D23]"
                : selectedRow?.userRegistrationCompleted === false
                ? "bg-[#FFECEC] text-[#9D0707]"
                : "text-[#B5983B] bg-[#FFFBEE]"
            } font-medium text-sm flex items-center justify-center gap-2    rounded-[8px] w-fit px-2 py-1`}
          >
            <div
              className={`h-3 w-3 ${
                selectedRow?.userRegistrationCompleted === true
                  ? "bg-[#079D23]"
                  : " bg-[#9D0707]"
              } rounded-full `}
            />
            {selectedRow?.userRegistrationCompleted ? "True" : "False"}
          </p>
        </div>
      </aside>
      <h3 className="font-bold text-xl text-foundationBlue mb-2 mt-6">
        User Details
      </h3>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Email</h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.email}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Phone Number</h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.phoneNumber}
        </p>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-border">
        <h5 className="text-mediumGrey text-sm font-semibold">Address</h5>
        <p className="text-foundationBlue font-medium text-sm">
          {selectedRow?.userlocation?.address}
        </p>
      </div>
      <section className="my-5">
        <Tabs defaultValue="Rides" className="">
          <TabsList className=" flex justify-between border-b h-auto border-borderColor bg-transparent">
            <div className="flex gap-x-5">
              <TabsTrigger
                className="data-[state=active]:shadow-custom bg-transparent data-[state=active]:border-b data-[state=active]:border-blueShade  data-[state=active]:text-blueShade text-mediumGrey text-sm font-medium"
                value="Rides"
              >
                Rides History
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:shadow-custom bg-transparent data-[state=active]:border-b data-[state=active]:border-blueShade data-[state=active]:text-blueShade text-mediumGrey text-sm font-medium"
                value="Payment"
              >
                Payment History
              </TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="Rides" className="">
            <h3 className="font-bold text-xl text-foundationBlue my-3">
              Rides History
              <div className=" bg-[#E6E6E6] rounded-[12px] my-5">
                <RidesHistoryTable />
              </div>
            </h3>
          </TabsContent>
          <TabsContent value="Payment" className="">
            <h3 className="font-bold text-xl text-foundationBlue my-3">
              Payment History
              <div className=" bg-[#E6E6E6] rounded-[12px] my-5">
                <PaymentHistoryTable />
              </div>
            </h3>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default UserDetail;
