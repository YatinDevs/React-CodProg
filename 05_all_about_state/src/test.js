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

//  Basic Way
// const increaseAge = (id) => {
//   console.log("increased Age", id);

//   const newState = [];
//   for (let user of users) {
//     if (user.id === id) {
//       newState.push({ ...user, age: user.age + 1 });
//     } else {
//       newState.push(user);
//     }
//   }

//   setUsers(newState);
// };
