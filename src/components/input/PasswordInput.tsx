import React, { forwardRef, useState } from "react";
import { HidePassword, TogglePassword } from "@/assets/svgComp/General";

interface InputProps {
  label?: string;
  name: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  passswordClassname?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      placeholder,
      className,
      error,
      passswordClassname,
      onBlur,
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [inputType, setInputType] = useState("password");

    const togglePassword = () => {
      setInputType((prevInputType) =>
        prevInputType === "password" ? "text" : "password"
      );
    };

    return (
      <div className={`${className}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-semibold ">
            {label}
          </label>
        )}

        <div
          className={`mt-1 flex p-4 rounded-[6px] bg-adminbg ${passswordClassname} `}
        >
          <input
            id={name}
            name={name}
            type={inputType}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            {...rest}
            className={` w-full placeholder:text-placeholderColor bg-transparent hover:bg-red-500 focus:outline-none text-sm `}
          />
          {inputType === "password" ? (
            <div onClick={togglePassword}>
              <HidePassword />
            </div>
          ) : (
            <div onClick={togglePassword}>
              <TogglePassword />
            </div>
          )}
        </div>
        {error && (
          <span className="text-sm text-blowSecondary mt-1">{error}</span>
        )}
      </div>
    );
  }
);

export default PasswordInput;