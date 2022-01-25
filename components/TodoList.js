import React from "react";

const TodoList = () => {
  const [currentTodo, setCurrentTodo] = React.useState("");
  const [todosList, setTodosList] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentTodo("");
    setTodosList([...todosList, currentTodo]);
  };

  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          aria-label="Your todo"
          placeholder="Add todo..."
          value={currentTodo}
          onChange={(event) => setCurrentTodo(event.target.value)}
          required
        />
        <button type="submit" disabled={currentTodo.length === 0}>
          Add
        </button>
      </form>
      <div>
        <ul>
          {todosList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
