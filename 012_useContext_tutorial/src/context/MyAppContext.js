// How to use Context :
// Step 1: import createContext from React.
import { createContext, useContext } from "react";
// Step 2: Create a Context. -> Start Uppercase.
const MyAppContext = createContext();
// Step 3 : wrap Application in Context.Provider
// when we wrap it has value obj property we pass throughout the Context

// <MyAppContext.Provider
//       value={{ key1: "value1", key2: "value2", someFunc: myFunc }}
// ></MyAppContext.Provider>

export default MyAppContext;
