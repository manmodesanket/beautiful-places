import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Add from "./components/Add";
import Home from "./components/Home";
import "./css/navbar.css";
import "./css/styles.css";

const App = () => {
  return (
    <div>
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
      <Router>
        <Home path="/" />
        <Add path="/add" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
