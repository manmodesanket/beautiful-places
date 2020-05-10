import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navitem">
        <a href="/">
          <h1>Beautiful Places</h1>
        </a>
      </div>
      <div className="navitem">
        {" "}
        <a href="/add">
          <button className="btn">Add a Place</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
