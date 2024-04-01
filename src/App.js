import React, { Component } from "react";
import BookDetails from "./components/BookDetails";
import BookSearch from "./components/BookSearch";
import BooksList from "./components/BooksList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedBook: null,
    };
  }

  searchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      const booksData = await response.json();

      this.setState({ books: booksData.items });
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  handleBookClick = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    const { books, selectedBook } = this.state;

    return (
      <div className="app-container">
        <header className="title-container">
          <h1 className="title">Books Search</h1>
        </header>

        <BookSearch onBookSearch={this.searchBooks} />

        <BookDetails
          selectedBook={selectedBook}
          onClose={() => this.setState({ selectedBook: null })}
        />

        <BooksList books={books} onBookClick={this.handleBookClick} />
      </div>
    );
  }
}

export default App;
