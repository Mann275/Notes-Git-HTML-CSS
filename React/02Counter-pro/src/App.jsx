import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 5) {
      counter += 1;
      // setCounter(counter + 1);
      setCounter(counter);
      console.log("Add button clicked", counter);
    } else console.log("Counter cannot exceed 5");
  };

  const removeValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
      console.log("Remove button clicked", counter);
    } else console.log("Counter cannot be less than 0");
  };

  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add </button>
      <br />
      <button onClick={removeValue}>remove </button>
    </>
  );
}

export default App;
