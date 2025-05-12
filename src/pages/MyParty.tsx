import { useLocation } from "react-router-dom"
import PartyNameHeading from "../components/PartyNameHeading";

interface CharacterFormData {
  name: string;
  race: string;
  characterClass: string;
  alignment: string;
  level: string;
}

export default function MyParty() {
  const location = useLocation();
  const characters = location.state as CharacterFormData[] | null || [];

  return (
    <>
      <PartyNameHeading />
      <div className="overflow-x-auto mt-5">
        <table className="table table-lg">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Race</th>
              <th>Class</th>
              <th>Alignment</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, i) => (
              <tr key={i}>
                <th></th>
                <td>{character.name}</td>
                <td>{character.race}</td>
                <td>{character.characterClass}</td>
                <td>{character.alignment}</td>
                <td>{character.level}</td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

