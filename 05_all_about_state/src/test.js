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

//  Basic Way to Manipulate
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

//  Basic Way to  Delete
// const increaseAge = (id) => {
//   console.log("increased Age", id);

//   const newState = [];
//   for (let user of users) {
//     if (user.id !== id) {
//       newState.push(user);
//     }
//   }

//   setUsers(newState);
// };

const toggleCompleted = (id) => {
  console.log(id, "toggle Completed");

  const newTodos = [];
  for (let todo of todos) {
    if (todo.id === id) {
      newTodos.push({ ...todo, completed: !todo.completed });
    } else {
      newTodos.push(todo);
    }
  }
  setTodos(newTodos);
};

// React Ways:
/*
   
  const increaseAge = (id) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };

  const deleteUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => {
        if (user.id !== id) {
          return user;
        }
      });
    });
  };
 
   
  const deleteUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.id !== id);
    });
  };

  
const toggleCompleted = (id) => {
  console.log(id, "toggle Completed");
  setTodos((prevState) => {
    return prevState.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  });
};
*/
