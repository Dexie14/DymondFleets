import { ExportIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";

const Export = () => {
  return (
    <div>
      <Button className="bg-deepYellow rounded-[4px] w-[100px] h-[40px] text-sm font-medium text-foundationWhite">
        <div className="mr-1">
          <ExportIcon />
        </div>
        Export
      </Button>
    </div>
  );
};

export default Export;
