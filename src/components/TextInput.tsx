interface TextInputProps {
  label: string;
  placeholder?: string;
}

export default function TextInput({ label, placeholder }: TextInputProps) {
  return (
    <>
      <label className="input">
        <span className="label">{label}</span>
        <input type="text" placeholder={placeholder} />
      </label>
    </>
  )
}

