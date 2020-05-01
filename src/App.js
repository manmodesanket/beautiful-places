import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Describe from "./components/Describe";
import Pictures from "./components/Pictures";
import "./css/styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Describe />
      <Pictures />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
