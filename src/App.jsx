import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TaskInput from "./components/TaskInput";
import TaskCard from "./components/TaskCard";
// import TaskUI from "./components/TaskUI";

function App() {
  const [input, setInput] = useState();
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const newTask = {
  //     id: tasks.length + 1,
  //     task: input,
  //   };
  //   setTasks([...tasks, newTask]);
  // }, [input]);

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

  return (
    <>
      <h1>To Do List</h1>
      <TaskInput onTaskAdd={addTask} />
      {/* Pass deleteTask function to TaskCard component */}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          task={task.task}
          onDelete={deleteTask}
        />
      ))}
    </>
  );
}



export default App;

