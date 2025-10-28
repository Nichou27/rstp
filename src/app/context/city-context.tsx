"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface CityContextType {
  selectedCity: string | null;
  setSelectedCity: Dispatch<SetStateAction<string | null>>;
}

const CityContext = createContext<CityContextType | null>(null);

interface CityProviderProps {
  children: React.ReactNode;
}

export function CityProvider({ children }: CityProviderProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCityContext(): CityContextType {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within CityProvider");
  }
  return context;
}
