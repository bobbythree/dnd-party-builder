/* This component is rendered to the HomePage. 
 * It displays the partyNameForm for user to input a party name.
 * Once submitted, displays options to confirm name or pick a new name.
 * Upon confirming name - navigate to add-character page.
 * */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PartyNameForm from "./PartyNameForm";
import Button from "./Button";
import { usePartyName } from "../context/PartyNameContext";




export default function Welcome() {
  // state variables
  const [submitForm, setSubmitForm] = useState<boolean>(false);

  // instantiate useNavigate hook
  const navigate = useNavigate();

  const { partyName, setPartyName } = usePartyName()

  useEffect(() => {
    if (partyName && partyName.trim() !== '') {
      setSubmitForm(true);
    } else {
      setSubmitForm(false);
    }
  }, [partyName]);

  //handler for 'go with this name' btn
  const handleConfirmPartyName = () => {
    navigate('./add-character');
  }

  //handler for 'pick a new name' btn
  const handlePickNewName = () => {
    setPartyName('');
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
              {partyName}
            </span>
          </p>
          <div className="flex justify-center pt-8">
            <Button
              btnText="Go with this name"
              clickHandler={handleConfirmPartyName}
            />
            <Button
              btnText="Pick a new name"
              clickHandler={handlePickNewName} //go back to form
            />
          </div>
        </>
        : //else
        //render form component
        <PartyNameForm />

      }
    </>
  )
}
