import React from "react";

function AddTodoForm() {
  const AddTodo = () => {};
  return (
    <div>
      <form className="todoForm">
        <input className="todoForm_input" type="text" />
        <button type="submit" className="todoForm_Btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
