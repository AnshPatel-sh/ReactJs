import { useState, useEffect } from "react";
import { App1 } from "./App1";
import { App2 } from "./App2";
import { App3 } from "./App3";
import { App4 } from "./App4";
import { Example4 } from "./Example4";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function logs(){
    console.log("Name or age is changed",name,age)
  }
  /*use effect only called when something is changed in the dependency array
  so if you only pass name then it will be only called when the name input is changed*/
  useEffect(logs,[name,age])

  return (
    <>
      <div>
        {/* <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <br />
        <br />
        <button
          onClick={() => {
            setAge((currentValue) => {
              return currentValue - 1;
            });
          }}
        >
          -
        </button>
        {age}
        <button
          onClick={() => {
            setAge((currentValue) => {
              return currentValue + 1;
            });
          }}
        >
          +
        </button>
        <h4>
          My name is: <span style={{ fontStyle: "italic" }}>{name}</span> and my
          age is: <span style={{ fontStyle: "italic" }}>{age}</span>
        </h4>
        <br />
        <br />

        <App1></App1>
        <App2></App2>
        <App3></App3>
        <App4></App4>
        <br />
        <br />
        <br />
        <br /> */}

        <Example4></Example4>
      </div>
    </>
  );
}

export default App;
