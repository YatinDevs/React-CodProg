/**
 * !CodProg
 *
 * ?Todo Application  :
 * 1. Todo App Intro.
 * 2. Todo App Structure.
 * 3. Add New Todo.
 * 4. Add CheckBox and Toggle Completed.
 * 5. Remove Todo.
 * 6. Style Todo Form.
 * 7. Style Todo Item.
 */

// !React JS Ways  * 3. Add New Todo.

// * React Way

const addTodo = (newTodo) => {
  console.log("newTodo added!");
  console.log(newTodo);
  setTodos((prevState) => {
    return [...prevState, newTodo];
  });
};
//  * Basic Way to  Add.

const addTodo = (newTodo) => {
  const newTodos = [];
  for (let todo of todos) {
    newTodos.push(todo);
  }
  newTodos.push(newTodo);
  setTodos(newTodos);
};

// ! * 4. Add CheckBox and Toggle Completed.
//  * Basic Way to  CheckBox Toggle.

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

// * React Way
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

// !5. Remove Todo.
//  * Basic Way to  CheckBox Toggle.

const removeTodo = (id) => {
  console.log(id, "removed Todo");
  const newTodos = [];
  for (let todo of todos) {
    if (todo.id !== id) {
      newTodos.push(todo);
    }
  }
  setTodos(newTodos);
};

// * React Way

const removeTodo = (id) => {
  console.log(id, "removed Todo");

  setTodos((prevState) => {
    return prevState.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
  });
};

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

const removeTodo = (id) => {
  console.log(id, "removed Todo");
  const newTodos = [];
  for (let todo of todos) {
    if (todo.id !== id) {
      newTodos.push(todo);
    }
  }
  setTodos(newTodos);
};
// React Ways:
/*
     
//  ?Basic Way to  Delete
const increaseAge = (id) => {
  console.log("increased Age", id);

  const newState = [];
  for (let user of users) {
    if (user.id !== id) {
      newState.push(user);
    }
  }

  setUsers(newState);
};
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
  
   */

// ! 6. Style Todo Form.
// ! 7. Style Todo Item.
// React - icons
// npm install react-icons --save
// https://react-icons.github.io/react-icons/

// React - toastify
// https://www.npmjs.com/package/react-toastify
// npm install --save react-toastify

/**
 * !CodProg
 *
 * ?Todo Application  :
 * 1. Todo App Intro.
 * 2. Todo App Structure.
 * 3. Add New Todo.
 * 4. Add CheckBox and Toggle Completed.
 * 5. Remove Todo.
 * 6. Style Todo Form.
 * 7. Style Todo Item.
 * - React - icons
 * - React - toastify


 */
