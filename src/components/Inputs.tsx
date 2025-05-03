import DropdownInput from "./DropdownInput";

export default function Inputs() {


  return (
    <div className="flex flex-col">
      <DropdownInput label="Select Class" options={['Fighter', 'Druid', 'Bard']} />
    </div>
  )
}

