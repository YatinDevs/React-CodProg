import { useState } from "react";
import "./App.css";
import ExampleUseEff from "./components/ExampleUseEff";
import FetchDataExample from "./components/FetchDataExample";
import CleanupFunctionDemo from "./components/CleanupFunctionDemo";
import MouseMoveEvent from "./components/MouseMoveEvent";
import UserForm from "./components/UserForm";

// UseEffect Hook: (is All about SideEffect)--> Anything Not related to React.
// 3 Cases of UseEffect :

// Data fetch on Mount :

// post req on form Submit (later):

// Clean Up Function :
function App() {
  const [showComponent, setShowComponent] = useState(true);

  // const handleChange = (e) => {
  //   if (!e.target.checked) {
  //     setShowComponent(false);
  //   } else {
  //     setShowComponent(true);
  //   }
  // };

  return (
    <div>
      {/* <ExampleUseEff /> */}
      {/* <FetchDataExample /> */}
      <label htmlFor="showComponent">show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
      {/* {showComponent && <CleanupFunctionDemo />} */}
      {/* {showComponent && <MouseMoveEvent />} */}
      {/* - 6. Abort Network Request When Component unMounts. */}
      {/* {showComponent && <FetchDataExample />} */}

      {/* // ? - 8. Focus on Input when component mounts. */}

      <UserForm />
    </div>
  );
}

export default App;
