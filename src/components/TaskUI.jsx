import { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskCard from "./TaskCard";
import taskifyLogo from "../assets/Taskify.svg";

function TaskUI() {
    const [tasks, setTasks] = useState([]);
    
    function addTask(taskInputValue) {
        const newTask = {
          id: tasks.length + 1,
          task: taskInputValue,
        };
        setTasks([...tasks, newTask]);
      }

    // Function to delete a task
    function deleteTask(taskId) {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      }

    // Function to delete all tasks
    function deleteAll() {
            setTasks([]);
    }

return (

    <>
    <div className="app-content">
        <h1> {/* Logo */}   
            <img 
                src={taskifyLogo} 
                alt="" width="300rem" 
            />
        </h1>
        <br />
            <div id="container">
                {/* Task input component */}
                <TaskInput 
                onTaskAdd={addTask}
             />
             {/* Separator */}
            <div className="seperator" />
             {/* Task list */}
            <ul 
                id="todo-list">
                {/* Map through tasks and render TaskCard component for each task */}
                {tasks.map((task) => (
                <TaskCard
                key={task.id}
                id={task.id}
                task={task.task}
                onDelete={deleteTask} // Pass deleteTask function to TaskCard
                />
            ))
            }
        </ul>
        {/* Button to delete all tasks */}
        {tasks.length > 0 && <button 
            id="delete-all-button" 
            onClick={deleteAll}>
                Delete all</button>
        }
        </div>
    </div>
    </>

  );
}

export default TaskUI