import React, { forwardRef } from "react";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  inputClassname?: string;
  error?: string;
  readOnly?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      type = "text",
      placeholder,
      className,
      inputClassname,
      error,
      onBlur,
      value,
      readOnly,
      onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`mb-4 ${className}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-semibold ">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          {...rest}
          className={`mt-1 w-full h-[50px] ${inputClassname} bg-selectColor placeholder:text-placeholderColor  p-4 rounded-[8px] shadow-sm focus:outline-none focus:border-black text-sm ${
            error ? "border-red-500" : ""
          }`}
        />
        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);

export default InputField;
