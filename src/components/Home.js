import React, { Component } from "react";
import Describe from "./Describe";
import Pictures from "./Pictures";

class Home extends Component {
  render() {
    return (
      <div>
        <Describe />
        <Pictures />
      </div>
    );
  }
}

export default Home;
