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
    <select
      className="select"
      id={name}
      defaultValue={label}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option disabled={true}>{label}</option>
      {options.map((option, i) => (
        <option key={i}>{option}</option>
      ))}
    </select>
  )
}

