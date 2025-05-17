/* custom form component for user to input a party name. Currently used in Welcome.tsx */

import { useState, FormEvent, ChangeEvent } from "react"
import { useParty } from "../context/PartyContext";

export default function PartyNameForm() {

  // assign custom usePartyName hook
  const { setPartyName } = useParty();

  // state variables
  const [localPartyName, setLocalPartyName] = useState<string>('');

  // set local party name with user input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalPartyName(e.target.value);
  }

  // form submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPartyName(localPartyName); // save local party name state to custom hook
    setLocalPartyName(''); //clear the input
  }
  return (
    <>
      <h3 className="text-center mt-[30vh] text-3xl">Choose a name for your Party</h3>
      <form className="text-center pt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Party name"
          className="input input-xl input-bordered border-primary/35 pl-8"
          onChange={handleInputChange}
          value={localPartyName}
        />
        <button type="submit" className="btn bg-primary/20 btn-xl mx-1,">Submit</button>
      </form>
    </>
  )
}

