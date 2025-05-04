import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  partyName: string;
}

export default function Welcome() {
  const [submitForm, setSubmitForm] = useState<boolean>(false);
  const [partyName, setPartyName] = useState<string>('');
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPartyName(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const submittedData: FormData = {
      partyName: partyName,
    }

    setFormData(submittedData);
    setSubmitForm(true);
  }
  return (
    <>
      <h1 className="text-center text-6xl p-15 bg-primary/20">
        DnD Party Builder
      </h1>
      {submitForm ?
        <p className="text-center mt-[20%] text-3xl">Your party's name is: {formData?.partyName}!</p> :
        <>
          <h3 className="text-center mt-[20%] text-3xl">Choose a name for your Party</h3>
          <form className="text-center pt-10" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a Party name"
              className="input input-xl rounded-md input-bordered border-primary/35"
              onChange={handleInputChange}
            />
            <button type="submit" className="btn bg-primary/20 btn-xl rounded-md mx-1,">Submit</button>
          </form>
        </>
      }
    </>
  )
}

