import { useState } from "react";
import { Item } from "./Item";
function App() {
  /* In react js array cannot be displayed direced directly insted use map to loop through */
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    {
      id: crypto.randomUUID(),
      name: "Item 2",
    },
    {
      id: crypto.randomUUID(),
      name: "Item 3",
    },
  ]);

  function addNewItem() {
    setItems((currentArray) => {
      return [
        { id: crypto.randomUUID(), name: "New Item added" },
        ...currentArray,
      ];
    });
  }

  return (
    <>
      <div>
        <h2>Array of objects</h2>
        <button onClick={addNewItem}>Add new item</button>
      </div>

      {/* If you dont add keys to child rendering then we will observe
       unusual behaviour input ma add karine then add item kariye to input first item ne  jatu re na ke second
       item ma km ke keys nahi jode*/}
      {items.map((item) => {
        return (
          // <div key={item.id}>
          //   {console.log(items)}
          //   {console.log(item)}
          //   {console.log(item.name)}
          //   {console.log(item.id)}
          //   {item.name}
          //   <input type="text" />
          // </div>
          <Item key={item.id} name={item.name} />
        );
      })}
    </>
  );
}

export default App;
