import React, { useState } from "react";

const TaskCard = ({ id, task }) => {
  const [isChecked, setIsChecked] = useState(false);

  function markasDone() {
    setIsChecked(!isChecked);
  }

  return (
    <li>
      {" "}
      <button
        className="doneButton"
        id={`doneButton${id}`}
        onClick={markasDone}
        style={{
          backgroundColor: isChecked && "#79e9a2",
          padding: isChecked && "1px",
        }}
      >
        {isChecked && <span>&#10004;</span>}
      </button>
      <p
        className="taskText"
        id={`taskText${id}`}
        contentEditable="true"
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {task}
      </p>
      <button className="deleteButton" id={`deleteButton${id}`}></button>
    </li>
  );
};
export default TaskCard;
