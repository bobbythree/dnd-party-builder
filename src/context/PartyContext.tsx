import { useState, useRef, useMemo, createContext, useContext, ReactNode } from "react";
import { Party } from "../models/Party.ts"
import { Character } from "../models/characters/Character";

// shape of context value
interface PartyContextTypes {
  party: Party;
  setName: (name: string) => void;
  addMember: (member: Character) => void;
}

// create context with initial value
const PartyContext = createContext<PartyContextTypes | undefined>(undefined);

// define prop types
interface PartyProviderProps {
  children: ReactNode;
}

// create provider component
export const PartyProvider = ({ children }: PartyProviderProps) => {
  const partyRef = useRef(new Party())

  //create counter to trigger re-renders
  const [counter, setCounter] = useState(0);

  const setName = useMemo(() => (name: string) => {
    partyRef.current.setName(name)
    setCounter(prev => prev + 1)
  }, []);

  const addMember = useMemo(() => (member: Character) => {
    partyRef.current.addMember(member)
    setCounter(prev => prev + 1)
  }, []);

  //create context 
  const contextValue = useMemo(() => ({
    party: partyRef.current,
    setName,
    addMember,
  }), [counter, setName, addMember]);

  return (
    <PartyContext.Provider value={contextValue}>
      {children}
    </PartyContext.Provider>
  )
}

// custom hook
export const useParty = () => {
  const context = useContext(PartyContext);
  if (context === undefined) {
    throw new Error('useParty hook must be used within a PartyProvider')
  }
  return context;
}
