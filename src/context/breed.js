import React, { createContext } from "react";

const BreedContext = createContext({});

const BreedProvider = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = React.useState({});

  function changeBreed(breed) {
    setSelectedBreed(breed);
  }

  return (
    <BreedContext.Provider value={{ selectedBreed, changeBreed }}>
      {children}
    </BreedContext.Provider>
  );
};

export { BreedContext, BreedProvider };
