import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [cars, setCars] = useState([]);

  return (
    <GlobalContext.Provider value={{ people, setPeople, cars, setCars }}>
      {children}
    </GlobalContext.Provider>
  );
};
