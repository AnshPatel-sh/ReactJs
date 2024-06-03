import { useState } from "react";

function App() {
  const [name, setName] = useState("ansh");
  const [age, setAge] = useState(0);

  function decrementAge(){
    setAge((currentValue)=>{
      return currentValue - 1
    })
  }

  function incrementAge(){
    setAge((currentValue)=>{
      return currentValue + 1
    })
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <button onClick={decrementAge}>-</button>
        {age}
        <button onClick={incrementAge}>+</button>

        <br />

        <h4>My name is: {name} and my age is: {age}</h4>
      </div>
    </>
  );
}

export default App;
