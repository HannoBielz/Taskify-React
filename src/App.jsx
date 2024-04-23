import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TaskInput from "./components/TaskInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>To Do List</h1>
      <TaskInput />
    </>
  );
}

export default App;
