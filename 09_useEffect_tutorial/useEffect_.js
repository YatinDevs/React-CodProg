/*
   !CodProg 
   * Side Effects Using useEffect
   * useEffect is all about Side Effects

   - 1. useEffectHook.
   - 2. Fetching Data After the Component is Rendered.
   - 3. Error and Loading State.
   - 4. Cleanup Function.
   - 5. Add EventListener.
   - 6. Abort Network Request When Component unMounts.
*/

// ? 1. UseEffect Hook:

// Side Effect using UseEffect Hook :
// ? 2. Fetching Data After the Component is Rendered.

// sideEffects like : Fetch data  from api, EventListeners.

// Before React 16 it was  Class Based Components.
// React Life Cycle Methods (ComponentDidMount)
// ? 3. Error and Loading State.

// ? 4. CleanUp function (without Strict Mode)
// 1. Before Component Unmounts cleanup function runs.
// 2. when there is some value inside depedancy array
// when value changes :
/*
        - Component re-renders.
        - clean up Function runs.
        - useEffect Runs.
*/
// case1 : initial render only.
// case2 : with dependancies array.

// ?    - 5. Add EventListener.
// event listener with useEffect and cleanup function in useEffect.

// ? - 6. Abort Network Request When Component unMounts.

// ? - 7. useEffect in Strict Mode.

// strict Mode Flow :
// On Component Mount .
// Effect Runs.
// Clean up Runs.
// Effect Runs.

// ? - 8. Focus on Input when component mounts.
