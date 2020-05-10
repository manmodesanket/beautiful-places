import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Add from "./components/Add";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./css/styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <Add path="/add" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
