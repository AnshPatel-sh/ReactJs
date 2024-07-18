import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";


function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <h1 class="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.completed ? "strike-through" : undefined}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoList = {
  loader,
  element: <TodoList />,
};
