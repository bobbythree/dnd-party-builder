import { ChangeEvent } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function DropdownInput({ label, options, name, value, onChange }: DropdownProps) {

  return (
    <>
      <label htmlFor={name} className="m-1" >{label}:</label>
      <select
        className="select mb-3 w-[60%]"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >

        {options.map((optionValue) => (
          <option key={optionValue} value={optionValue}>{optionValue}</option>
        ))}
      </select>
    </>

  )
}

