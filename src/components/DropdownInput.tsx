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
      <label htmlFor={name} className="m-3" >{label}:</label>
      <select
        className="select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >

        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </>

  )
}

