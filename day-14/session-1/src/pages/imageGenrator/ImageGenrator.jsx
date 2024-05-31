import React, { useState } from "react";
import "./ImageGenrator.css";
import Navbar from "../common/Navbar/navbar";

const ImageGenrator = () => {
  const [display, setDisplay] = useState(false);
  const [valueEntered, setValueEntered] = useState("Genrating....");

  const handleRefresh = () => {
    window.location.reload();
  };
  const func = (e) => {
    setValueEntered(e.target.value);
  };

  //   or use call back
  //   const layer = () => {
  //     func("layer called");
  //   };
  return (
    <div>
      <Navbar />
      <div className="image-gen-parent-container">
        <button
          onClick={() => {
            setDisplay(!display);
          }}
          className=""
        >
          Hide Image
        </button>
        {display && (
          <div className="img">
            <img src="https://picsum.photos/300/300" alt="" />
          </div>
        )}
        {/* <input onChange={layer} type="text" /> */}
        <div class="inputbox">
          <input
            onChange={(e) => {
              func(e);
            }}
            required="required"
            type="text"
          />
          {/* <span>Username</span> */}
          <i></i>
        </div>

        {valueEntered}
        {/* <button onClick={handleRefresh} className="">
          Get New Image
        </button> */}
      </div>
    </div>
  );
};

export default ImageGenrator;
