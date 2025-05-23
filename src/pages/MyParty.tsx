import PartyNameHeading from "../components/PartyNameHeading";
import { useParty } from "../context/PartyContext";
import { FaTrashCan } from "react-icons/fa6";

export default function MyParty() {

  const { getPartyMembers, deleteMember } = useParty();
  const characters = getPartyMembers();

  const handleDelete = (memberId: string) => {
    deleteMember(memberId)
  }

  return (
    <>
      <PartyNameHeading />
      <div className="overflow-x-auto mt-5 px-5 flex justify-center items-center">
        <table className="table md:table-lg table-xs">
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
                <td>
                  <button className="btn bg-base-100 border-none" onClick={() => handleDelete(character.id)}><FaTrashCan style={{}} /></button>

                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

