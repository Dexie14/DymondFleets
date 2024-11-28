import { CloseIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";
import { v4 } from "uuid";

type FilterType = {
  title: string;
  setOpen: (value: boolean) => void;
  listData: string[];
};

const CheckBoxFilter = ({ title, setOpen, listData }: FilterType) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-mediumBlue font-semibold">{title}</h3>
        <CloseIcon onClick={() => setOpen(false)} className="cursor-pointer" />
      </div>
      <div className="my-5 text-textShade space-y-4">
        {listData?.map((item: string) => {
          return (
            <div key={v4()} className="flex items-center gap-4">
              <input type="checkBox" />
              {item?.includes("Online") ||
              item?.includes("Offline") ||
              item?.includes("In-transit") ||
              item?.includes("No assigned Order") ? (
                <p
                  className={`${
                    item === "Online"
                      ? "bg-[#EAFFEF] text-[#079D23]"
                      : item === "Offline"
                      ? "bg-[#FFECEC] text-[#9D0707]"
                      : item === "In-transit"
                      ? "bg-[#E6E8F3] text-blueShade"
                      : "text-[#B5983B] bg-[#FFFBEE]"
                  } flex items-center justify-center gap-2 rounded-[8px] w-fit px-2 py-1`}
                >
                  <div
                    className={`h-3 w-3 ${
                      item === "Online"
                        ? "bg-[#02B022]"
                        : item === "In-transit"
                        ? "bg-blueShade"
                        : item === "Offline"
                        ? "bg-[#9D0707]"
                        : "bg-[#B5983B]"
                    } rounded-full `}
                  />
                  {item}
                </p>
              ) : (
                <p className="font-medium ">{item}</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <div className="text-sm flex gap-3 items-center ">
          <Button className="bg-white border rounded-[8px] px-6 py-2 text-textShade hover:text-white">
            Reset
          </Button>
          <Button className="bg-blueShade rounded-[8px] px-6 py-2 text-white">
            Show Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxFilter;
