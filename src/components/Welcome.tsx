/* This component is rendered to the HomePage. 
 * It displays the partyNameForm for user to input a party name.
 * Once submitted, displays options to confirm name or pick a new name.
 * Upon confirming name - navigate to add-character page.
 * */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PartyNameForm from "./PartyNameForm";
import Button from "./Button";
import { useParty } from "../context/PartyContext";




export default function Welcome() {
  // state variables
  const [submitForm, setSubmitForm] = useState<boolean>(false);

  // instantiate useNavigate hook
  const navigate = useNavigate();

  // assign pustom hook
  const { party, setName } = useParty()

  useEffect(() => {
    if (party.name && party.name.trim() !== '') {
      setSubmitForm(true);
    } else {
      setSubmitForm(false);
    }
  }, [party.name]);

  //handler for 'go with this name' btn
  const handleConfirmPartyName = () => {
    navigate('./add-character');
  }

  //handler for 'pick a new name' btn
  const handlePickNewName = () => {
    setName('');
  }

  return (
    <>
      {submitForm ?
        <>
          <p
            className=
            "text-center mt-[30vh] md:text-3xl text-xl">
            Your party's name is:&nbsp;
            <span className=
              "bg-linear-to-b from-warning to-red-800 text-transparent bg-clip-text">
              {party.name}
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
