import { Component } from "react";

class BooksList extends Component{
  render(){ const {books, onBookClick} = this.props 
 

  return (
    <ul className="books-container">
      {books.map((book) => (
        <li
          key={book.id}
          onClick={() => onBookClick(book)}
          className="books-item"
        >
          <img
            className="books-image"
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
          <div className="books-details">
            <p className="books-title">{book.volumeInfo.title}</p>
            <p className="books-author">
              {book.volumeInfo.authors?.join(", ")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
}

export default BooksList;
