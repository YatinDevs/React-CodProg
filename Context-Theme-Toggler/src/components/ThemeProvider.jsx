import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      {children}
    </ThemeContext.Provider>
  );
};
