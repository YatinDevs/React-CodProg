import React from "react";
import { createContext, useContext } from "react";

const themeContext = createContext();

export function themeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {};
  return <themeContext.Provider>{children}</themeContext.Provider>;
}

export default function useTheme() {
  return useContext(themeContext);
}
