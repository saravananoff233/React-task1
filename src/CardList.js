import React from "react";
import Card from "./Card";

const CardList = ({ cards, deleteCard }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} id={index} name={card.name} status={card.status} deleteCard={deleteCard} />
      ))}
    </div>
  );
};

export default CardList;