import React, { useState } from "react";

function UserForm() {
  console.log("userForm rendered!");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <form>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstname">FirstName </label>
        <input
          id="firstname"
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            setFullName(e.target.value + " " + lastName);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">lastName </label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            setFullName(firstName + " " + e.target.value);
          }}
        />
      </div>
      <h1>User Details</h1>
      <div>
        <p>Firstname : {firstName}</p>
        <p>Lastname : {lastName}</p>
        <p>Fullname : {fullName}</p>
      </div>
    </form>
  );
}

export default UserForm;
