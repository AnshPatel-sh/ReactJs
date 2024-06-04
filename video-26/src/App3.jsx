import { useEffect, useState } from "react";

export function App3() {
  /*IF you dont provide a return fucntion in useEffect 
    to remove the event listener then with every rerender of the 
    component new event listeners will keep adding causing many console logs  */

  // the below code not to be done
  /*useEffect(() => {
      const handler = () => {
        console.log(name);
      };

      document.addEventListener("click", handler);

      
    }, [name]); */

  const [name, setName] = useState("");
  useEffect(() => {
    const handler = () => {
      console.log(name);
    };

    document.addEventListener("click", handler);
    console.log(`Inside useEffect`)

    return () => {
      document.removeEventListener("click", handler);
      console.log(`Inside CleanUp`)
    };
  }, [name]);
  return (
    <>
      <h1>This is App3.jsx code</h1>
      <p>name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}
