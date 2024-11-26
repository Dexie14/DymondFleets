import { DropdownIcon } from "@/assets/svgComp/General";

const FilterSelect = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="flex items-center gap-3 px-3 py-2 rounded-[4px] border text-textShade text-sm font-medium border-border">
        {title} <DropdownIcon />
      </div>
    </div>
  );
};

export default FilterSelect;
