import { createContext, useContext, useEffect, useReducer, useState } from "react";
import "./style.css";
import { TodoItem } from "./TodoItem";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export const TodoContext = createContext();

  const ACTIONS = {
    ADD: "ADD",
    DELETE: "DELETE",
    TOOGLE: "TOOGLE",
  };
  function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD:
        return [
          ...state,
          { name: payload.name, completed: false, id: crypto.randomUUID() },
        ];

      case ACTIONS.TOOGLE:
        return state.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, completed: payload.completed };
          }

          return todo;
        });

      case ACTIONS.DELETE:
        return state.filter((todo) => todo.id !== payload.id);

      default:
        return state;
    }
  }

  const LOCAL_STORAGE_KEY = "todos";


export function App() {


  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value === null) return [];
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOOGLE, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }
  return (
    <TodoContext.Provider value={{todos,addNewTodo,deleteTodo,toggleTodo}}>
      <TodoList/>
      <NewTodoForm/>
    </TodoContext.Provider>
  );
}
