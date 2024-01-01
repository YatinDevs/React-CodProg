import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    cpassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setName("");
    setEmail("");
    console.log(name, email);
    setTimeout(() => {
      //requet is successful
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = (e) => {
    console.log(e.target.id);
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const handleChange2 = (e, field) => {
    console.log(e.target.id);
    setFormData((prevState) => {
      return { ...prevState, [field]: e.target.value };
    });
  };
  return (
    <div className="wrapper">
      <h2>React Forms - Gift Items</h2>

      {submitting && <div>Submitting Form...</div>}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input type="text" value={name} onChange={handleChange} />
          </label>

          <label>
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
