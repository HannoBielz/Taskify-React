import { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskCard from "./TaskCard";

function TaskUI() {

    
const addTask = () => {
    if (taskInputValue.trim() !== "") {
      console.log("Add Task");
      onTaskAdd(taskInputValue);

      setTaskInputValue("");
    } else {
      console.log("Ixnput is empty");
    }
  };

  return (

<>
<div className="app-content">
    <h1>
      <img src="./assets/Taskify.svg" alt="" width="300rem" />
    </h1>
    <br />
    <div id="container">
      <div className="input-container">
        <input id="todo-input" type="text" placeholder="Enter a task ..." />
        <button id="add-button" onClick={addTask}>Add</button>
      </div>
      <div className="seperator" />
      <ul id="todo-list" />
      {/* <button id="delete-all-button" onClick={}>Delete all</button> */}
    </div>
    <button id="print-button">
      <img src="./images/print.jpeg" alt="Print" width="20px" />
    </button>
  </div>
    </>

  );
}


