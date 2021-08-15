import React from "react";
import "./Cards.css";
import { data } from "../../helpers/data";

function Card() {
  return (
    <div className="card-container">
      {data.map((card) => {
        return (
          <div className="cards">
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
    </div>
  );
}

export default Card;

/*
<div className="card-container">
      <div className="cards">
        <div>
          <h2>{data[0].title}</h2>
        </div>
        <img src={data[0].image} alt={data[0].title} />
        <div className="card-over">
          <p>{data[0].desc}</p>
        </div>
      </div>
    </div>
    */
