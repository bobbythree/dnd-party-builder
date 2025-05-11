import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import DropdownInput from "./DropdownInput";
import TextInput from "./TextInput";
import { Character } from "../models/characters/Character";

// define prop types passed to this component
interface CharacterFormData {
  name: string;
  race: string;
  characterClass: string;
  alignment: string;
  level: string;
}

//component
export default function Inputs() {
  // instantiate useNavigate hook
  const navigate = useNavigate();

  // state variable for formData with default values
  const [formData, setFormData] = useState<CharacterFormData>({
    name: '',
    race: '',
    characterClass: '',
    alignment: '',
    level: '',
  });

  //state variable for form
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // set formData with user input
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  // handle form submit and reset form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: '',
      race: '',
      characterClass: '',
      alignment: '',
      level: '',
    });
    setFormSubmitted(true)
    // instantiate Character class with formData
    // const addedCharacter = new Character(formData.name, formData.race, formData.characterClass, formData.alignment, formData.level);
    // navigate to myparty page and pass state
    // navigate('/my-party', { state: addedCharacter });
  }

  return (
    <>
      {formSubmitted ?
        // TODO: create buttons to add another character or go to myparty
        (<p>create buttons </p>
        ) :
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
      }
    </>
  )
}

