import React, { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskCard from "./TaskCard";
import taskifyLogo from "../assets/Taskify.svg";

function TaskUI() {
  // State for the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to check if at least one list item exists
  const [hasTasks, setHasTasks] = useState(false);

  // Effect to load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
      // If tasks exist, set hasTasks to true
      setHasTasks(true);
    }
  }, []);

  // Function to add a task
  function addTask(taskInputValue) {
    const newTask = {
      id: tasks.length + 1,
      task: taskInputValue,
    };
    setTasks([...tasks, newTask]);
    // Save tasks to local storage
    saveTasksToLocalStorage([...tasks, newTask]);
    // Set hasTasks to true since at least one list item exists
    setHasTasks(true);
  }

  // Function to delete a task
  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    // Update tasks in local storage
    saveTasksToLocalStorage(updatedTasks);
    // Check if tasks still exist
    if (updatedTasks.length === 0) {
      // If no tasks remain, set hasTasks to false
      setHasTasks(false);
    }
  }

  // Function to delete all tasks
  function deleteAll() {
    // Clear the task list
    setTasks([]);
    // Remove tasks from local storage
    localStorage.removeItem("tasks");
    // Set hasTasks to false since no tasks remain
    setHasTasks(false);
  }

  // Function to save tasks to local storage
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  return (
    <>
      <div className="app-content">
        <h1>
          <img src={taskifyLogo} alt="" width="300rem" />
        </h1>
        <br />
        <div id="container">
          {/* Component for adding new tasks */}
          <TaskInput onTaskAdd={addTask} />
          <div className="seperator" />
          <ul id="todo-list">
            {/* Cards for each task */}
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                task={task.task}
                onDelete={deleteTask} // onDelete function for deleting a task
              />
            ))}
          </ul>
          {/* Button for deleting all tasks */}
          <button
            id="delete-all-button"
            onClick={deleteAll}
            style={{ display: hasTasks ? "block" : "none" }} // Display the button only if hasTasks is true
          >
            Delete all
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskUI;
