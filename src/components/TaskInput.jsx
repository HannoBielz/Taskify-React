import React, { useState } from "react";
import TaskCard from "./TaskCard";

function TaskInput({ onTaskAdd }) {
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleInputChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  const addTask = () => {
    if (taskInputValue.trim() !== "") {
      console.log("Add Task");
      onTaskAdd(taskInputValue);

      setTaskInputValue("");
    } else {
      console.log("Ixnput is empty");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          id="todo-input"
          type="text"
          placeholder="Enter a task ..."
          value={taskInputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button id="add-button" onClick={addTask}>
          Add
        </button>
      </div>
    </>
  );
}

export default TaskInput;
