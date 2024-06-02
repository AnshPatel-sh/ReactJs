import { useState } from "react";

function App() {
  const [value, setValue] = useState("ansh");
 
  console.log("Value", value);

  return (
    <>
      {/* This is static value and cannot be changed */}
      {/* <input type="text" value={value} /> */}

      {/* This is default value can be changed and controlled by the browser but doesnt update the value */}
      {/* <input type="text" defaultValue={value} /> */}

      {/* This will change the state of the value  */}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

    </>
  );
}

export default App;
