import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = event => setTodo(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    console.log(todo);
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos(currentArray => [todo, ...currentArray]);
  };
  console.log(todos);
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
