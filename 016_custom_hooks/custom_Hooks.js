// Custom Hooks

// We so Far used Hooks :
// 1.useState
// 2.useEffect
// 3.useRef
// 4.useReducer
// 5.useContext

// useFetch custom hook :

// 1. generalSenario we do. --> generalSenario.js
// 2. creating useFetch custom hook. --> useFetch.js

// useLocalStorage Custom Hook:

// To Store states in LocalStorage

// import React, { useState, useEffect } from "react";

// export default function useLocalStorage1(key, initialValue) {
//   const [state, setState] = useState(() => {
//     return JSON.stringify(localStorage.getItem(key)) || "";
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [state]);

//   return [state, setState];
// }
