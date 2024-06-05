import { useDeferredValue, useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Render of component`);
  });

  useEffect(() => {
    console.log(`Component is mounted`);
  }, []);

  useEffect(() => {
    console.log(`My name is ${name} and my age is ${age}`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    return () => {
      console.log(`Bye!! Component unmounted`);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`Time Out function !!! : My name is: ${name}`);
    }, 1000);

    return ()=>{
        clearTimeout(timeout)
    }
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
