import { useState } from "react";
import { DisplayComponent } from "./src/DisplayComponent";

export function Function({favouriteNumber}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const incrementAge = () => {
    setAge((currentValue) => {
      return currentValue + 1;
    });
  };

  return (
    <>
      <div>
        <p style={{ display: "inline" }}>
          <b>Enter your name hear: </b>
        </p>
        <input
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
        <button onClick={incrementAge}>+</button>

        <br />
        <br />

        {favouriteNumber
          ? `My favourite number is ${favouriteNumber}`
          : `You need to pass the fovourite number`}

        <DisplayComponent name={name} age={age} />
      </div>
    </>
  );
}
