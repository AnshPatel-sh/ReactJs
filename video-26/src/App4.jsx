import { useEffect, useState } from "react"


export function App4(){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const {person} = name
    useEffect(()=>{
        console.log(person)
    },[person])

    return (
      <>
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
      </>
    );
}