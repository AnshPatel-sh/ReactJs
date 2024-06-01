import { Childern } from "./Childern";
import { Exercise } from "./Exercise";
import { Props } from "./Props";

function App() {
  return (
    <>
      <Props name="myName"></Props>
      <Childern>
        <span>This is Child Element</span>
        <h1>Inside the component Childern</h1>
      </Childern>
      {/* This is comment */}
      <Exercise isComplete={true}>TodoItem 1</Exercise>
    </>
  );
}

export default App;
