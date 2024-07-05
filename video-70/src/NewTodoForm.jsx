import { useContext, useRef } from "react";
import { TodoContext } from "./App";

export function NewTodoForm() {
  const { addNewTodo } = useContext(TodoContext);

  const nanmeRef = useRef();

  function handleSubmit(e) {
    if (nanmeRef.current.value === "") return;
    e.preventDefault();
    addNewTodo(nanmeRef.current.value);
    nanmeRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input type="text" id="todo-input" ref={nanmeRef} />
        <button>Add Todo</button>
      </form>
    </>
  );
}
