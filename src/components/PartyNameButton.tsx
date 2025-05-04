interface PartyNameButtonProps {
  btnText: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PartyNameButton({ btnText, clickHandler }: PartyNameButtonProps) {
  return (
    <>
      <button
        className="btn btn-neutral rounded-md m-2"
        onClick={clickHandler}
      > {btnText}
      </button>
    </>
  )
}

