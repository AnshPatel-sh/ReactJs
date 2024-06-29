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
    case "RESET":
      return 0;
    case "INCREMENT-10":
      return state + action.payload.value;
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

      <br />
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset State
      </button>

      <br />

      <button
        onClick={() => {
          dispatch({ type: "INCREMENT-10", payload: { value: 10 } });
        }}
      >
        Increment by 10
      </button>
    </>
  );
}
