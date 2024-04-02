import { Component } from "react";


export default class BooksList extends Component {
  render(){
  return (
        <ul className="books-container">
          {this.props.books.map((book) => (
            <li
              key={book.id}
              onClick={() => this.props.onBookClick(book)}
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
      );}
}
