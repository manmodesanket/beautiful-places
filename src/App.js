import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import "./css/styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
