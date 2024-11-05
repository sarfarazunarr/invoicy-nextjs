import React from 'react';

const Input = ({
  label,
  name,
  inputType = "text",
  placeholder,
  value,
  onchange,
}: {
  label?: string;
  name: string;
  inputType?: "text" | "number";
  placeholder: string;
  value?: string | number;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col justify-start">
      {label && (
        <label
          className="text-white text-left font-semibold text-[18px] pt-3 pb-2"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        onChange={onchange}
        placeholder={placeholder}
        type={inputType}
        className="px-4 py-2 rounded-md border border-gray-400 text-white bg-transparent outline-none focus:border-blue-400 transition-colors duration-200 placeholder:text-gray-400"
        value={value}
      />
    </div>
  );
};

export default Input;