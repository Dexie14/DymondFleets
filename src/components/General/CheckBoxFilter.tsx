import { CloseIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";
import { v4 } from "uuid";
import { useEffect, useState } from "react";

type FilterType = {
  title: string;
  setOpen: (value: boolean) => void;
  listData: string[];
  onApplyFilters?: (selectedFilters: string[]) => void;
  resetFilters?: boolean; 
};

const CheckBoxFilter = ({ title, setOpen, listData, onApplyFilters,resetFilters  }: FilterType) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleCheckboxChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(selectedFilters); 
    }
    setOpen(false); 
  };

  const handleResetFilters = () => {
    setSelectedFilters([]); 
  };

  useEffect(() => {
    setSelectedFilters([]);
  }, [resetFilters]);

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
              <input
                type="checkBox"
                checked={selectedFilters.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
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
          <Button
            onClick={handleResetFilters}
            className="bg-white border rounded-[8px] px-6 py-2 text-textShade hover:text-white"
          >
            Reset
          </Button>
          <Button
            onClick={handleApplyFilters}
            className="bg-blueShade rounded-[8px] px-6 py-2 text-white"
          >
            Show Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxFilter;
