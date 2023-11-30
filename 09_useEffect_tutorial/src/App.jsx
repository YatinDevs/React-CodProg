import { useState } from "react";
import "./App.css";
import ExampleUseEff from "./components/ExampleUseEff";
import FetchDataExample from "./components/FetchDataExample";

// UseEffect Hook: (is All about SideEffect)--> Anything Not related to React.
// 3 Cases of UseEffect :

// Data fetch on Mount :

// post req on form Submit (later):

// Clean Up Function :
function App() {
  return (
    <div>
      {/* <ExampleUseEff /> */}
      <FetchDataExample />
    </div>
  );
}

export default App;
