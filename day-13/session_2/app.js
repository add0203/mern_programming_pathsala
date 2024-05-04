import ReactDOM from "react-dom/client";
import React from "react";

import Homepage from "./src/pages/homepage/homepage.js";
import Navbar from "./src/pages/navbar/navbar.js";
import Carousal from "./src/pages/navbar/carousal.js";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {
  return (
    <>
      <Homepage />
    </>
  );
};

root.render(<App />);
