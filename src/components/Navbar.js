import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navitem">
        <h1>Beautiful Places</h1>
      </div>
      <div className="navitem">
        <button className="btn">Add a Place</button>
      </div>
    </nav>
  );
};

export default Navbar;
