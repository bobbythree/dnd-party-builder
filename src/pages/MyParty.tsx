import PartyNameHeading from "../components/PartyNameHeading";
import { useParty } from "../context/PartyContext";

export default function MyParty() {

  const { party } = useParty();

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
            {party.members.map((character, i) => (
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

