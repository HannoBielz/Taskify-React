import React, { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskCard from "./TaskCard";
import taskifyLogo from "../assets/Taskify.svg";

function TaskUI() {
  // State to manage the tasks
  const [tasks, setTasks] = useState([]);
  //State to manage tasks that are marked as done
  const [doneTasks, setDoneTasks] = useState([]);

  // const [isChecked, setIsChecked] = useState(false);

  // useEffect hook to load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }

    const savedDoneTasks = JSON.parse(localStorage.getItem("doneTasks"));
    if (savedDoneTasks) {
      setDoneTasks(savedDoneTasks);
    }
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    console.log(doneTasks);
  }, [doneTasks]);

  // Function to add a new task
  function addTask(taskInputValue) {
    // Create a new task object
    const newTask = {
      id: tasks.length + 1, // Assign a unique ID
      task: taskInputValue, // Task content
      isChecked: false,
    };
    // Update the tasks state with the new task
    setTasks([...tasks, newTask]);
    console.log(tasks);
    // Save the updated tasks to local storage
    saveTasksToLocalStorage([...tasks, newTask], doneTasks);
  }

  // Function to delete a task
  function deleteTask(taskId) {
    // Filter out the task with the given taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update the tasks state with the filtered tasks
    setTasks(updatedTasks);
    // Filter out the doneTask with the given taskId
    const updatedDoneTasks = doneTasks.filter((task) => task.id !== taskId);
    // Update the tasks state with the filtered tasks
    setDoneTasks(updatedDoneTasks);

    // Save the updated tasks to local storage
    saveTasksToLocalStorage(updatedTasks, updatedDoneTasks);
  }

  // Function to delete all tasks
  function deleteAll() {
    // Clear the tasks state
    setTasks([]);
    setDoneTasks([]);
    // Remove tasks from local storage
    localStorage.removeItem("tasks");
  }

  // Function to save tasks to local storage
  function saveTasksToLocalStorage(tasks, doneTasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }

  // //minimal markTaskAsDone
  function markTaskAsDone(taskId, isChecked) {
    console.log(`TaskUI: Task ${taskId} isChecked is ${isChecked}`);
    if (isChecked) {
      console.log(`Task ${taskId} was marked as done`);
      // Filter the Task with the given TaskID and assign to doneTasks
      const updatedDoneTasks = tasks.filter((task) => task.id == taskId);
      updatedDoneTasks[0].isChecked = isChecked;
      console.log(updatedDoneTasks[0]);
      // Filter out Task with the given TaskID
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      // Update tasks useState
      setTasks(updatedTasks);
      // Update doneTasks useState
      setDoneTasks([...doneTasks, updatedDoneTasks[0]]);
      saveTasksToLocalStorage(updatedTasks, [
        ...doneTasks,
        updatedDoneTasks[0],
      ]);
    } else {
      console.log(`Task ${taskId} is no longer marked as done`);
      const updatedTasks = doneTasks.filter((task) => task.id == taskId);
      updatedTasks[0].isChecked = isChecked;

      const updatedDoneTasks = doneTasks.filter((task) => task.id !== taskId);
      // Update doenTasks useState
      setDoneTasks(updatedDoneTasks);
      // Update doneTasks useState
      setTasks([...tasks, updatedTasks[0]]);

      saveTasksToLocalStorage([...tasks, updatedTasks[0]], updatedDoneTasks);
    }
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
            {tasks &&
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  task={task.task}
                  onDelete={deleteTask} // Pass deleteTask function to TaskCard
                  onMarkedAsDone={markTaskAsDone}
                  isChecked={task.isChecked}
                />
              ))}
          </ul>

          <ul>
            {doneTasks &&
              doneTasks.map((doneTask) => (
                <TaskCard
                  key={doneTask.id}
                  id={doneTask.id}
                  task={doneTask.task}
                  onDelete={deleteTask} // Pass deleteTask function to TaskCard
                  onMarkedAsDone={markTaskAsDone}
                  isChecked={doneTask.isChecked}
                />
              ))}
          </ul>
          {/* Button to delete all tasks */}
          {(tasks.length > 0 || doneTasks.length > 0) && (
            <button id="delete-all-button" onClick={deleteAll}>
              Delete all
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskUI;
