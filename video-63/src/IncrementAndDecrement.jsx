import { useReducer } from "react";

/**State here means count
 * and action means the operation that needs to be performed on the count
 */
function reducer(state, action) {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

export function IncrementAndDecrement({ initialValue = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>


      {count}


      
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
    </>
  );
}
