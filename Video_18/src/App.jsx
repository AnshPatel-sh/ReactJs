import { useState } from "react";
import { App1 } from "./App1";
import { Counter } from "./Exercise/Counter";
function slowCode() {
  console.log("slowCode exxecuted");
  return "Ansh slowCode";
}
function App() {
  // All hooks code goes hear

  // const [name, setName] = useState("Ansh");
  /*Use this to see how many times names are rendered*/
  // console.log("Render", name);

  /* If you use function to set the initial value then it will recalled evverytime the component is re-rendered */
  /* Example: slowCode function takes time to set the initial value then re-rendered everytime */
  const [name, setName] = useState(slowCode);

  /*Solution use the arrow function*/

  function handleClick() {
    setName("Changed name");
  }

  return (
    <>
      <div onClick={handleClick}>{name}</div>

      <App1></App1>
      <Counter></Counter>
    </>
  );
}

export default App;
