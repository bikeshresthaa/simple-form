import Input from '../components/InputField';
import { useState } from 'react';

function TodoPage() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState<string[]>([]);

  function handleTodo() {
    if (!input) return;
    setTodo([...todo, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Todo Page</h1>
      <Input type="text" value={input} label="Add Todo" onChange={setInput} />
      <button onClick={handleTodo}>Add Todo</button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoPage;