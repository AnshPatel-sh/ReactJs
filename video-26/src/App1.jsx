import { useEffect, useState } from "react";

export function App1() {
  const [age, setAge] = useState(0);

  /*If you pass empty array then useEffect only runs once when the component mounts */
  useEffect(() => {
    console.log("Component mounted(App1.jsx code)");
  }, []);
  return (
    <>
      <div>
        <h1>This is App1.jsx  code</h1>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <h4>My age is {age}</h4>
      </div>
    </>
  );
}
