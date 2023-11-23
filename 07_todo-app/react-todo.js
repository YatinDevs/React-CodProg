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
