import { ResetIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";

const ResetFilter = () => {
  return (
    <div>
      <Button className="bg-border rounded-[4px] w-[120px] h-[40px] text-sm font-medium text-textShade hover:text-white">
        <div className="mr-1">
          <ResetIcon />
        </div>
        Reset Filter
      </Button>
    </div>
  );
};

export default ResetFilter;
