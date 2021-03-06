import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebase";
import "../css/add.css";

const Add = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(null);
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [img, setImage] = useState("");

  const formhandle = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, pass).catch((error) => {
      console.log(error);
    });
    console.log(auth.currentUser);
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  const handleplace = (e) => {
    e.preventDefault();
    let data = {
      place: place,
      country: country,
      temperature: temperature,
      img: img,
    };
    db.collection("cards")
      .doc(place)
      .set(data)
      .then(() => {});
    document.getElementById(".form").reset();
  };

  useEffect(() => {
    auth.onAuthStateChanged((user1) => {
      if (user1) {
        setUser(user1);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  if (user != null) {
    return (
      <div className="add">
        <form id="form" onSubmit={handleplace}>
          <input
            type="text"
            name="place"
            placeholder="Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            name="temp"
            placeholder="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <input
            type="text"
            name="img"
            placeholder="Image Url"
            value={img}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit" className="btn1">
            Submit
          </button>
        </form>

        <button className="btn1" onClick={signOut}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="add">
        <form id="form" onSubmit={formhandle}>
          <label htmlFor="Emal">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>

          <button className="btn1">Login</button>
        </form>
      </div>
    );
  }
};

export default Add;
