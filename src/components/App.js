import React, { useState } from "react";
import UseMemo from "./UseMemo";
import SkillList from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = () => {
    if (task.length > 5) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h1>React.useMemo</h1>

      <h2>My todos</h2>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <UseMemo count={count} />

      <h1>React.memo</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addCustomTodo}>Add Skill</button>

      <SkillList skills={todos} />
    </div>
  );
};

export default App;
