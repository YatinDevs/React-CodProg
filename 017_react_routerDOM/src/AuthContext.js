// 1. Created Auth Provider

// import React from "react";
// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(AuthContext);
// }

// export default useAuth;

// 2. useAuth Provider Wrapp whole application
// impirt use Auth  Destruct info
