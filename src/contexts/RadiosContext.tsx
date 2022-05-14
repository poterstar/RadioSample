import React, { createContext, useState } from "react";
import { RadioType } from "../hooks/useStations";

type RadiosContextType = {
  currentPlayingRadio: RadioType | null;
  setCurrentPlayingRadio: (radio: RadioType | null) => void;
};

type RadiosContextProvider = {
  children: React.ReactNode;
};

export const RadiosContext = createContext<RadiosContextType>(
  {} as RadiosContextType
);

const RadiosContextProvider = ({ children }: RadiosContextProvider) => {
  const [currentPlayingRadio, setCurrentPlayingRadio] =
    useState<RadioType | null>(null);

  return (
    <RadiosContext.Provider
      value={{ currentPlayingRadio, setCurrentPlayingRadio }}
    >
      {children}
    </RadiosContext.Provider>
  );
};

export default RadiosContextProvider;
