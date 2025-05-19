{/*
  this component defines the buttons that appear after user submits a party name.
  buttons are for confirming the name or going back to pick a different name.
*/}

// define prop types
interface ButtonProps {
  btnText: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PartyNameButton({ btnText, clickHandler }: ButtonProps) {
  return (
    <>
      <button
        className="btn bg-primary/20 md:btn-md btn-xs m-5"
        onClick={clickHandler}
      > {btnText}
      </button>
    </>
  )
}

