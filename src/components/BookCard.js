import React from "react";

export default function BookCard({ book }) {
  const image = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={book.title}
        style={{
          width: "120px",
          height: "160px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <h3 style={{ fontSize: "14px", margin: "10px 0 4px 0" }}>{book.title}</h3>
      <p style={{ fontSize: "12px", color: "#555" }}>
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>
      <p style={{ fontSize: "11px", color: "#999" }}>
        {book.first_publish_year || "—"}
      </p>
    </div>
  );
}
