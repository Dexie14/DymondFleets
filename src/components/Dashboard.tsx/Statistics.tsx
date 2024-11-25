import StatsLineChart from "./charts/StatsLineChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Statistics = () => {
  return (
    <div className=" bg-white rounded-[13px] py-6 px-6 w-full ">
      <aside className="flex gap-5 items-center justify-between mb-5">
        <h4 className="text-xl font-semibold">Sales Details</h4>
        <Select>
          <SelectTrigger className="w-fit text-[#2B303466] rounded-[4px] bg-transparent border border-borderColor h-[28px]">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jan">January</SelectItem>
            <SelectItem value="feb">February</SelectItem>
            <SelectItem value="mar">March</SelectItem>
          </SelectContent>
        </Select>
      </aside>
      <section>
        <StatsLineChart />
      </section>
    </div>
  );
};

export default Statistics;
