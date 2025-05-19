{/* This component displays the PartyName that was entered into the PartyNameForm*/ }

import { useParty } from "../context/PartyContext"

export default function PartyNameHeading() {
  // destructure getter method
  const { getPartyName } = useParty();
  // call getter method to get current party name
  const partyName = getPartyName();

  return (
    <>
      <h1 className="
        bg-linear-to-b from-warning to-red-800 text-transparent bg-clip-text
        text-center pb-5 md:text-5xl text-3xl mt-[22vh]
        ">{partyName || 'Your Party'}
      </h1>
    </>
  )
}

