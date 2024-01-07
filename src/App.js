import { useState } from "react";

import BookDetails from "./components/BookDetails";
import BookSearch from "./components/BookSearch";

import "./App.css";
import BooksList from "./components/BooksList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      const booksData = await response.json();

      setBooks(booksData.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="app-container">
      <header className="title-container">
        <h1 className="title">Books Search</h1>
      </header>

      <BookSearch onBookSearch={searchBooks} />

      <BookDetails
        selectedBook={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

      <BooksList books={books} onBookClick={handleBookClick} />
    </div>
  );
};

export default App;
