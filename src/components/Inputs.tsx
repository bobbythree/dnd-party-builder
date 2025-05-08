import DropdownInput from "./DropdownInput";
import TextInput from "./TextInput";

export default function Inputs() {


  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="pb-5">Add a Character</h3>
      <form className="flex flex-col items-center">
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
        <button className="btn bg-primary/20 mt-5 w-[50%]" type="submit">Add to Party</button>
      </form>
    </div>
  )
}

