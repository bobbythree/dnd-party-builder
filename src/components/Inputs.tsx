import { useState, ChangeEvent, FormEvent } from "react";
import DropdownInput from "./DropdownInput";
import TextInput from "./TextInput";

interface CharacterFormData {
  name: string;
  race: string;
  characterClass: string;
  alignment: string;
}

export default function Inputs() {
  const [formData, setFormData] = useState<CharacterFormData>({
    name: '',
    race: '',
    characterClass: '',
    alignment: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-lg">
        <TextInput
          label="Name"
          placeholder="Choose a name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <DropdownInput
          label="Race"
          options={['Human', 'Elf', 'Half-Elf']}
          name="race"
          value={formData.race}
          onChange={handleChange}
        />
        <DropdownInput
          label="Class"
          options={['Fighter', 'Druid', 'Bard']}
          name="characterClass"
          value={formData.characterClass}
          onChange={handleChange}
        />
        <DropdownInput
          label="Alignment"
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
          name="alignment"
          value={formData.alignment}
          onChange={handleChange}
        />
        <button className="btn bg-primary/20 mt-5 w-[30%]" type="submit">Add to Party</button>
      </form>
    </div>
  )
}

