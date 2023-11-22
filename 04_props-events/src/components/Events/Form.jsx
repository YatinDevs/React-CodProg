import ElementClick from "./ElementClick";

export default function Form() {
  const handleClick = (event) => {
    console.log("click btn triggered", event);
    console.log("click btn triggered", event.target);
    // event.target.textContent = "You Clicked Button";
  };

  const handleClick2 = (firstName, lastName) => {
    console.log("you Clicked me 2", firstName, lastName);
  };

  const handleElementClick = () => {
    console.log("you Click ElementClick Component");
  };

  // wrapper function
  //   function wrapper() {
  //     handleClick2("Yatin", "Chaudhari");
  //   }

  return (
    <div className="form">
      <h1>Form Section - Events Learnings : </h1>
      {/* <button onClick={handleClick}>Click Me</button>
      <br></br>
      <button
        onClick={(e) => {
          event.target.textContent = "You Clicked Button2";
          handleClick2("Yatin", "Chaudhari");
        }}
      >
        Click Me
      </button> */}

      <ElementClick onClick={handleElementClick} />
    </div>
  );
}
