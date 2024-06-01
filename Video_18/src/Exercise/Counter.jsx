import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  function handleClickEvent() {
    setCounter((currentValue) => {
      console.log(counter);
      return currentValue + 1;
    });
  }
  return (
    <>
      <div>
        <h1 onClick={handleClickEvent}>
          Click me to increment the counter:{counter}
        </h1>
      </div>
    </>
  );
}
