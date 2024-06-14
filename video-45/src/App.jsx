import { useEffect, useRef, useState } from "react";

function App() {
  const [textVal, setTextVal] = useState("");
  const textRef = useRef();
  useEffect(() => {
    // console.log(textRef);
    // console.log(textRef.current)
    console.log(textRef.current.value)
    textRef.current.focus()
  }, [textVal]);
  return (
    <>
      <p>Enter a text hear:</p>
      <input
        type="text"
        value={textVal}
        onChange={(e) => {
          setTextVal(e.target.value);
        }}
        ref={textRef}
      />
    </>
  );
}

export default App;
