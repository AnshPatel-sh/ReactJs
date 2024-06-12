import { useState } from "react";
import "./style.css";
import { TodoArray } from "./TodoArray";

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setNewTodoName("");
    if (newTodoName === "") return null;

    return setTodos((currentTodoArray) => {
      return [
        ...currentTodoArray,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
  }

  function toogleTodo(todoId, completed) {
    setTodos((currentTodoArray) => {
      return currentTodoArray.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currentTodoArray) => {
      return currentTodoArray.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoArray
              key={todo.id}
              {...todo}
              toogleTodo={toogleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label for="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => {
            setNewTodoName(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div>{newTodoName}</div>
    </>
  );
}

export default App;
