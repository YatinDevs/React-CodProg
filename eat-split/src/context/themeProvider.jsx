import React from "react";
import { createContext, useContext } from "react";

const themeContext = createContext();

export function themeProvider({ children }) {
  const [theme, setTheme] = useState();
  const toggleTheme = () => {
    setTheme();
  };
  return (
    <themeContext.Provider value={toggleTheme}>
      {children}
    </themeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(themeContext);
}
