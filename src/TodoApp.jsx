import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task.trim()]);
    setTask("");
  };

  return (
    <div>
      <h2>Simple To-Do List</h2>
      <div className="input-group">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter")
                handleAdd();
        }}
      />
      <button onClick={handleAdd}>
        Add
      </button>
</div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
