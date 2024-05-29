import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("green");
            }}
            className="hover:file:bg-violet-100 outline-none px-4 py-1 rounded-full shadow-lg text-black font-semibold"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("red");
            }}
            className="hover:file:bg-violet-100 outline-none px-4 py-1 rounded-full shadow-lg text-black font-semibold"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="hover:file:bg-violet-100 outline-none px-4 py-1 rounded-full shadow-lg text-black font-semibold"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
