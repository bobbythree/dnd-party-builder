import { useState, FormEvent, ChangeEvent } from "react"

interface PartyNameFormProps {
  onSubmitPartyName: (name: string) => void;
}

export default function PartyNameForm({ onSubmitPartyName }: PartyNameFormProps) {

  const [partyName, setPartyName] = useState<string>('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPartyName(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Call the function passed from the parent, sending the partyName up
    onSubmitPartyName(partyName);
  }
  return (
    <>
      <h3 className="text-center mt-[20%] text-3xl">Choose a name for your Party</h3>
      <form className="text-center pt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Party name"
          className="input input-xl input-bordered border-primary/35 pl-8"
          onChange={handleInputChange}
          value={partyName} // Make the input a controlled component
        />
        <button type="submit" className="btn bg-primary/20 btn-xl mx-1,">Submit</button>
      </form>
    </>
  )
}

