import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Enter book title..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#4f46e5",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}
