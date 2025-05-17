import { useState, createContext, useContext, ReactNode } from "react";

// shape of context value
interface PartyNameContextTypes {
  partyName: string;
  setPartyName: (name: string) => void;
}

// create context with initial value
const PartyNameContext = createContext<PartyNameContextTypes | undefined>(undefined);

// create provider
interface PartyNameProviderProps {
  children: ReactNode;
}

export const PartyNameProvider = ({ children }: PartyNameProviderProps) => {
  const [partyName, setPartyName] = useState<string>('');
  const contextValue: PartyNameContextTypes = {
    partyName, setPartyName,
  }

  return (
    <PartyNameContext.Provider value={contextValue}>
      {children}
    </PartyNameContext.Provider>
  )
}

// custom hook
export const usePartyName = () => {
  const context = useContext(PartyNameContext);
  if (context === undefined) {
    throw new Error('usePartyName must be used within a PartyNameProvider')
  }
  return context;
}
