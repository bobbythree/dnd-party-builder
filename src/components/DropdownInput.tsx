import { ChangeEvent } from "react";

// define prop types
interface DropdownProps {
  options: string[];
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function DropdownInput({ options, name, value, placeholder, onChange }: DropdownProps) {
  // conditional text color for placeholder
  const textColorClass = value === "" ? 'text-white/40' : 'text-current';

  return (
    <div className="flex flex-col items-center w-full gap-3  mb-3">
      <select
        className={`select mb-3 w-[60%] ${textColorClass}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled hidden>{placeholder}</option>

        {options.map((optionValue) => (
          <option key={optionValue} value={optionValue}>{optionValue}</option>
        ))}
      </select>
    </div>

  )
}

