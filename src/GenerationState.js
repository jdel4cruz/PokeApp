import React from "react";
import { useState, useContext } from "react";

const GenState = React.createContext();
const GenUpdateState = React.createContext();

export const useGen = () => useContext(GenState);

export const useGenUpdate = () => useContext(GenUpdateState);

export function GenProvider({ children }) {
  const [genSelected, setGenSelected] = useState("8");

  const updateGen = (i) => {
    if (i === genSelected) {
      setGenSelected(i);
    }
    return;
  };

  return (
    <GenState.Provider value={genSelected}>
      <GenUpdateState.Provider value={updateGen}>
        {children}
      </GenUpdateState.Provider>
    </GenState.Provider>
  );
}
