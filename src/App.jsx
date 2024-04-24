import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TaskInput from "./components/TaskInput";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <TaskInput />
      <TaskCard id={0} task={"Tanzen"}></TaskCard>
    </>
  );
}

export default App;
