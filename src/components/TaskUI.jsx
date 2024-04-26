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

function deleteAll() {
    setTasks([]);


}


return (

    <>
    <div className="app-content">
        <h1>
            <img src={taskifyLogo} alt="" width="300rem" />
        </h1>
        <br />
            <div id="container">
            <TaskInput onTaskAdd={addTask} />
            <div className="seperator" />
            <ul 
            id="todo-list">{tasks.map((task) => (
                <TaskCard
                key={task.id}
                id={task.id}
                task={task.task}
                onDelete={deleteTask}
                />
            ))
            }
        </ul>
            <button id="delete-all-button" onClick={deleteAll}>Delete all</button>
        </div>
    </div>
    </>

  );
}

export default TaskUI


