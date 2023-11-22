let person = {
  id: 1,
  firstName: "Yatin",
  lastName: "Chaudhari",
  email: "c.yatin279@gmail.com",
  phone: "9594515799",
  age: 25,
};

let newperson = { ...person, age: 30 };
console.log(newperson);
