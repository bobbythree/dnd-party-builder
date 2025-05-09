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
    <>
      <label htmlFor={name} className="m-1">{label}:</label>
      <input
        className="input mb-3 w-[60%]"
        name={name}
        type="text"
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

