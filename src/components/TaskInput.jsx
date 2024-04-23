import React, { useState } from "react";

function TaskInput() {
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleInputChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  const addTask = () => {
    if (taskInputValue.trim() !== "") {
      console.log("Add Task");

      // Hier wird der onTaskAdd-Prop erstellt und die neue Aufgabe übergeben
      if (typeof onTaskAdd === "function") {
        onTaskAdd(taskInputValue);
      }

      // Leeren Sie das Eingabefeld
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
  );
}

export default TaskInput;
