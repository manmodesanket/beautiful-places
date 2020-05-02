import React, { Component } from "react";
import "../css/pictures.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.data.img} className="cardImg" />
        <h2 className="place">{this.props.data.place}</h2>
      </div>
    );
  }
}

export default Card;
