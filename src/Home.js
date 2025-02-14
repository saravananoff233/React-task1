import React from "react";

const Home = ({ totalCards, placed, unplaced }) => {
  return (
    <div className="home">
      <h2>Card Management Dashboard</h2>
      <p>Total Cards: {totalCards}</p>
      <p>Placed: {placed}</p>
      <p>Unplaced: {unplaced}</p>
    </div>
  );
};

export default Home;