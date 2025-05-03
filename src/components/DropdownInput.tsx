interface DropdownProps {
  label: string;
  options: string[];
}

export default function DropdownInput({ label, options }: DropdownProps) {

  return (
    <select className="select" defaultValue={label}>
      <option disabled={true}>{label}</option>
      {options.map((option, i) => (
        <option key={i}>{option}</option>
      ))}
    </select>
  )
}

