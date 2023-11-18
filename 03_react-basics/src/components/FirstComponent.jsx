import "./FirstComponent.css";

function FirstComponent() {
  const heading = "react world!";

  /*
  // function declaration:
  function firstName(name) {
    return name.toUpperCase();
  }

  //   function expression:
  const firstName = function (name) {
    return name.toUpperCase();
  };

  // arrow function :
  const firstName = (name) => {
    return name.toUpperCase();
  };

  */

  const firstName = (name) => name.toUpperCase();

  return (
    <>
      <h1 className="bg-dark">Hello {firstName(heading)}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        voluptatem!
      </p>
      <h2>FORM</h2>
      <form>
        <label htmlFor="fname">FirstName : </label>
        <input type="text" id="fname" />
      </form>
    </>
  );
}

export default FirstComponent;
