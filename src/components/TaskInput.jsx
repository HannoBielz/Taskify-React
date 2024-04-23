import React from "react";

function TaskInput() {
  return (
    <div className="input-container">
      <input id="todo-input" type="text" placeholder="Enter a task ..." />
      <button id="add-button">Add</button>
    </div>
  );
}

export default TaskInput;
