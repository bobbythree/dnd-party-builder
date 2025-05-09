import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PartyNameForm from "./PartyNameForm";
import PartyNameButton from "./PartyNameButton";


interface PartyFormData {
  partyName: string;
}

export default function Welcome() {
  const [submitForm, setSubmitForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<PartyFormData | null>(null);
  const navigate = useNavigate();

  // this function gets passed to child (PartyNameForm.tsx)
  const handlePartyNameSubmit = (name: string) => {
    const submittedData: PartyFormData = {
      partyName: name,
    }
    setFormData(submittedData);
    setSubmitForm(true);
  }

  const handleConfirmPartyName = () => {
    navigate('./add-character', { state: { partyName: formData?.partyName } })
  }

  return (
    <>
      {submitForm ?
        <>
          <p
            className=
            "text-center mt-[30vh] text-3xl">
            Your party's name is:&nbsp;
            <span className=
              "bg-linear-to-b from-warning to-red-800 text-transparent bg-clip-text">
              {formData?.partyName}
            </span>
          </p>
          <div className="flex justify-center pt-8">
            <PartyNameButton
              btnText="Go with this name"
              clickHandler={handleConfirmPartyName}
            />
            <PartyNameButton
              btnText="Pick a new name"
              clickHandler={() => setSubmitForm(false)} //go back to form
            />
          </div>
        </>
        : //else
        //render form component and pass handler function
        <PartyNameForm onSubmitPartyName={handlePartyNameSubmit} />

      }
    </>
  )
}
