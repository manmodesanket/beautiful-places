import React from "react";
import { Link } from "@reach/router";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navitem">
        <Link to="/">
          <h1>Beautiful Places</h1>
        </Link>
      </div>
      <div className="navitem">
        {" "}
        <Link to="/add">
          <button className="btn">Add a Place</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
