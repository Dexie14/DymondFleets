import { CloseIcon } from "@/assets/svgComp/General";
import InputField from "../input/InputField";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

type FilterType = {
  title: string;
  placeholder: string;
  nameTag: string;
  setOpen: (value: boolean) => void;
  onApplyFilters?: (value: string) => void;
  resetFilters?: boolean;
};

const InputFilter = ({
  title,
  placeholder,
  nameTag,
  setOpen,
  onApplyFilters,
  resetFilters,
}: FilterType) => {
  const [value, setValue] = useState("");

  // Reset filter value on global reset
  useEffect(() => {
    if (resetFilters) setValue("");
  }, [resetFilters]);

  const handleShowResults = () => {
    onApplyFilters?.(value); // Pass the input value back to parent
    setOpen(false); // Close the filter
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-mediumBlue font-semibold ">{title}</h3>
        <CloseIcon onClick={() => setOpen(false)} className="cursor-pointer" />
      </div>
      <div className="my-5">
        <InputField
          name={nameTag}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          inputClassname="bg-[#EEEEEE] rounded-[0px]"
        />
      </div>
      <div className="flex justify-end">
        <div className="text-sm flex gap-3 items-center ">
          <Button
            onClick={() => setValue("")}
            className="bg-white border rounded-[8px] px-6 py-2 text-textShade hover:text-white"
          >
            Reset
          </Button>
          <Button
            onClick={handleShowResults}
            className="bg-blueShade rounded-[8px] px-6 py-2 text-white"
          >
            Show Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputFilter;
