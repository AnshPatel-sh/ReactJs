import React, { useState, useEffect } from "react";
/* Main thing is that object is created with each re render
    means new reference is created so even if the state value is not changed
    still the useEffect will be executed 
    Take the below example 
*/

export function Example4() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const obj = { name };

  useEffect(() => {
    console.log("Name:", obj);
  }, [obj]);

  return (
    <>
      {/* 
        aa code ma jayere input ma change thay that means name state is changed 
        so useEffect will execute and logs the name
        But useEffect will also be logged even if we increment or decrement 

        because new object is created with every  re-render
        so useEffect will execute even if the value of name is not changed 

        To avoid this dependency array ma obj na place ma name direct pass kar devanu
        so jayere name change thase toj useEffect run thase

        useEffect(() => {
        console.log("Name:", obj.name);
        }, [name]);


    */}
      <h1>Explanation of App4.jsx</h1>
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
    </>
  );
}
