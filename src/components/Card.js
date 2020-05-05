import React, { Component } from "react";
import "../css/pictures.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.data.img} className="cardImg" />
        <h2 className="place">{this.props.data.place}</h2>
        <div className="span">
          <span className="span-item temp">{this.props.data.temperature}</span>
          <span className="span-item country">{this.props.data.country}</span>
        </div>
      </div>
    );
  }
}

export default Card;
