interface TextInputProps {
  label: string;
  placeholder?: string;
}

export default function TextInput({ label, placeholder }: TextInputProps) {
  return (
    <>
      <label className="input">
        <span className="label text-neutral-100">{label}</span>
        <input type="text" placeholder={placeholder} />
      </label>
    </>
  )
}

