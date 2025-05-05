interface PartyNameButtonProps {
  btnText: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PartyNameButton({ btnText, clickHandler }: PartyNameButtonProps) {
  return (
    <>
      <button
        className="btn bg-primary/20 m-5"
        onClick={clickHandler}
      > {btnText}
      </button>
    </>
  )
}

