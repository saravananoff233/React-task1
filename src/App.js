import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";
import Home from "./Home";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [placedCount, setPlacedCount] = useState(0);

  const addCard = (card) => {
    setCards([...cards, card]);
    if (card.status === "Placed") setPlacedCount(placedCount + 1);
  };

  const deleteCard = (id) => {
    const updatedCards = cards.filter((_, index) => index !== id);
    setCards(updatedCards);

    if (cards[id].status === "Placed") {
      setPlacedCount(placedCount - 1);
    }
  };

  return (
    <div className="App">
      <Home totalCards={cards.length} placed={placedCount} unplaced={cards.length - placedCount} />
      <Form addCard={addCard} />
      <CardList cards={cards} deleteCard={deleteCard} />
    </div>
  );
}

export default App;