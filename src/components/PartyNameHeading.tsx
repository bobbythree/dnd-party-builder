{/* This component displays the PartyName that was entered into the PartyNameForm*/ }

import { useParty } from "../context/PartyContext"

export default function PartyNameHeading() {
  const { party } = useParty();

  return (
    <>
      <h1 className="
        bg-linear-to-b from-warning to-red-800 text-transparent bg-clip-text
        text-center pb-5 text-5xl mt-[22vh]
        ">{party.name || 'Your Party'}
      </h1>
    </>
  )
}

