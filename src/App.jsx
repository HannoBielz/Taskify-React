import { useState } from "react";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <TaskCard id={0} task={"Tanzen"}></TaskCard>
    </>
  );
}

export default App;
