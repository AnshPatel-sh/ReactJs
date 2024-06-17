import { useCallback, useEffect , useState } from "react"

function App() {

const [name, setName] = useState("")
const [number, setNumber] = useState(0)

const printName = useCallback(()=>{
  console.log(`Name: ${name}`);
},[name])

useEffect(()=>{
  console.log(`Inside the useEffect`)
  printName()
},[printName])

  return (
    <>
      <p>Enter your name here</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <p>Enter your number here</p>

      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
    </>
  );
}

export default App
