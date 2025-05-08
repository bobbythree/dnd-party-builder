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
      <label htmlFor={name} className="input">
        <span className="label text-neutral-100">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          id={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  )
}

