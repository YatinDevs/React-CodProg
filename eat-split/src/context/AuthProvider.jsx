import React, { useState } from "react";
import { createContext, useContext } from "react";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    username: "Yatin Chaudhari",
    email: "c.yatin727@gmail.com",
  });
  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
export default AuthProvider;
