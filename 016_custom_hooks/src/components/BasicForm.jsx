import React, { useEffect, useState } from "react";
import useLocalStorage1 from "../hooks/useLocalStorage1";

function BasicForm() {
  const [firstname, setFirstName] = useLocalStorage1("firstname", "");
  const [lastname, setLastName] = useLocalStorage1("lastname", "");
  console.log(localStorage.getItem("lastname"));
  console.log(localStorage.getItem("firstname"));
  return (
    <div>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h1>FirstName : {firstname}</h1>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <h1>LastName : {lastname}</h1>
    </div>
  );
}

export default BasicForm;
