import { useMemo, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([
    "mango",
    "pineapple",
    "orange",
    "green apple",
    "watermelon",
  ]);

  const filterItems = (items, searchTerm) => {
    if (!searchTerm) {
      return items;
    }

    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterItemsUsingMemo = useMemo(() => {
    return filterItems(items, searchTerm);
  }, [items, searchTerm]);

  return (
    <>
      Enter the item to be searched:
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <ul>
        {filterItemsUsingMemo.length > 0 ? (
          filterItemsUsingMemo.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        ) : (
          <li>No result found</li>
        )}
      </ul>
    </>
  );
}

export default App;
