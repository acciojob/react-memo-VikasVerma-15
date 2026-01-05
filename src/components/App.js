import React, { useState } from "react";
import UseMemo from "./UseMemo";
import SkillList from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [skill, setSkill] = useState("");

  return (
    <div>
      <h1>Use Memo testing</h1>

      <button onClick={() => setTodos([...todos, "new todo"])}>
  Add Todo
</button>

<ul>
  {todos.map((t, i) => (
    <li key={i}>{t}</li>
  ))}
</ul>


      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>

      <UseMemo />

      <h1>React Memo testing</h1>

      <input
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button
        onClick={() =>
          skill.length > 5 && setTodos([...todos, skill])
        }
      >
        Add Skill
      </button>

      <SkillList skills={todos} />
    </div>
  );
};

export default App;
