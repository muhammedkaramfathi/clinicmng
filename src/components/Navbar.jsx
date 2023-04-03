import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
// import ReorderIcon from '@mui/icons-material/Reorder';
import "./stayls/Navbar.css";


function Navbar() {
  // const [openLinks, setOpenLinks] = useState(false);

  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks);
  // };
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} style={{  borderRadius: `500px` , position: `fixed`}}/>
      </div>
      {/* <div className="rightSide">
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div> */}
    </div>
  )
}

export default Navbar
