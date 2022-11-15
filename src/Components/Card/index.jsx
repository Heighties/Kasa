import React from "react";
import "./card.css";

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <img src={cover} alt="logement" className="card__img" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default Card;
