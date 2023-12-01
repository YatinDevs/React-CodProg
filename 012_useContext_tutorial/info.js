// ? - 3. createContext and useContext Syntax.  // - 012 useContext_tutorial

// prop drilling
// toavoid prop drilling we use context

// How to use useContext ?
// step 1 : Import createContext from React.
// step 2 : create a context outside the component.
// step 3 : wrap application context.Provider.

// Overall Two Thing we Do :
// 1. Provider
// 2. Consume
// 2. Consume Context
import { useContext } from "react";
import { MyAppContext } from "../App";
const { someFunc, key1, key2 } = useContext(MyAppContext);
