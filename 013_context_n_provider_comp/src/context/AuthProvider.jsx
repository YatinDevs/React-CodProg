import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    username: "yatin",
    email: "c.yatin282@gmail.com",
  });
  return (
    <AuthContext.Provider
      value={{ auth: auth, setAuth: setAuth }}
      // must be dynamic value
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
export default AuthProvider;
