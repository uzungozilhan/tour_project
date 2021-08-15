import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/cards/Cards";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card/>
    </div>
  )
}

export default App;

/*
import React, { useState } from "react";
import { data } from "../../helpers/Data";
import "./Card.css";
function Card() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="card-container" onClick={() => setShowImage(!showImage)}>
      {showImage ? (
        <>
          {data.map((card) => {
            return (
              <div className="cards" key={card.id}>
                <img src={card.image} alt={card.title} />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {data.map((card) => {
            return (
              <div className="cards" key={card.id}>
                <div className="title">
                  <h2>{card.title}</h2>
                </div>
                <img src={card.image} alt={card.title} />
                <div className="card-over">
                  <p>{card.desc}</p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
export default Card;
*/