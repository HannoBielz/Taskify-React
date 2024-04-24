import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TaskInput from "./components/TaskInput";
import TaskCard from "./components/TaskCard";

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

  return (
    <>
      <h1>To Do List</h1>
      {/* <TaskInput onTaskAdd={setInput} /> */}
      <TaskInput onTaskAdd={addTask} />
      {tasks.map((task) => (
        <TaskCard key={task.id} id={task.id} task={task.task} />
      ))}
    </>
  );
}

export default App;
