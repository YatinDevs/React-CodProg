import React, { useState } from "react";

function HandleMultipleInputs() {
  //   fname
  //   lname
  //   username
  //   email
  //   password
  //   confirm password
  //    phone number
  //   address

  //   const [fname, setFname] = useState("");
  //   const [lname, setLname] = useState("");
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [cpassword, setCpassword] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [address, setAddress] = useState("");

  //   const handleFirstName = (e) => {
  //     setFname(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  // console.log("firstName", fname);
  // console.log("lname", lname);
  // console.log("username", username);
  // console.log("email", email);
  // console.log("password", password);
  // console.log("cpassword", cpassword);
  // console.log("phone", phone);
  // console.log("address", address);
  //   };

  // Instead of Above State we can do is that :
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    console.log(e.target.id);
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
      phone: "",
      address: "",
    });
  };

  const { fname, lname, username, email, password, cpassword, phone, address } =
    formData;

  return (
    <>
      <h2> HandleMultipleInputs </h2>
      <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
        <div className="formGroup">
          <label htmlFor="fname">Firstname</label> <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            // onChange={(e) => setFname(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="lname">Lastname</label> <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            // onChange={(e) => setLname(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="username">Username</label> <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            name="password"
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="cpassword">Confirm Password</label> <br />
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={cpassword}
            // onChange={(e) => setCpassword(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Phone</label> <br />
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="address">Address</label> <br />
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            // onChange={(e) => setAddress(e.target.value)}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="SignUp" style={{ marginTop: "1rem" }} />
      </form>
    </>
  );
}

export default HandleMultipleInputs;
