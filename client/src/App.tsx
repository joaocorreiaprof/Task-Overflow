import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos", error));
  }, []);

  return (
    <div id="app">
      <h1>Task Overflow</h1>

      <h2>Todos List</h2>
      <ul>
        {todos.map((todo: { _id: string; task: string; status: string }) => (
          <li key={todo._id}>
            <strong>Task:</strong> {todo.task} - <strong>Status:</strong>{" "}
            {todo.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
