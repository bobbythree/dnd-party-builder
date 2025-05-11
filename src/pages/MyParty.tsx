import { useLocation } from "react-router-dom"

export default function MyParty() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <div className="overflow-x-auto">
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
            <tr>
              <th></th>
              <td>{state.name}</td>
              <td>{state.race}</td>
              <td>{state.characterClass}</td>
              <td>{state.alignment}</td>
              <td>{state.level}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

