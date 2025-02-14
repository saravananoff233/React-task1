import React, { useState } from "react";

const Form = ({ addCard }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Unplaced");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    addCard({ name, status });
    setName("");
    setStatus("Unplaced");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Unplaced">Unplaced</option>
        <option value="Placed">Placed</option>
      </select>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default Form;