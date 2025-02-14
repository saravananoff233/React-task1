import React from "react";

const Card = ({ id, name, status, deleteCard }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <button onClick={() => deleteCard(id)}>Delete</button>
    </div>
  );
};

export default Card;