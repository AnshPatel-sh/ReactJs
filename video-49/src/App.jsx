import { useState } from "react";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("");

  /**This is a custom hook
   * It takes the initial boolean value as it will change it inside the function
   * Then it use the useState hook
   * The setIsDarkMode logic is defined inside
   * Then we will return the value and our function
   */
  function useToogle(initialValue) {
    const [isDarkMode, setIsDarkMode] = useState(initialValue);
    function toogle() {
      setIsDarkMode((currentValue) => {
        return !currentValue;
      });
    }
    return [isDarkMode, toogle];
  }

  // Using the useToogle
  const [isDarkMode, setIsDarkMode] = useToogle(false);

  return (
    <>
      <div
        style={{
          background: isDarkMode ? "#333" : "white",
          color: isDarkMode ? "white" : "#333",
        }}
      >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <br />
        <button
          /*onClick={() => {
            setIsDarkMode((currentValue) => {
              return !currentValue;
            });
          }} */

          onClick={setIsDarkMode}
        >
          Dark mode
        </button>
      </div>
    </>
  );
}

export default App;
