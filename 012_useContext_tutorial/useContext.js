// About useContext:

// Prop Drilling :
// App - (function passed)
// --> My Component - function(prop)
// --> CHild - function(prop)
// --> GrandChild -  function(prop) used here

// To avoid this Prop Drilling we use Context.

// How to use useContext ?

// Overall Two Thing we Do :
// 1. Provider
// 2. Consume

// 1. Provider Steps :

// step 1 : Import createContext from React.
// import { createContext } from "react";

// step 2 : create a context outside the component.
// export const MyAppContext = createContext();

// Step 3 : wrap Application in Context.Provider
// when we wrap it has value obj property we pass throughout the Context

// <MyAppContext.Provider
//       value={{ key1: "value1", key2: "value2", someFunc: myFunc }}
// ></MyAppContext.Provider>

// 2. Consume Steps:

// 2. Consume Context
// Step 1 : import useContext
// import { useContext } from "react";
// Step 2: import Context to be used.
// import MyAppContext from "../context/MyAppContext";

// Step 3: Destructure Values function need from use Context
//   const { someFunc, key1, key2 } = useContext(MyAppContext);
