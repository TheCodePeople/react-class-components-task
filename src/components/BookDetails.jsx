import { Component } from "react";

class BookDetails extends Component {
  render() {
    const { selectedBook, onClose } = this.props;
    return (
      <div
        className={`book-details-modal ${selectedBook ? "visible" : ""}`}
        onClick={onClose}
      >
        {selectedBook && (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <img
              src={selectedBook.volumeInfo.imageLinks?.thumbnail}
              alt={selectedBook.volumeInfo.title}
              className="book-image"
            />
            <p className="book-info">
              <strong>Title:</strong> {selectedBook.volumeInfo.title}
            </p>
            <p className="book-info">
              <strong>Author(s):</strong>{" "}
              {selectedBook.volumeInfo.authors?.join(", ")}
            </p>
            <p className="book-info">
              <strong>Publisher:</strong> {selectedBook.volumeInfo.publisher}
            </p>
            <p className="book-info">
              <strong>Published Date:</strong>{" "}
              {selectedBook.volumeInfo.publishedDate}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default BookDetails;
