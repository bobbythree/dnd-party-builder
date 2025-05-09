import { useLocation } from "react-router-dom"

interface LocationState {
  partyName: string;
}

export default function PartyNameHeading() {
  const location = useLocation();
  const state = location.state as LocationState;
  const partyName = state?.partyName;

  return (
    <>
      <h1 className="
        bg-linear-to-b from-warning to-red-800 text-transparent bg-clip-text
        text-center pb-5 text-5xl mt-[22vh]
        ">{partyName || 'Your Party'}
      </h1>
      <h3 className="text-center pb-10 text-lg text-primary/60">Add a Character to the Party</h3>
    </>
  )
}

