// utils/openlibrary.js
// --------------------
// This helper file handles fetching book data from the Open Library public API.

// Function to fetch books by title
export async function fetchBooks(query) {
    try {
      // Prepare API URL with the book title entered by the user
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
        query
      )}`;
  
      // Fetch data from Open Library API
      const response = await fetch(url);
  
      // If the API fails (like network error or invalid response)
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
  
      // Convert API response into JSON format
      const data = await response.json();
  
      // Return the top 20 results for faster performance
      return data.docs.slice(0, 20);
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  }
  