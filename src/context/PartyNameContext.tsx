import { useState, createContext, useContext, ReactNode } from "react";

// shape of context value
interface PartyContextTypes {
  partyName: string;
  setPartyName: (name: string) => void;
}

// create context with initial value
const PartyContext = createContext<PartyContextTypes | undefined>(undefined);

// create provider
interface PartyProviderProps {
  children: ReactNode;
}

export const PartyProvider = ({ children }: PartyProviderProps) => {
  const [partyName, setPartyName] = useState<string>('');
  const contextValue: PartyContextTypes = {
    partyName, setPartyName,
  }

  return (
    <PartyContext.Provider value={contextValue}>
      {children}
    </PartyContext.Provider>
  )
}

// custom hook
export const usePartyName = () => {
  const context = useContext(PartyContext);
  if (context === undefined) {
    throw new Error('useParty hook must be used within a PartyProvider')
  }
  return context;
}
