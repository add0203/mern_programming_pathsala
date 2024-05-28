import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const decValue = () => {
    newCounter = counter - 1;
    setCounter(newCounter);
  };
  // java Script methode of handeling thing variable but it does not rerender the variable into UI
  // let counter = 1;
  // const incCount = () => {
  //   counter++;
  //   console.log(counter);
  // };
  // const decCount = () => {
  //   counter--;
  //   console.log(counter);
  // };
  return (
    <>
      <h1>Counter value : {counter} </h1>
      <button onClick={addValue}>Add value</button>
      <button onClick={decValue}>remove value</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
