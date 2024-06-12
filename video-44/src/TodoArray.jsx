export function TodoArray({ id,name,completed,toogleTodo,deleteTodo }) {
  return (
    <li  className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox
          checked={completed}
          onChange={(e) => {
            toogleTodo(id, e.target.completed);
          }}
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button
        data-button-delete
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
