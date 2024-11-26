import { SearchIcon } from "@/assets/svgComp/General";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const SearchInputComp = ({
  placeholder = "Search",
  onChange,
  onClick,
  className,
  icon,
  inputClassName,
}: SearchInputProps) => {
  return (
    <div
      className={`flex items-center text-[#9295AB] bg-[#F5F6FA] rounded-[19px] p-4 h-[38px] w-[388px] focus-within:border-[#D5D5D5] focus-within:outline-none focus-within:border ${className}`}
    >
      {/* Search Icon */}
      {!icon && (
        <div className="mr-2">
          <SearchIcon />
        </div>
      )}

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={`flex-grow bg-transparent outline-none placeholder-[#252C58] text-[#202224] text-sm font-light w-full ${inputClassName}`}
      />

      {icon && <div className="ml-2">{icon}</div>}
    </div>
  );
};

export default SearchInputComp;
