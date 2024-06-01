import { useState } from "react";

export function App1() {
  const [age, setAge] = useState(20);

  function handleClick() {
    // setAge(age + 1);
    // setAge(age + 1);
    setAge((currentValue) => {
      return currentValue + 1;
    });
    setAge((currentValue) => {
      return currentValue + 1;
    });
  }
  return (
    <>
      <div onClick={handleClick}>
        <h1>age is: {age}</h1>
      </div>
    </>
  );
}
