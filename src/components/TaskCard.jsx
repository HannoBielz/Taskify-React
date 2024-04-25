import React, { useState } from "react";

const TaskCard = ({ id, task, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  function markAsDone() {
    setIsChecked(!isChecked);
  }

  function handleDelete() {
    // Call the onDelete function with the task id
    if (typeof onDelete === "function") {
      onDelete(id);
    }
  }

  return (
    <li>
      <button
        className="doneButton"
        id={`doneButton${id}`}
        onClick={markAsDone}
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
      {/* Call handleDelete function when delete button is clicked */}
      <button
        className="deleteButton"
        id={`deleteButton${id}`}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
