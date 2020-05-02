import React, { Component } from "react";
import { db } from "../firebase/firebase";
import Card from "./Card";
import "../css/pictures.css";

class Pictures extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    const data = [];
    db.collection("cards").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        let img = doc.data().img;
        let place = doc.data().place;
        const temp = {
          img: img,
          place: place,
        };
        data.push(temp);
      });
      this.setState({
        cards: [...data],
      });
    });
    //console.log(data);
  }

  render() {
    console.log(this.state.cards);
    return (
      <div className="cards">
        {this.state.cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    );
  }
}
export default Pictures;
