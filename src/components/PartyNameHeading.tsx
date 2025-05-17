{/* This component displays the PartyName that was entered into the PartyNameForm*/ }

import { usePartyName } from "../context/PartyNameContext"

export default function PartyNameHeading() {
  const { partyName } = usePartyName();

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

