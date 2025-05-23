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
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "Arial" }}>
      <h2>Simple To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button onClick={handleAdd} style={{ padding: "0.5rem", marginLeft: 8 }}>
        Add
      </button>

      <ul style={{ marginTop: "1rem" }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ padding: "0.25rem 0" }}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
