import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState();
  const [numberAllowed, setNumberAllowed] = useState();
  const [charAllowed, setCharAllowed] = useState();

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="password"
          value={password}
          className="outline-none w-full py-1 px-3"
          readOnly
        />
        <button className="outline-none  bg-gray-500 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex item-center gap-x-1">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length" className="text-white">
          Length : {length}
        </label>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="length" className="text-white">
          Number
        </label>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="charInput" className="text-white">
          Character
        </label>
      </div>
    </div>
  );
}

export default App;
