import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // const handleInput = (e) => {
  //   console.log("handled", e.target.value);
  //   setUsername(() => {
  //     return e.target.value;
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!!");
  };
  return (
    <div className="App">
      <h1>Forms In React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      UserName : {username}
      <br></br>
      password : {password}
      <br></br>
      email : {email}
    </div>
  );
}

export default App;
