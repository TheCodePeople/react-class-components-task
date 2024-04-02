

import { Component } from "react"
export default class BookDetails extends Component{
  render(){
    return <div
    className={`book-details-modal ${this.props.selectedBook ? "visible" : ""}`}
    onClick={this.props.onClose}
  >
    {this.props.selectedBook && (
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={this.props.onClose}>
          &times;
        </span>
        <img
          src={this.props.selectedBook.volumeInfo.imageLinks?.thumbnail}
          alt={this.props.selectedBook.volumeInfo.title}
          className="book-image"
        />
        <p className="book-info">
          <strong>Title:</strong> {this.props.selectedBook.volumeInfo.title}
        </p>
        <p className="book-info">
          <strong>Author(s):</strong>{" "}
          {this.props.selectedBook.volumeInfo.authors?.join(", ")}
        </p>
        <p className="book-info">
          <strong>Publisher:</strong> {this.props.selectedBook.volumeInfo.publisher}
        </p>
        <p className="book-info">
          <strong>Published Date:</strong>{" "}
          {this.props.selectedBook.volumeInfo.publishedDate}
        </p>
      </div>
    )}
  </div>
  }
}