import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/Homepage/Homepage";
import ImageGenrator from "./src/pages/imageGenrator/ImageGenrator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import History from "./src/pages/History/History";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/image-genrator",
    element: <ImageGenrator />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const Heading = <h1>Hello React</h1>;

const App = () => {
  return <RouterProvider router={router} />;
};

root.render(<App />);
