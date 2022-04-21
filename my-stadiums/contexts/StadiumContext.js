import { createContext, useState } from "react";

export const StadiumContext = createContext({
  currentStadium: null,
  setCurrentStadium: (stadium) => {},
});

function StadiumContextProvider({ children }) {
  const [stadium, setStadium] = useState(null);

  function setCurrentStadium(selectedStadium) {
    setStadium(selectedStadium);
  }

  const value = {
    currentStadium: stadium,
    setCurrentStadium: setCurrentStadium,
  };

  return (
    <StadiumContext.Provider value={value}>{children}</StadiumContext.Provider>
  );
}
