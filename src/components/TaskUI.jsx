function TaskUI() {


  return (

<>
<div className="app-content">
    <h1>
      <img src="./assets/Taskify.svg" alt="" width="300rem" />
    </h1>
    <br />
    <div id="container">
      <div className="input-container">
        <input id="todo-input" type="text" placeholder="Enter a task ..." />
        <button id="add-button">Add</button>
      </div>
      <div className="seperator" />
      <ul id="todo-list" />
      <button id="delete-all-button">Delete all</button>
    </div>
    <button id="print-button">
      <img src="./images/print.jpeg" alt="Print" width="20px" />
    </button>
  </div>
    </>

  );
}


