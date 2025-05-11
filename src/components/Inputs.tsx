import { useState, ChangeEvent, FormEvent } from "react";
import DropdownInput from "./DropdownInput";
import TextInput from "./TextInput";
import { TestClass } from "../models/characters/TestClass";

interface CharacterFormData {
  name: string;
  race: string;
  characterClass: string;
  alignment: string;
  level: string;
}

export default function Inputs() {
  const [formData, setFormData] = useState<CharacterFormData>({
    name: '',
    race: '',
    characterClass: '',
    alignment: '',
    level: '',
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
      level: '',
    });
    //test character
    const testCharacter = new TestClass(formData.name, formData.race, formData.characterClass, formData.alignment, formData.level);
    console.log(testCharacter);

  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-lg">
        <TextInput
          name="name"
          placeholder="Character name"
          value={formData.name}
          onChange={handleChange}
        />
        <DropdownInput
          name="race"
          options={['Human', 'Elf', 'Half-Elf']}
          value={formData.race}
          placeholder="Character Race"
          onChange={handleChange}
        />
        <DropdownInput
          name="characterClass"
          options={['Fighter', 'Druid', 'Bard']}
          value={formData.characterClass}
          placeholder="Character Class"
          onChange={handleChange}
        />
        <DropdownInput
          name="alignment"
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
          value={formData.alignment}
          placeholder="Character Alignment"
          onChange={handleChange}
        />
        <DropdownInput
          name="level"
          options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          value={formData.level}
          placeholder="Character Level"
          onChange={handleChange}
        />
        <button className="btn bg-primary/20 mt-5 w-[30%]" type="submit">Add to Party</button>
      </form>
    </div>
  )
}

