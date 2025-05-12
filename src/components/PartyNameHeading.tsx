import { useLocation } from "react-router-dom"

// define state types passed from Welcome.tsx
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
    </>
  )
}

