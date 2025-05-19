import { useState, useRef, useMemo, createContext, useContext, ReactNode } from "react";
import { Party } from "../models/Party.ts"
import { Character } from "../models/characters/Character";

// shape of context value
interface PartyContextTypes {
  setName: (name: string) => void;
  getPartyName: () => string;
  addMember: (member: Character) => void;
  getPartyMembers: () => Character[];
}

// create context with initial value
const PartyContext = createContext<PartyContextTypes | undefined>(undefined);

// define prop types
interface PartyProviderProps {
  children: ReactNode;
}

// create provider component
export const PartyProvider = ({ children }: PartyProviderProps) => {
  const partyRef = useRef(new Party());

  //create counter to trigger re-renders
  const [counter, setCounter] = useState(0);

  // methods on the Party object
  const setName = useMemo(() => (name: string) => {
    partyRef.current.setName(name);
    setCounter(prev => prev + 1);
  }, []);

  const getPartyName = useMemo(() => {
    return () => partyRef.current.name;
  }, [counter]);

  const addMember = useMemo(() => (member: Character) => {
    partyRef.current.addMember(member);
    setCounter(prev => prev + 1)
  }, []);

  const getPartyMembers = useMemo(() => {
    return () => [...partyRef.current.members];
  }, [counter]);

  //create context values for provider 
  const contextValue = useMemo(() => ({
    setName,
    getPartyName,
    addMember,
    getPartyMembers,
  }), [setName, getPartyName, addMember, getPartyMembers,]);

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
    throw new Error('useParty hook must be used within a PartyProvider');
  }
  return context;
}
