import React, { Component } from "react";
import { db } from "../firebase/firebase";
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
        let city = doc.data().city;
        let img = doc.data().img;
        let place = doc.data().place;
        const temp = {
          city: city,
          img: img,
          place: place,
        };
        data.push(temp);
      });
      this.setState({
        cards: [...this.state.cards, data],
      });
    });
    //console.log(data);
  }

  render() {
    console.log(this.state.cards);
    const items = this.state.cards.map((item, key) => (
      <ul key={key}>
        <li>{item.city}</li>
        <li>{item.place}</li>
      </ul>
    ));

    return (
      <div className="cards">
        <h1>Hello</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
export default Pictures;
//7588357481
