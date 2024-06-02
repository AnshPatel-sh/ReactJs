import { createRef } from "react";
import { useState } from "react";

const INITIAL_VALUES = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUES);
  const [input, setInput] = useState("");
  /* always remember that we cannot directly change the array we always returns the new copy cannot idrectly 
  modify the array otherwise react will throw an error*/
  /*remove first element */
  function removeFirstElement() {
    setArray((currentArray) => {
      console.log(currentArray);
      return currentArray.slice(1);
    });
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => {
        return element !== letter;
      });
    });
  }

  function addFirstElement(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLastElement(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray([INITIAL_VALUES]);
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") {
          return "H";
        }
        return element;
      });
    });
  }

  function addToFirstElement(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First element</button>

      <br />
      <br />

      <button
        onClick={() => {
          removeSpecificLetter("B");
        }}
      >
        Remove specific letter
      </button>
      <br />

      <button
        onClick={() => {
          addFirstElement("X");
        }}
      >
        Add First Element
      </button>

      <br />

      <button
        onClick={() => {
          addLastElement("Z");
        }}
      >
        Add Last Element
      </button>
      <br />

      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />

      <button onClick={updateAToH}>Update A to H</button>
      <br />

      <input
        type="text"
        value={input}
        onChange={ (e)=>{
          setInput(e.target.value)
        }}
      />
      <button
        onClick={() => {
          addToFirstElement(input);
        }}
      >
        Add First Element
      </button>
      <br />

      <div>{array.join(", ")}</div>
    </>
  );
}

export default App;
