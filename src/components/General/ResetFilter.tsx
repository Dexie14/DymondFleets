import { ResetIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";

const ResetFilter = ({
  onClick,
  isActive,
}: {
  onClick?: () => void;
  isActive?: boolean;
}) => {
  return (
    <div>
      <Button
        onClick={onClick}
        className={`${
          isActive ? "bg-blueShade text-white" : "bg-border text-textShade"
        } rounded-[4px] w-[120px] h-[40px] text-sm font-medium hover:text-white`}
      >
        <div className="mr-1">
          <ResetIcon />
        </div>
        Reset Filter
      </Button>
    </div>
  );
};

export default ResetFilter;
