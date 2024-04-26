import React, { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskCard from "./TaskCard";
import taskifyLogo from "../assets/Taskify.svg";

function TaskUI() {
  // State to manage the tasks
  const [tasks, setTasks] = useState([]);

  // useEffect hook to load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Function to add a new task
  function addTask(taskInputValue) {
    // Create a new task object
    const newTask = {
      id: tasks.length + 1, // Assign a unique ID
      task: taskInputValue, // Task content
    };
    // Update the tasks state with the new task
    setTasks([...tasks, newTask]);
    // Save the updated tasks to local storage
    saveTasksToLocalStorage([...tasks, newTask]);
  }

  // Function to delete a task
  function deleteTask(taskId) {
    // Filter out the task with the given taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update the tasks state with the filtered tasks
    setTasks(updatedTasks);
    // Save the updated tasks to local storage
    saveTasksToLocalStorage(updatedTasks);
  }

  // Function to delete all tasks
  function deleteAll() {
    // Clear the tasks state
    setTasks([]);
    // Remove tasks from local storage
    localStorage.removeItem("tasks");
  }

  // Function to save tasks to local storage
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  return (
    <>
      <div className="app-content">
        {/* Logo */}
        <h1>
          <img src={taskifyLogo} alt="" width="300rem" />
        </h1>
        <br />
        <div id="container">
          {/* Task input component */}
          <TaskInput onTaskAdd={addTask} />
          {/* Separator */}
          <div className="seperator" />
          {/* Task list */}
          <ul id="todo-list">
            {/* Map through tasks and render TaskCard component for each task */}
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                task={task.task}
                onDelete={deleteTask} // Pass deleteTask function to TaskCard
              />
            ))}
          </ul>
          {/* Button to delete all tasks */}
          <button id="delete-all-button" onClick={deleteAll}>
            Delete all
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskUI;
