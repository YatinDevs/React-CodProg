// Deeper Dive into React State and Rendering.
/*
    !CodProg
  - Remove Redundant State.
*/

// - Remove Redundant State.
/*
   Redundant data .
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  No need to create new State for fullName 
  we can do :
  const fullName = firstName + " " + lastName;
 
*/

/* When Parent is re-Rendered or rendered its
   all child re-render But Parents of it doesnt re-render.
*/
