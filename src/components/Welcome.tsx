import { useState } from "react";

import PartyNameForm from './PartyNameForm';

interface PartyFormData {
  partyName: string;
}

export default function Welcome() {
  const [submitForm, setSubmitForm] = useState<boolean>(false);

  const [formData, setFormData] = useState<PartyFormData | null>(null);

  const handlePartyNameSubmit = (name: string) => {
    const submittedData: PartyFormData = {
      partyName: name,
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
        <p className="text-center mt-[20%] text-3xl">Your party's name is: {formData?.partyName}</p>
        : //else
        <PartyNameForm onSubmitPartyName={handlePartyNameSubmit} />
      }
    </>
  )
}
