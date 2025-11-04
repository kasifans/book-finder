import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import AIPanel from "./components/AIPanel";
import { fetchBooks } from "./utils/openlibrary";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handles user search
  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setBooks([]);
    try {
      const data = await fetchBooks(query);
      if (data.length === 0) {
        setError("No books found. Try another title.");
      } else {
        setBooks(data);
      }
    } catch (err) {
      setError("Something went wrong while fetching books.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#4338ca",
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        📚 Book Finder
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p style={{ textAlign: "center", color: "#555" }}>Loading...</p>
      )}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && !error && books.length > 0 && <BookList books={books} />}

      <AIPanel />

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "12px",
          color: "#888",
        }}
      >
        Built for Aganitha Full Stack Developer Take-Home Challenge
      </footer>
    </div>
  );
}
