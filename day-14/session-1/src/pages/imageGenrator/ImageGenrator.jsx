import React from "react";
import "./ImageGenrator.css";
const ImageGenrator = () => {
  return (
    <div className="image-gen-parent-container">
      <img src="https://picsum.photos/300/300" alt="" />
      <button className="submit-button">submit</button>
    </div>
  );
};

export default ImageGenrator;
