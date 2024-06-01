import FuncComponent from "./FuncComponent"
import ComponentName from "./ClassComponent";

function App() {
  return (
    <>
      <div className="large" id="largeDiv">
        <label htmlFor="inputId">Any Text</label>
        <input type="number" id="inputId" defaultValue={3} />
        <FuncComponent/>
        <ComponentName/>
      </div>
    </>
  );
}

export default App;
