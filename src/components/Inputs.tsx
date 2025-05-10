import { useState, ChangeEvent, FormEvent } from "react";
import DropdownInput from "./DropdownInput";
import TextInput from "./TextInput";
import { TestClass } from "../models/characters/TestClass";

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
    setFormData({
      name: '',
      race: '',
      characterClass: '',
      alignment: '',
    });
    //test character
    const testCharacter = new TestClass(formData.name, formData.race, formData.characterClass, formData.alignment);
    console.log(testCharacter);

  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-lg">
        <TextInput
          label="Character"
          placeholder="Choose a name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <DropdownInput
          options={['Human', 'Elf', 'Half-Elf']}
          name="race"
          value={formData.race}
          placeholder="Choose a Race"
          onChange={handleChange}
        />
        <DropdownInput
          options={['Fighter', 'Druid', 'Bard']}
          name="characterClass"
          value={formData.characterClass}
          placeholder="Choose a Class"
          onChange={handleChange}
        />
        <DropdownInput
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
          placeholder="Choose an Alignment"
          onChange={handleChange}
        />
        <button className="btn bg-primary/20 mt-5 w-[30%]" type="submit">Add to Party</button>
      </form>
    </div>
  )
}

