import { ExportIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ExportDataType<T> = {
  selectedItems?: T[];
  allData?: T[];
};

const Export = <T,>({ selectedItems, allData }: ExportDataType<T>) => {
  console.log(selectedItems, "selectedItemstesttt");

  const ExportSelected = selectedItems && selectedItems?.length > 0 && selectedItems
  const ExportAll = allData && allData?.length > 0 && allData
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-deepYellow rounded-[4px] w-[100px] h-[40px] text-sm font-medium text-foundationWhite">
            <div className="mr-1">
              <ExportIcon />
            </div>
            Export
          </Button>
        </DialogTrigger>
        <DialogContent className="!rounded-[24px] ">
          <DialogTitle className="text-2xl font-medium text-foundationBlue">
            Download
          </DialogTitle>
          <section className="w-full flex flex-col space-y-5">
            <Button
              disabled={!ExportSelected}
              className={`${
                ExportSelected ? "bg-blueShade" : "bg-borderColor"
              } text-foundationWhite text-sm font-medium rounded-[12px] h-[50px]`}
            >
              Download Selected Data
            </Button>
            <Button
              disabled={!ExportAll}
              className={`${
                ExportAll ? "bg-blueShade" : "bg-borderColor"
              } text-foundationWhite text-sm font-medium rounded-[12px] h-[50px] disabled:bg-borderColor`}
            >
              Download All Data
            </Button>
          </section>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Export;
