import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/pages/common/Navbar/navbar";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const Heading = <h1>Hello React</h1>;

const Title = () => {
  return <Navbar />;
};

// root.render(Heading);
// root.render(Title());
root.render(<Title />);
// <Title/> = Title()