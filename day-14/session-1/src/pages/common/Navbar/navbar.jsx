import React, { useState } from "react";
import "./navbar.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", // Change primary color
    },
  },
});
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header-parent-container">
      <div className="left">
        <Link to="/home">Home</Link>
        <Link to="/image-genrator">Image Genrator</Link>
        {/* <a href="/contact">Contact</a>
        <a href="/us">Us</a>
        <a href="/help">Help</a> */}
        <Link to="/history">History</Link>
      </div>
      <div onClick={() => setMenu(!menu)} className="right">
        <ThemeProvider theme={theme}>
          <MenuSharpIcon color="primary" />
        </ThemeProvider>
      </div>
      {menu && <div>hello</div>}
    </div>
  );
};

export default Navbar;
