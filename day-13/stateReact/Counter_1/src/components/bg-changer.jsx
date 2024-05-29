import React from "react";

function bgChanger() {
  return (
    <>
      <div
        className="w-full h-screen duration-200 justify-center justify-items-center"
        style={{ bacgroundColor: "green" }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white">
              test
            </button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white">
              test2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default bgChanger;
