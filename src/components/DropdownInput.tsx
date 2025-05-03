interface DropdownLabel {
  label: string
}

export default function DropdownInput({ label }: DropdownLabel) {


  return (
    <>
      <label className="select">
        <span className="label">{label}</span>
        <select>
          <option>Fighter</option>
          <option>Druid</option>
          <option>Bard</option>
        </select>
      </label>
    </>
  )
}

