import { useState, FormEvent } from "react";

export default function Welcome() {
  const [submitForm, setSubmitForm] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitForm(true);
  }

  return (
    <>
      <h1 className="text-center text-6xl p-15 bg-neutral">
        DnD Party Builder
      </h1>
      {submitForm ?

        <p>Form subitted!!</p> :
        <>
          <h3 className="text-center mt-[20%] text-3xl">Choose a name for your Party</h3>
          <form className="text-center pt-10" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a Party name"
              className="input input-xl rounded-md"
            />
            <button type="submit" className="btn btn-neutral btn-xl rounded-md mx-1,">Submit</button>
          </form>
        </>
      }
    </>
  )
}

