import { ChangeEvent } from "react";

interface TextInputProps {
  label: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ label, placeholder, name, value, onChange }: TextInputProps) {
  return (
    <div className="flex flex-col items-center w-full gap-3 mb-3">
      <label htmlFor={name} className="self-start pl-27">{label}:</label>
      <input
        className="input mb-3 w-[60%]"
        name={name}
        type="text"
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}

