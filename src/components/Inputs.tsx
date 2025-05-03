import DropdownInput from "./DropdownInput";
import TextInput from "./TextInput";

export default function Inputs() {


  return (
    <div className="flex flex-col">
      <TextInput label="Name" placeholder="Choose a name" />
      <DropdownInput
        label="Choose Race"
        options={['Human', 'Elf', 'Half-Elf']}
      />
      <DropdownInput
        label="Choose Class"
        options={['Fighter', 'Druid', 'Bard']}
      />
      <DropdownInput
        label="Choose Alignent"
        options={
          [
            'Lawful Good',
            'Lawful Neutral',
            'Lawful Evil',
            'Neutral Good',
            'Neutral',
            'Neutral Evil',
            'Chaotic Good',
            'Chaotic Neutral',
            'Chaotic Evil',
          ]
        }
      />
    </div>
  )
}

