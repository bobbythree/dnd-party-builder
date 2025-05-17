/* This component is a custom TextInput, currently used in Inputs.tsx  */

import { ChangeEvent } from "react";

// define prop types 
interface TextInputProps {
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ placeholder, name, value, onChange }: TextInputProps) {
  return (
    <div className="flex flex-col items-center w-full gap-3 mb-3">
      <input
        className="input mb-3 w-[60%]"
        name={name}
        type="text"
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
    </div>
  )
}

